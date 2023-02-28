/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: ''
  };

  config!.resolve!.modules! = [paths.src, 'node_modules'];
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = { '@': path.resolve(__dirname, '..', '..', 'src') };

  //@ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.(png|svg|jpe?g|gif)$/i };
    }

    return rule;
  });

  config!.module!.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]'
    }
  });

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify('https://testapi.ru'),
      __PROJECT__: JSON.stringify('storybook')
    })
  );

  return config;
};
