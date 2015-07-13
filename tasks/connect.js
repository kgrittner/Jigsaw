/**
 * Created by KarlFast on 7/10/2015.
 */

// RESTART: npm restart livereload

module.exports = {

    app: {
        options: {
            port: 9000,
            base: './',
            middleware: function (connect, options, middlewares) {
                middlewares.unshift(require('connect-livereload')());
                return middlewares;
            }
        }
    }



};