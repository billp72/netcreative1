const path = require('path');
const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}
//path.resolve(__dirname, '')
const { spaceId, accessToken } = process.env;

module.exports = {
  siteTitle: `NetCreative`,
  siteLogo: `./netcreativeLogoSite.png`,
  siteTitleShort: `NC`,
  siteDescription: `we build websites so you dont have to`,
  siteUrl: `https://www.netcreative.org`,
  themeColor: `#000`,
  backgroundColor: `#fff`,
  pathPrefix: null,
  spaceId,
  accessToken,
  logo: `./social.png`,
  social: {
    twitter: `gatsbyjs`,
    fbAppId: `1912006699051967`,
  },
};
