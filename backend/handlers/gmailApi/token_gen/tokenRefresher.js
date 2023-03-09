const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
require('dotenv').config();
const path = require('path');
const credentials = require('../../../credentials.json');
const tokens = require('../../../token.json');

const initTokens = async() => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_secret, client_id, redirect_uris[0]);
  oAuth2Client.setCredentials({
    refresh_token:tokens.refresh_token,
  });
  const access = await oAuth2Client.getAccessToken();
  const tokenPath = path.resolve(__dirname,'..','..','tokens.json');
  tokens.access_token = access;
  fs.writeFileSync(tokenPath,JSON.stringify(tokens));
  console.log('access token and refresh token stored to token.json');
}

module.exports = initTokens;