module.exports = function (grunt) {

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
            files: ['<%= jshint.files %>'],
            tasks: [
                'jshint',
                'requirejs'
                //'concat',
                //'uglify:buildall'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'default',
        [
            'jshint', //检查js语法错误
            //'uglify:buildall', //压缩js
            //'concat', //合并js和css
            'requirejs',
            'watch'
        ]);
};