const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const raw = process.env.FIRESTORE_SA_BASE64;

try {
  const decoded = Buffer.from(raw, 'base64').toString();
  const credentials = JSON.parse(decoded);

  initializeApp({
    credential: cert(credentials)
  });

} catch (error) {
  console.error('Error (setupFirestore): ', error.message);
}

exports.db = getFirestore();