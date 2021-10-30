require('dotenv').config()
const nodemailer = require('nodemailer')
const smtpTransport = require('nodemailer-smtp-transport')

const formatTags = (tags) => {
  return tags.join(', ').replace(/, ([^,]*)$/, ', $1')
}

exports.handler = function (event, context, callback) {
  console.log('called blackcard.js')

  const transporter = nodemailer.createTransport(
    smtpTransport({
      host: 'smtp.strato.de',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  )

  if (event.httpMethod !== 'POST') {
    callback(null, { statusCode: 403, body: 'FORBIDDEN' })
  }

  const form = JSON.parse(event.body)

  const mailOptions = {
    from: form.email,
    to: 'fabianpiper@web.de',
    subject: `[nxtyou.de Blackcard Membership] Anfrage von ${form.name}`,
    html: `
    <h1>Blackcard Membership Anfrage von ${form.name}</h1>
  <table style="border-collapse: collapse;"    >
    <tr>
      <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Name:</td>
      <td style="vertical-align: top; padding: 6px 0;">${form.name}</td>
    </tr>
    <tr>
    <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Email-Adresse:</td>
    <td style="vertical-align: top; padding: 6px 0;">${form.email}</td>
    </tr>
    <tr>
      <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Firma:</td>
      <td style="vertical-align: top; padding: 6px 0;">${
        form.company === '' ? '[keine Angabe]' : form.company
      }</td>
    </tr>
    <tr>
      <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Telefon Nummer:</td>
      <td style="vertical-align: top; padding: 6px 0;">${
        form.website === '' ? '[keine Angabe]' : form.phone
      }</td>
    </tr>
    <tr>
      <td style="vertical-align: top; padding: 6px 14px 6px 0; font-weight: bolder;">Interessen:</td>
      <td style="vertical-align: top; padding: 6px 0;">${
        form.tags.length <= 0 ? '[keine Angabe]' : formatTags(form.tags)
      }</td>
    </tr>
</table>
<hr style="margin: 40px 0 10px 0";/><small style="font-size: 10px;">Diese E-Mail wurde vom Blackcard-Formular auf <a href="https://www.nxtyou.de/blackcard" target="_blank">www.nxtyou.de/blackcard</a> generiert.</small>`,
  }
  transporter.sendMail(mailOptions, function (error, data) {
    if (error) {
      console.error(error)

      const response = {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: error.message,
          message: `Beim Senden der Anfrage ist ein Fehler aufgetreten.`,
        }),
      }
      callback(null, response)
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data,
        message: `Die Anfrage wurde erfolgreich verschickt.`,
      }),
    }
    callback(null, response)
  })
}
