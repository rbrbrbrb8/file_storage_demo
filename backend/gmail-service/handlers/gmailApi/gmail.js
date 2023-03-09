const nodemailer = require('nodemailer');
const {google} = require('googleapis');

const CLIENT_ID = '804248879334-hhmj83sg6resrcg7csffamu32uatr6oo.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04ucPaaKywJ9-CgYIARAAGAQSNwF-L9IrVlsdiJkwMsIo-S9xqrvV7mAh3MSoV7Mo5mI86-eR1pe_sqwySzjpanYppqZojdDJIms';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URI);
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN});

const sendMail = async (mailOptions) => {
  try {
    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service:'gmail',
      auth:{
        type:'OAuth2',
        user:'proto.hmnt@gmail.com',
        clientId:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        refreshToken:REFRESH_TOKEN,
        accessToken:accessToken
      }
    })

    const result = await transport.sendMail(mailOptions);
    if(result.rejected.length > 0) throw new Error('mail didnt get to the other end');
    return result.messageId;

  } catch (error) {
    return error;
  } 
}

module.exports = sendMail;