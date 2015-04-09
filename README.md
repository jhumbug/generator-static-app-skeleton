# Yeoman Generator for a Backbone + LESS + gulp + Browserify Static App Skeleton

## Overview
This yeoman generator provides you with a static app skeleton for creating and deploying a one page static html/js/css app.  It uses a bunch web technologies to help workflow, organization and rapid development.

It uses:
* [Backbone](http://backbonejs.org/) as it's MVC.
* [LESS](http://lesscss.org/) as it's css pre-processor.
* [gulp](http://gulpjs.com/) as it's task runner.
* [Browserify](http://browserify.org/) as it's dependency manager.
* And several packages come pre-installed to help out with things (Bootstrap, jQuery, lodash, BrowserSync, Font Awesome and more)

## Prerequisites
First, make sure you have [yeoman](http://yeoman.io/) installed globally. `npm install yo -g`

Once you have that you can install this generator. `npm install -g generator-static-app-skeleton`

One major thing this repo uses is gulp. You'll need to set that up globally. `npm install -g gulp`

## Generating Your App
Create your project directory and cd into it: `mkdir test2 && cd test2`

And run `yo static-app-skeleton`. 

You'll get a few prompts about customizing your app.

## Using Your App
There's a little bit of setup left to do before you can do everything you might need to.

#### FTP Deployment

To enable ftp deployment to remote servers, go into the gulp folder and copy and rename **.ftppass.sample** to **.ftppass** and change the values to whatever your ftp information is.  It can handle both passwords and ssh keys for sftp.  This is so you can deploy to dev, ref/staging/ and production sites.  Use any or all of them.

#### Serving Your App and Listening for Changes

Run `gulp` to compile all the less, js and copies the images, fonts, and markup into a .build folder for serving using BrowserSync.  This will also watch for changes and reload or inject css when a file is saved.

#### More Gulp Commands

`gulp -c` or `gulp --clean=true` will first delete the previous build folder.

`gulp watch` starts watching your project for changes so it can compile and show your changes in a browser right away.

`gulp dev [-c]` compiles everything and deploys to your dev site defined in .ftppass

`gulp staging [-c]` compiles everything and deploys to your staging site defined in .ftppass

`gulp production [-c]`  compiles everything and deploys to your production site defined in .ftppass
