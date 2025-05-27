const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const raw = process.env.FIRESTORE_SA_BASE64;
console.log('Raw length:', raw?.length || 'undefined');
console.log('Raw preview:', raw?.slice(0, 30)); // first 30 chars

try {
  const decoded = Buffer.from(raw, 'base64').toString();
  console.log('Decoded preview:', decoded.slice(0, 30)); // should look like JSON
  const credentials = JSON.parse(decoded);
  console.log('✅ JSON parsed:', credentials.project_id);
} catch (err) {
  console.error('❌ Error decoding or parsing Firestore credentials:', err.message);
}

// const credentials = JSON.parse(
//   Buffer.from(process.env.FIRESTORE_SA_BASE64, 'base64').toString()
// );

initializeApp({
  credential: cert(credentials)
});

exports.db = getFirestore();