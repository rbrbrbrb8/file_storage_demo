const express = require('express');
const sendMail = require('./handlers/gmailApi/gmail');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const dbHandler = require('./handlers/db/dbHandler');
const app = express();
dbHandler.init();

app.use(session({'secret':'siuuu'}));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

const port = process.env.PORT || 3300;


app.post('/gmail/sendMail', async (req, res) => { //sends the messages as arrays per date!
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

app.listen(port, () => console.log(
  `App listening at http://localhost:${port}`)
);
