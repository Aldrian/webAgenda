module.exports = function (grunt) {
    grunt.initConfig({
        express: {
            options: {
                script: 'server/server.js'
            },
            prod: {
                options: {
                    node_env: 'production',
                    port: 4500
                }
            },
            dev: {
                options: {
                    node_env: 'development',
                    port: 3000
                }
            },
            test: {
                options: {
                    node_env: 'test',
                    port: 3030
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('express-keepalive', function () {
        this.async();
    });

    grunt.registerTask('serve', function (mode) {
        if (mode === 'production') {
            return grunt.task.run(['express:prod', 'express-keepalive']);
        } else if (mode === 'test') {
            return grunt.task.run(['express:test', 'express-keepalive']);
        }

        return grunt.task.run(['express:dev', 'express-keepalive']);
    });

    grunt.registerTask('default', 'serve');
};