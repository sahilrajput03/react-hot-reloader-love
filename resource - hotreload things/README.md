Anyhing in this folder is for:
/*Supressing warning in chrome developers too i.e. {{ React-Hot-Loader:  react-dom patch is not detected. React 16.6+ features may not work.}}  with hot-reloader. */

Simple approach is to add below line to node_modules/react-scripts/config/webpack.config.js file:
```js
        ...(isEnvDevelopment && { 'react-dom': '@hot-loader/react-dom' }),
        /*Aabove line supresses warning {{ React-Hot-Loader:  react-dom patch is not detected. React 16.6+ features may not work.}}  with hot-reloader. */
```
in the alias object.

So, finally it alias object would look like this:
```js
{
        ...(isEnvDevelopment && { 'react-dom': '@hot-loader/react-dom' }),
        /*Aabove line supresses warning {{ React-Hot-Loader:  react-dom patch is not detected. React 16.6+ features may not work.}}  with hot-reloader. */

        // Support React Native Web
        // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
        'react-native': 'react-native-web',
        // Allows for better profiling with ReactDevTools
        ...(isEnvProductionProfile && {
          'react-dom$': 'react-dom/profiling',
          'scheduler/tracing': 'scheduler/tracing-profiling',
        }),
        ...(modules.webpackAliases || {}),
      }
```