const moment = require("moment");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const EmailController = require("./emailContoller");

const { senEmail } = EmailController;

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const SHEET_ID = process.env.SHEET_ID;

const createData = async (req, res) => {
  try {
    const dataForm = req.body;

    const { phone, email, lastName, firstName } = dataForm;

    if (!lastName || !firstName || !email) {
      return res.json({
        success: false,
        message: "Missing data detected!",
      });
    }

    const dataSenEmail = {
      name: lastName + " " + firstName,
      emailClent: email,
    };

    await senEmail(dataSenEmail);

    let currentDate = new Date();

    const format = "HH:mm DD/MM/YYYY";

    let formatedDate = moment(currentDate).format(format);

    // Initialize the sheet - doc ID is the long id in the sheets URL
    const doc = new GoogleSpreadsheet(SHEET_ID);

    // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]

    // append rows

    const dataSave = {
      LastName: lastName,
      FirstName: firstName,
      Email: email,
      SDT: phone,
      Timestamp: formatedDate,
    };
    await sheet.addRow(dataSave);

    return res.json({
      success: true,
      message: "Create data sheet successfully",
      data: dataSave,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Some thing went wrong",
    });
  }
};

module.exports = {
  createData: createData,
};
