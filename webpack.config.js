/**
 * webpack --config webpack.config.js
 */
"use strict";

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './home', // Модуль который нужно соберать
    output: { // Куда выводить
        filename: 'build.js', // Файл который создается и подключаеться на html страничке
        library: "home" // Внешний доступ к модулям!
    },

    // watch: true, // Следит за модулями и перезапускает сборку
    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 100 // интервал
    },

    // devtool:"cheap-inline-module-source-map", // разбивает на логические части (source-map для dev)
    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null
}