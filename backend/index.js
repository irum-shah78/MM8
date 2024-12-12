const { BigQuery } = require("@google-cloud/bigquery");
const { BigQueryDate } = require("@google-cloud/bigquery");
const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
require("dotenv").config();

const app = express();
// app.use(cors({ origin: "*" }));
app.use(
  cors({
    origin: "http://127.0.0.1:5501",
    methods: "GET,POST",
  })
);
app.options("*", cors());
app.use(express.json());

const client = new OAuth2Client(
  "client id here"
);

async function verifyToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "client id here",
    });
    return ticket.getPayload();
  } catch (error) {
    console.error("Token verification failed:", error);
    throw new Error("Invalid token");
  }
}

const bigquery = new BigQuery({
  projectId: "iron-burner-430918-c0",
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

async function queryBigQuery() {
  try {
    const query = `
      SELECT *
      FROM \`iron-burner-430918-c0.mm8.Accounts\`
      LIMIT 10
    `;

    const [rows] = await bigquery.query(query);

    console.log("Query Results:");
    rows.forEach((row) => {
      console.log(row);
    });
  } catch (error) {
    console.error("Error querying BigQuery:", error);
  }
}

queryBigQuery();

app.get("/", (req, res) => {
  res.send("Server is running");
});

const bigqueryTable = "iron-burner-430918-c0.mm8.Accounts";

app.post("/login", async (req, res) => {
  const token = req.body.token;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience:
        "client id here",
    });

    const payload = ticket.getPayload();
    const userEmail = payload.email;
    const query = `
      SELECT Email 
      FROM \`${bigqueryTable}\`
      WHERE Email = @userEmail
      LIMIT 1
    `;

    const options = {
      query: query,
      params: { userEmail },
    };

    const [rows] = await bigquery.query(options);

    if (rows.length > 0) {
      console.log("User already exists in BigQuery:", rows[0]);
      return res.status(200).json({
        message: "User already exists",
        user: rows[0],
      });
    }

    const userData = {
      FirstName: payload.given_name || "",
      LastName: payload.family_name || "",
      Email: payload.email || "",
      Persona: "others",
      Password: "123",
      LockedOut: false,
      TrialEnabled: true,
      TrialStartDate: new BigQueryDate("2024-11-26"),
      TrialEndDate: new BigQueryDate("2024-11-26"),
      TrialEnded: false,
      Upgraded: 0,
      PaidPlan: "Trial",
      MonthlyCredits: 0,
      MonthlyCreditsRemaining: 0,
      Version: 1,
      UID: 9,
      CompanyName: "abc",
      CompanyDetails: "abc",
    };

    const rowsToInsert = [userData];
    await bigquery.dataset("mm8").table("Accounts").insert(rowsToInsert);
    console.log(`Inserted ${rowsToInsert.length} row(s) into BigQuery`);

    res.status(200).json({
      message: "User authenticated and stored in BigQuery",
      user: userData,
    });
  } catch (error) {
    console.error(
      "Error verifying token or interacting with BigQuery:",
      error.errors || error.message
    );
    res.status(400).json({
      error: "Failed to process request",
      details: error.errors || error.message,
    });
  }
});

app.get("/login", (req, res) => {
  res.send("This is the login endpoint. Use POST requests.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
