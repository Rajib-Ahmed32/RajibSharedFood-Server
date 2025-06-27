const fs = require("fs");
const path = require("path");

const serviceAccountPath = path.resolve(
  "/etc/secrets/firebase-service-account.json"
);

const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
