const path = require('path');
const withTM = require('next-transpile-modules')(['@shared/server_12.1']);

// const isProd = process.env.NODE_ENV === 'production';

let defaultExports = {
  reactStrictMode: true,
  compress: false,
  productionBrowserSourceMaps: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer && config.entry) {
      return {
        ...config,
        entry() {
          return config.entry().then((entry) => ({
            ...entry,
            app: path.resolve(process.cwd(), 'src/app.ts'),
          }));
        },
      };
    }
    return config;
  },
};

const moduleExports = withTM(defaultExports);
module.exports = moduleExports;
