import admin from "firebase-admin";

export function installFirebaseApp() {
  if (admin.apps.length > 0) {
    return;
  }
  admin.initializeApp({
    credential: admin.credential.cert(
      JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON as any)
    ),
  });
}
