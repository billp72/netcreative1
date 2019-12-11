const path = require('path');
const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteTitle: `NetCreative`,
  siteTitleShort: `NC`,
  siteDescription: `Netcreative - we build websites so you dont have to`,
  siteUrl: `https://www.netcreative.org`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  spaceId,
  accessToken,
  logo: path.resolve(__dirname, 'src/images/icon.png'),
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `966242223397117`,
  },
};
