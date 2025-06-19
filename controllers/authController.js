const admin = require("../utils/firebaseAdmin");
const { createJwtToken } = require("../utils/jwtUtils");

const loginWithFirebaseToken = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  const firebaseIdToken = authHeader.split(" ")[1];

  try {
    const decodedFirebaseToken = await admin
      .auth()
      .verifyIdToken(firebaseIdToken);

    const token = createJwtToken({
      uid: decodedFirebaseToken.uid,
      email: decodedFirebaseToken.email,
    });

    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized: Invalid Firebase token" });
  }
};

module.exports = { loginWithFirebaseToken };
