import { initializeApp, database } from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAl1j9QKRCN0jDB4SoiQpV8D1EnuujrxnM',
  authDomain: 'vue-my-books.firebaseapp.com',
  databaseURL: 'https://vue-my-books.firebaseio.com',
  projectId: 'vue-my-books',
  storageBucket: 'vue-my-books.appspot.com',
  messagingSenderId: '1072846385623',
  appId: '1:1072846385623:web:dee56f8bdb0ba320',
};
// Initialize Firebase
initializeApp(firebaseConfig);

export default {
  database: database(),
};
