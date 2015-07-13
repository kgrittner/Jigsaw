module.exports = {


    dev: {
        options: {
            sourceMap: true,
            dumpLineNumbers: 'comments',
            relativeUrls: true,
            sourceMapURL: 'app.css.map'
        },
        files: {
            './src/app.css': './src/app.less'
        }
    }



}