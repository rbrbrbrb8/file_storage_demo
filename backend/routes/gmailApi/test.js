const sendMail = require('../../handlers/gmailApi/gmail');
const main = async () => {
  const options = {
    to:'rbrbrbrb8@gmail.com',
    cc:'connectfour777@gmail.com',
    subject:'AYOOOOOOOOO',
    text:'LET HIM COOK!!!!!!',
    html:`<p> <b>LET <br/> HIM <br/> COOK <br/></b></p>`,
    textEncoding:'base64',
    headers:[
      { key: 'X-Application-Developer', value: 'Roy Brezner' },
      { key: 'X-Application-Version', value: 'v1.0.0.2' },
    ]
  }
  const messageId = await sendMail(options);
  return messageId
}

main()
  .then((messageId) => console.log('Message sent successfully:', messageId))
  .catch((err) => console.error(err));