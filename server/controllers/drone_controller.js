"use strict";

const User = require("../schema/drone_schema");

const createData = (req, res) => {
    User.create(req.body)
        .then((data) => {
            console.log("Data received from drone [TODO]", data);
            res.status(201).json(data);
        })
        .catch((err) => {
            if (err.name === "ValidationError") {
                console.error("Error Validating", err);
                res.status(422).json(err);
            } else {
                console.error(err);
                res.status(500).json(err);
            }
        });
};

const readData = (req, res) => {
    console.log("read")
    User.find()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
};

const readDataByID = (req, res) => {
    User.findById()
        .then((data) => {
            res.status(200).json(data);
            console.log("Current values for drone " + req.params["id"] + ": [TODO]")
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
};

module.exports = {
    createData,
    readData,
    readDataByID,
};
