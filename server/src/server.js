require("dotenv").config();
const express = require("express");
const cors = require("cors");
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");
const bodyParser = require("body-parser");

let app = express();

//use body-parser to post data
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//config view engine
configViewEngine(app);

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});