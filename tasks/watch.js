/**
 * Created by KarlFast on 7/10/2015.
 */

module.exports = {





        less: {
            files: ['./src/**/*.less'],
            tasks: ['less:dev'],
            options: {
                livereload: true
            }
        },
        html: {
            files: ['**/*.html'],
            //tasks: ['less:dev'],
            options: {
                livereload: true
            }
        }




}