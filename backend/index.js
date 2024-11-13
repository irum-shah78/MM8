const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');
const { OAuth2Client } = require('google-auth-library');
require('dotenv').config();

const app = express();
app.use(express.json());

const client = new OAuth2Client("318284004518-e0s0ap20bsee6lm9qc4dfnphq8pcsnbq.apps.googleusercontent.com");

const bigquery = new BigQuery();

async function verifyToken(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: "318284004518-e0s0ap20bsee6lm9qc4dfnphq8pcsnbq.apps.googleusercontent.com", 
  });
  return ticket.getPayload();
}


app.post('/login', async (req, res) => {
  const { token } = req.body;

  try {
    const payload = await verifyToken(token);
    const user = {
      email: payload.email,
      name: payload.name,
      picture: payload.picture,
    };

    await bigquery
      .dataset("qwerty")
      .table("Users")
      .insert([user]);

    res.status(200).send("User saved to BigQuery");

  } catch (error) {
    console.error("Error saving user to BigQuery:", error);
    res.status(500).send("Failed to save user data");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

