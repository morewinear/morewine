const withImages = require('next-images')

module.exports = withImages({
  fileExtensions: ['jpg', 'png'],
  webpack(config) {
    config.module.rules.push(
      {
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/static/fonts/[name].[ext]',
            },
          }
        ]
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/datasheet/[name].[ext]'
            }
          }
        ]
      }
    );

    return config;
  },
});