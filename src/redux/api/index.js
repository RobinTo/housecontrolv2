import fetch from 'isomorphic-fetch';

export const postOutletCode = code => fetch(`/api/rfoutlet/${code}`, {
  method: 'POST',
})
  .then(response => response.json());

export const getBussTimes = () => fetch('/api/ruter')
  .then(response => response.json());

export const getWeather = () => fetch('/api/weather?city=Lorenskog')
  .then(response => response.json());

export const getImageList = () => fetch('/api/imagelist')
  .then(response => response.json());
