/**
 * Created by user on 20.06.2017.
 */
const exec = require('child_process').exec;
const express = require('express')
const app = express()

const CMD_BKD = process.env["CMD_BKD"];
const CMD_FND = process.env["CMD_FND"];
const CMD_ESR = process.env["CMD_ESR"];
const PORT = process.env["SERVICE_PORT"];

app.post('/build/backend', function (req, res) {

    exec(CMD_BKD, function(error, stdout, stderr) {
        // command output is in stdout
        res.send(stdout || stderr);
    });
})

app.post('/build/frontend', function (req, res) {
    exec(CMD_FND, function(error, stdout, stderr) {
        // command output is in stdout
        res.send(stdout || stderr);
    });
})

app.post('/build/eservice', function (req, res) {
    exec(CMD_ESR, function(error, stdout, stderr) {
        // command output is in stdout
        res.send(stdout || stderr);
    });
})

app.listen(PORT || 8000, function () {
    console.log('Example app listening on port !')
})