const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

JSON.parse(process.env.sa)

const serviceAccount = JSON.parse(process.env.FIRESTORE_SA);

initializeApp({
  credential: cert(serviceAccount)
});

exports.db = getFirestore();