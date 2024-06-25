const functions = require("firebase-functions");
const express = require("express");
const cors = require(" cors");
const stripe = require("stripe")(
  "sk_test_51P1cTh02rOrtoA4OLFJpuIdIlFDCQVc0QrVjH4MSJMNNjNloDdIgCNSh4Aw9nmWXF6PW7sGz7MQglhx4MJnVpoGK008fdj3pmO"
);

// - API

// -APP CONFIG
const app = express()

// -Middleware
app.use(cors({origin: true}));
app.use(express.json());
// -Routes
app.get("/", (req, res) => res.status(200).send("Hello world!"));

// -listen comment
exports.api = functions.https.onRequest(app)