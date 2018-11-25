const path = require('path');
module.exports = {
    entry:{
        main: ["./src/main.js","./src/abc.js"] 
        /* all src files that are to be bundled */
    },
    mode: "development",
    /* setting the mode to production will compress the output file which will be of much smaller size */
    output: {
        filename: "[name]-bundle.js", 
        /* output file name, value of name variable will be picked from first file of src files array */
        path: path.resolve(__dirname, '../dist'),
        /* where to place the output bundled file */
        publicPath: '/js' 
        /* path where above files will be served, right now set as js folder in root dir */
    },
    /* using above 3 settings, we can do : webpack --mode=development 
        and it will create the main-bundle.js in dist folder
    */
    /* to run a local server webpack-dev-server needs to be installed, 
        to run the server: webpack-dev-server --config=config/webpack.dev.js 
        Hot reloading comes out of the box with webpack-dev-sever
    */
    devServer: {
        contentBase: './' 
        /* path from where index.html will be picked, set as root dir */
    }
};