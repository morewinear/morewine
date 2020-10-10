const withImages = require('next-images')

export default withImages({
  fileExtensions: ['jpg', 'png'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            ref: true,
          }
        }
      ],
    });

    return config;
  },
});