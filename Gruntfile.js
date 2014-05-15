'use strict';
var path = require('path')
module.exports = function(grunt) {
	var task = grunt.task;
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> \n' + ' * @Author: <%= pkg.author.name %> <<%= pkg.author.email %>>\n' + ' * Updata in <%= grunt.template.today("yyyy-mm-dd h:MM:ss TT") %>\n' + ' * Copyright (c) NOYOBO\n */\n',

        clean: {
            build: {
                src: ["build/*"]
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'assets/_sass/',
                    src: ['**/*.scss'],
                    dest: 'build/css',
                    ext: '.css'
                }]
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>',
                beautify: {
                    ascii_only: true
                }
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*.js', '!**/*-min.js'],
                    dest: 'build/',
                    ext: '-min.js'
                }]
            }
        },
        cssmin: {
            options: {
                banner: '<%= banner %>',
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'build/',
                    src: ['**/*.css', '!**/*-min.css'],
                    dest: 'build/',
                    ext: '-min.css'
                }]
            }
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'assets/',
                    src: ['**/*-min.js', 'font/*', 'img/*', '!**/*.sass'],
                    dest: 'build/',
                    filter: 'isFile'
                }]
            }
        },
        watch: {
            'all': {
                files: ['assets/**/*.js',
                    'assets/**/*.css',
                    'assets/**/*.less',
                    'assets/**/*.php',
                    'assets/**/*.html',
                    'assets/**/*.htm',
                    'assets/**/*.scss'
                ],
                tasks: ['build']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('build', '默认构建任务', function() {
        task.run(['clean', 'copy', 'sass', 'uglify', 'cssmin']);
    });

    return grunt.registerTask('default', ['clean', 'copy', 'sass', 'uglify', 'cssmin']);
};