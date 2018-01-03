import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';
console.log('Generating minified bundle for production via webpack. This will take a moment...');
webpack(webpackConfig).run((err, stats) => {
    if (err) {//fatal error - Stop here
        console.log(err.bold.red);
        return 1;
    }
    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }
    if (jsonStats.hasWarning) {
        console.log('webpack has generated the below warnings:'.bold.yellow);
        return jsonStats.warnings.map(warning => { console.log(warning.yellow) })
    }
    console.log('Webpack stats: ${stats}');
    console.log('Your application has been compiled in the production mode and written to ./dist. It\'s ready to roll'.green);
    return 0;
});