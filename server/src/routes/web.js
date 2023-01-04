const express = require("express");
const homepageController = require("../controllers/homepageController")

let router = express.Router();

let initWebRoutes = (app) => {
    
    router.post("/createData", homepageController.createData)
    
    return app.use("/", router);
};

module.exports = initWebRoutes;