

module.exports = {
    entry: './script.js',

    output: {
      filename: 'bundle.js'
    },

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader'] }
        ]
    },

    watch: true,

}