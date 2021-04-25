# Criticly
TV show review app
## Getting Started
---------------

### What to download before you get started

To begin you need access to the GitHub repo. Contact @Daivik Goel for access to it.

<http://github.com/DaivikGoel/Criticly>

Then make sure your machine has git installed on it and you pull down the repo. Further instructions on how to do this can be found here:

<https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository>

From here you will need to install node js and npm. You can find detailed instructions here:

<https://www.freecodecamp.org/news/how-to-install-node-in-your-machines-macos-linux-windows/>

You will also need to download an iPhone simulator(if on Mac) and/or an android simulator( need to if you are on Windows).

This document runs how to do both on a Mac:

<https://grinchik.com/blog/how-to-install-ios-simulator-and-android-emulator-on-mac>

Windows installation and running of Android Studio is pretty similar to the Mac instructions listed here.

### Once everything is downloaded

You then need to open your bash window and go into your the repository. From there you will need to have two windows open, one in the client folder and one in the server. Then do the following commands in each of the folders:

npm install yarn

yarn install

After this you need to contact @Daivik Goel to whitelist your ip on Google Cloud. Make sure if you have a VPN you turn it off or we will need to keep whitelisting multiple IP's.

You then need to add ask @Daivik Goel or @Mighty Codes for certain environment files and config files. There are specific instructions for each one:

apikeys.json - This file has to go under the client folder (criticly/client/apikeys.json)

firebaseconfig.js - There are two versions of this file. The version of the file that has export const has to go under the client folder in the environment folder (Criticly/client/environment/firebaseconfig.js).

The version of this file that has modules.exports has to go under the server folder in the environment folder (Criticly/server/environment/firebaseconfig.js)

config.js - This file goes in the server folder (criticly/server/config.js)

apiurl.ts - This file goes in the client folder under the constants folder (criticly/client/constants/apiurl.js)

If you are using iPhone your file should be: export const apiUrl = 'http://localhost:3000/'

If you are using Android your file should be: @Mighty Codes can you add it here

After this you should be good to run!

### How to run the app

After this in the server folder you will want to run the command:

DEBUG=myapp:* npm start

You should see connected pop up if everything went well in connecting to the database

And in the client folder you will want to run the command:

expo start

You should see a screen like this pop up with different simulators to choose


Choose your respective simulator and you should be able to start the app!
