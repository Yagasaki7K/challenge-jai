module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.JAI_API_KEY': JSON.stringify(process.env.JAI_API_KEY),
            'process.env.JAI_ENVIRONMENT_NAME': JSON.stringify(process.env.JAI_ENVIRONMENT_NAME),
        })
    ],
}