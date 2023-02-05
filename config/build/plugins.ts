import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function plugins({paths, port, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerPort: port,
        //     reportFilename: 'analyze.html',
        // })
        isDev ? new ReactRefreshPlugin() : undefined,
        isDev ? new webpack.HotModuleReplacementPlugin() : undefined,
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]
}
