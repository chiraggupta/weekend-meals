const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const saBase64 = JSON.parse(process.env.FIRESTORE_SA_BASE64);
const credentials = JSON.parse(
  Buffer.from(saBase64, 'base64').toString()
);


initializeApp({
  credential: cert(credentials)
});

exports.db = getFirestore();