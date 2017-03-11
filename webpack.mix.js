const { mix } = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Customize Your Webpack Config
 |--------------------------------------------------------------------------
 |
 |
 */
mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Take Note : to Load these Files In Proper Order
 | public/js/manifest.js : The Webpack manifest runtime
 | public/js/vendor.js : Your vendor libraries
 | public/js/app.js : Your application code
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
 /*
  |--------------------------------------------------------------------------
  | We Extract Our Vendor Files
  |--------------------------------------------------------------------------
  |
  */
   .extract(['vue', 'lodash', 'jquery', 'axios', 'element-ui', 'vue-router', 'vue-timeago', 'vuex', 'vuex-router-sync'])
   .sass('resources/assets/sass/app.scss', 'public/css')
  /*
  |--------------------------------------------------------------------------
  | Extra Debugging Options , May be Turn Off to Enhance Compilation Time
  |--------------------------------------------------------------------------
  |
  */
   .sourceMaps();
  /*
  |--------------------------------------------------------------------------
  | Only Set Mix During Production
  |--------------------------------------------------------------------------
  |
  |
  */
if (mix.config.inProduction){
  mix.version();
}
  /*
  |--------------------------------------------------------------------------
  | Declare Your Site Name Here For Dev
  |--------------------------------------------------------------------------
  |
  |
  */
mix.browserSync({
  proxy: 'element-ui.dev'
});
  /*
  |--------------------------------------------------------------------------
  | Disable Notification
  |--------------------------------------------------------------------------
  |
  |
  */
mix.disableNotifications();
