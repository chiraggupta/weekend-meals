const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const credentials = JSON.parse(
  Buffer.from(process.env.FIRESTORE_SA_BASE64, 'base64').toString()
);

initializeApp({
  credential: cert(credentials)
});

exports.db = getFirestore();