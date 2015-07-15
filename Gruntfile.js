/**
 * Created by KarlFast on 7/9/2015.
 */


var path = require('path');
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });


    // This will load the config for grunt so we don't have to do grunt.load(module) for every dependency
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks'),
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
        }
    });

    grunt.registerTask('default', ['less:dev']);

    grunt.registerTask('l', ['less:dev']);
    grunt.registerTask('cn', ['connect:app']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('wl', ['watch:less']);
    grunt.registerTask('wh', ['watch:html']);
    //grunt.registerTask('wh', ['watch']);

    grunt.registerTask('s', ['cn', 'w']);           // Connect & Watch all
    grunt.registerTask('swl', ['cn', 'wl']);        // Connect & Watch less
    grunt.registerTask('swh', ['cn', 'wh']);        // Connect & Watch html



};