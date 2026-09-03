// One-time setup (about 5 minutes):
// 1. Go to https://console.firebase.google.com and create a project
// 2. Add a Web app, then copy the firebaseConfig object below
// 3. Build > Realtime Database > Create database (start in test mode)
// 4. Rules tab, publish:
//    {
//      "rules": {
//        "rooms": {
//          "$roomId": {
//            ".read": true,
//            ".write": true
//          }
//        }
//      }
//    }
// 5. Replace the empty strings below. Sharing stays off until this file is filled in.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyC87sOlN4TMCk7ivtB1ITfCrBp9VTkqp8w",
  authDomain: "scenario-reviewer-kapil.firebaseapp.com",
  databaseURL: "https://scenario-reviewer-kapil-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "scenario-reviewer-kapil",
  storageBucket: "scenario-reviewer-kapil.firebasestorage.app",
  messagingSenderId: "1057259562611",
  appId: "1:1057259562611:web:33d3e4d8f18daa4fb9ec06"
};
