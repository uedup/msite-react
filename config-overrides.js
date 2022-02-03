/* config-overrides.js */
const { override, disableEsLint, addLessLoader, addDecoratorsLegacy, adjustStyleLoaders } = require('customize-cra');
const path = require("path");
process.env.GENERATE_SOURCEMAP = "false";
module.exports = {
    webpack: override(

        addDecoratorsLegacy(),

        // disable eslint in webpack
        disableEsLint(),
        
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1890ff" },
            localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
        }), 
        adjustStyleLoaders(rule => {
            if (rule.test.toString().includes("scss")) {
                rule.use.push({
                loader: require.resolve("sass-resources-loader"),
                options: {
                    resources: "./src/assets/scss/color/outcolor.scss" //这里是你自己放公共scss变量的路径
                }
                });
            }
        }),
    )
}

