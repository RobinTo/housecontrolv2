import express from 'express';
import request from 'request';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

import secrets from './secrets';


const router = express.Router();

router.get('/ruter', (req, res) => {
  request.get('http://reisapi.ruter.no/StopVisit/GetDepartures/2300438', (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const ruterReiser = JSON.parse(body);
      res.json(ruterReiser);
    } else {
      res.json({ error: 'Kunne ikke hente ruter reiser' });
    }
  });
});

router.get('/weather', (req, res) => {
  request.get(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&units=metric&appid=${secrets.weatherApiKey}`, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const weather = JSON.parse(body);
      res.json(weather);
    } else {
      res.json({ error: `Kunne ikke hente været for ${req.query.city}.` });
    }
  });
});

router.post('/rfoutlet/:code', (req, res) => {
  exec(`sudo /var/www/rfoutlet/codesend ${req.params.code}`, (error, stdout, stderr) => {
    if (error) {
      res.json({ status: 'error' });
      console.error(`exec error: ${error}`);
      return;
    }
    res.json({ status: 'ok' });
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

router.post('/shutdown', (req, res) => {
  exec('sudo halt', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.json({ status: 'error' });
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
});

router.get('/imagelist', (req, res) => {
  fs.readdir('./static/sliderimages', (err, files) => {
    if (err) {
      res.json({ error: err.message });
    } else {
      const imageFiles = files.filter(f => /(\.png$)|(\.jpg$)|(\.jpeg$)/i.test(f));
      res.json(imageFiles);
    }
  });
});

export default router;
