/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: '/',
        permanent: true,
      },
      {
        source: '/youtube.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
