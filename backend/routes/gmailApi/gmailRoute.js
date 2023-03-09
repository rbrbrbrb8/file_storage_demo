const express = require('express');
const gmailRouter = express.Router();
const sendMail = require('../../handlers/gmailApi/gmail');


// /user/initial() - sends the username,user email and friends



gmailRouter.post('/sendMail', async (req, res) => { //sends the messages as arrays per date!
  const mailTo = req.body.mailTo;
  console.log(req.body);
  const options = {
    from: 'INTELLIGENCE SUPER SECRET <proto.hmnt@gmail.com>',
    to: mailTo,
    subject: 'שצצצצצצצצצצ',
    html: `<p> <b>עד <br/> מתי <br/> וכמה <br/><br/> עוד <br/></b></p>`,
  }
  try {
    const messageId = await sendMail(options);
    console.log('message sent nice ', messageId);
    res.status(200).send({
      id: messageId
    });
  } catch (error) {
    console.log(error)
  }

});

module.exports = gmailRouter;
