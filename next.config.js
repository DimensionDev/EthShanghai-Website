/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'zh'],
    defaultLocale: 'en-US',
    // Double check this field
    localeDetection: true
  },
}
