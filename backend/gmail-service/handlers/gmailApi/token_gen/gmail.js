const { google } = require('googleapis');
const MailComposer = require('nodemailer/lib/mail-composer');
require('dotenv').config();
const path = require('path');
const credentials = require('../../credentials.json');
const tokens = require('../../token.json');

const refreshAccessToken = async () => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_secret, client_id, redirect_uris);
  oAuth2Client.setCredentials({
    refresh_token:tokens.refresh_token
  });
  const tokens = await oAuth2Client.getToken();
  const tokenPath = path.resolve(__dirname,'..','..','tokens.json');
  fs.writeFileSync(tokenPath,JSON.stringify(tokens));
}


const getGmailService = () => {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(client_secret, client_id, redirect_uris[0]);
  oAuth2Client.setCredentials(tokens);
  const gmail = google.gmail({version:'v1',auth:oAuth2Client});
  return gmail;
}

const encodeMessage = message => {
  return Buffer.from(message).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const createMail = async (options) => {
  const mailComposer = new MailComposer(options);
  const message = await mailComposer.compile().build();
  return encodeMessage(message);
}

const sendMail = async (options) => {
  const gmail = getGmailService();
  const rawMessage = await createMail(options);
  const {data:{id} = {}} = await gmail.users.messages.send({
    userId:'me',
    resource:{
      raw: rawMessage
    }
  });
  return id;
}

module.exports = sendMail;