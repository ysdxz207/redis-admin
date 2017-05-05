module.exports = function (grunt) {

    var SCSS_DIR = "scss",
        SCSS_PATH =SCSS_DIR + "/*.scss",
        CSS_DIR = "public/css",
        BULMA_DIR = "node_modules/bulma";

    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        // 通过sass编译成css文件
        sass: {
            dist: {
                options: {
                    loadPath: [BULMA_DIR],
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: SCSS_DIR,
                    src: ['*.scss'],
                    dest: CSS_DIR,
                    ext: '.css'
                }]
            }
        },
        // 文件合并
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            js: {
                src: [
                    "src/**/*.js"
                ],
                dest: "public/js/index.js"
            },
            css: {
                src: [
                    "src/css/*.css"
                ],
                dest: "public/css/index.css"
            }
        },
        //压缩js
        uglify: {
            options: {
                stripBanners: true, //合并时允许输出头部信息
                banner: '/*!<%= pkg.name %>-<%= pkg.version %>-' + '<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            buildall: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '**/*.js',
                    dest: 'public/js/'
                }]
            }
        },
        watch: {
            files: ['<%= jshint.files %>', SCSS_PATH],
            tasks: [
                'sass',
                'jshint',
                //'concat',
                //'uglify:buildall'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'default',
        [
            'sass:dist',
            'jshint', //检查js语法错误
            //'uglify:buildall', //压缩js
            //'concat', //合并js和css
            'watch'
        ]);
};