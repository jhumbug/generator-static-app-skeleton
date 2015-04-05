var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
	// priorityName: {
	//     method: function () {},
	//     method2: function () {}
	// }

  // The name `constructor` is important here
  constructor: function () {
	// Calling the super constructor is important so our generator is correctly set up
	generators.Base.apply(this, arguments);

	// Next, add your custom code
	this.option('coffee'); // This method adds support for a `--coffee` flag
	// And you can then access it later on this way; e.g.
    this.scriptSuffix = (this.options.coffee ? ".coffee": ".js");

	// This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
    // And you can then access it later on this way; e.g. CamelCased
    this.typedAppName = this.appname;
    this.appname = this._.camelize(this.appname);

      
  },

  paths: function () {
    this.destinationRoot();
    // returns '~/projects'

    this.destinationPath('index.js');
    // returns '~/projects/index.js'

    this.sourceRoot();
    // returns './templates'

    this.templatePath('index.js');
    // returns './templates/index.js'
  },

  	

  	initializing: {
  		init: function () {
			this.extraNpmModules = {
				dev: [],
				production: []

			};
			this.extraBowerComponents = {
				dev: [],
				production: []

			};

			this.promptInstall = function (options) {
			    var done = this.async();

			    var prompts = [
			    	{
						type    : 'input',
						name    : 'name',
						message : 'Your project name',
						default : this.appname // Default to current folder name
				    },
				    {
				        type    : 'input',
				        name    : 'devNpm',
				        message : 'Enter a comma separated list of extra dev npm modules to install',
				        default : '' // Default to none
				    },
				    {
				        type    : 'input',
				        name    : 'prodNpm',
				        message : 'Enter a comma separated list of extra production npm modules to install',
				        default : '' // Default to none
				    },
				    {
				        type    : 'input',
				        name    : 'devBower',
				        message : 'Enter a comma separated list of extra dev bower components to install',
				        default : '' // Default to none
				    },
				    {
				        type    : 'input',
				        name    : 'prodBower',
				        message : 'Enter a comma separated list of extra production bower components to install',
				        default : '' // Default to none
				    }

			    ];


			    this.prompt(prompts, function (answers) {
			    	this.log('You\'ve named your app: ' + answers.name);
					//strip whitespace and break into array
					this.extraNpmModules.dev = answers.devNpm.replace(/ /g,'').split(',');
					this.extraNpmModules.production = answers.prodNpm.replace(/ /g,'').split(',');
					this.log(this.extraNpmModules);

					//strip whitespace and break into array
			        this.extraBowerComponents.dev = answers.devBower.replace(/ /g,'').split(',');
			        this.extraBowerComponents.production = answers.prodBower.replace(/ /g,'').split(',');
			        this.log(this.extraBowerComponents);

					done();
			    }.bind(this));
			};
	  	}
  	},

  	prompting: {
  		install: function () {
			this.promptInstall();
	  	}
	},

	configuring: {

	},

	writing: {
	  	copy: function () {
			this.template('./bower.json', './bower.json');

			this.directory('./gulp', './gulp', this._.bind(function () {
				this.log('hello');
			}, this));

	  	}
	},

	install: {
		runDependencies: function () {
			// this.bowerInstall(); // bower
			this.installDependencies(); //npm and bower

			this.config.save(); //save yo-rc.json
		}



	  	// installingLodash: function() {
	   //  	this.npmInstall(['lodash'], { 'saveDev': true });
	  	// }	
	}
  


});


// var generators = require('yeoman-generator');

// module.exports = generators.NamedBase.extend();