const admin = require("firebase-admin");
const path = require("path");

const serviceAccountPath = path.resolve(
  "/etc/secrets/firebase-service-account.json"
);
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
