# HouseControl v2

This is my second version of a sort of dashboard for our house. This runs on a raspberry pi 3 inside an [Official Raspberry Pi 7" touchscreen display](https://thepihut.com/collections/raspberry-pi-screens/products/official-raspberry-pi-7-touchscreen-display). 

![Home Page screenshot](http://i.imgur.com/OyQ4Qzg.png)

# Features

## Remote controlled outlets

* Using https://github.com/ninjablocks/433Utils and a simple [cheap 433 mhz receiver and transmitter](http://www.ebay.com/itm/5PCS-433Mhz-RF-transmitter-and-receiver-kit-Module-Arduino-ARM-WL-MCU-Raspberry-/191740837423?hash=item2ca4a4fe2f:g:B-QAAOSweuxWTE9U) I extracted the codes sent by a remote for outlets, and send them upon certain requests.

## Camera

* Connecting to a [Raspberry Pi Zero W](https://thepihut.com/products/raspberry-pi-zero-w) with [MotionEye](https://github.com/ccrisan/motioneyeos) and a [Camera Module](https://thepihut.com/collections/raspberry-pi-camera/products/raspberry-pi-camera-module) it can stream a full screen live video from the camera. Currently in use as a baby monitor, although since it has no sound this is still incomplete.

## Weather

* Receives weather from [OpenWeatherMap](https://openweathermap.org/) and displays the weather on the home screen.

## Buss times

* Shows the nearest departures from the bus station nearest to us retrieved from the Ruter API.

## Digital picture frame

* Can display pictures from a folder in a slideshow fashion.

# Credits

* The default background is taken from the [top all time post in the wallpapers subreddit by zlakphoto](https://www.reddit.com/r/wallpapers/comments/2rr9ec/softened_a_photo_i_took_of_hollywood_blvd/)

# Info
Disclaimer: I am by no means a designer, this is just a personal project for fun. Stuff works and looks ok, but can certainly be improved upon.

To run:
* yarn build
* yarn start
* http://localhost:3000

To develop:
* yarn dev
* http://localhost:4000
