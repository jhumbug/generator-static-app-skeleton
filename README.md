# Static App Skeleton

## Overview
This skeleton is for creating and deploying a one page static html/js/css app.  It uses a bunch web technologies to help workflow, organization and rapid development.

It uses:
* [Backbone](http://backbonejs.org/) as it's MVC.
* [LESS](http://lesscss.org/) as it's css pre-processor.
* [gulp](http://gulpjs.com/) as it's task runner.
* [Browserify](http://browserify.org/) as it's dependency manager.
* And several packages come pre-installed to help out with things (Bootstrap, jQuery, lodash, BrowserSync, Font Awesome and more)

## Installation and Prerequisites
You'll need a few things to be able to run this.  First being node and npm.  Go here to start that whole process: https://nodejs.org/

Next you'll want to get gulp set up globally. `npm install --global gulp`

Now it's time to install.  First clone the repo.  How could you forget that?

Next run `npm install`.

You're done!

Oh yeh, optionally, I've stubbed in a blank bower.json file if you want to also use that to load front-end dependencies that aren't in npm's registry. Go install [Bower](http://bower.io/) if you haven't already.

## Setup

Okay, you're not really done.  There's some setup to do before gulp will let you proceed without errors.

1. First go into the gulp folder and copy and rename **.ftppass.sample** to **.ftppass** and change the values to whatever your ftp information is.  It can handle both passwords and ssh keys for sftp.  This is so you can deploy to dev, ref/staging/ and production sites.  Use any or all of them.

2. Next, run `gulp`. This compiles all the less, js and copies the images, fonts, and markup into a .build folder for serving using BrowserSync.  It also watches for changes and will reload and inject css as needed.

3. The app technically works fine now, but you'll probably want to go in and rename some things to suit your purposes.  I've named everything you'll want to rename to **_default** so you can easily do a search inside the projects files for it a mass renaming.

## More Gulp Commands

`gulp watch` starts watching your project for changes so it can compile and show your changes in a browser right away.

`gulp dev` compiles everything and deploys to your dev site defined in .ftppass

`gulp staging` compiles everything and deploys to your staging site defined in .ftppass

`gulp production`  compiles everything and deploys to your production site defined in .ftppass
