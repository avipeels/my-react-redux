import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};
export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: './src/index',
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),//optimises the order of the files that are bundled in & for optimal minification
        new webpack.DefinePlugin(GLOBALS),//lets us to find variables that are made available to the libraries that webpack is bundling. Eg: react looks at node variables to check for production / dev mode. It also reduces teh bundle size
        new ExtractTextPlugin('styles.css'),//lets us extract our css in to a seperate file(physical)
        new webpack.optimize.DedupePlugin(),//eliminates teh duplicate packages on our final bundle to keep our bundle size as small as possibe
        new webpack.optimize.UglifyJsPlugin()//minifies our javascript
    ],
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel'] },
            { test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap") },//to have a seperate physical file for css
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    }
};
