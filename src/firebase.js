import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCEzlD-Ugrs_8XR6d_N0PZwwUdpGJTVZpE",
  authDomain: "gatsby-firebase-redux.firebaseapp.com",
  databaseURL: "https://gatsby-firebase-redux.firebaseio.com",
  projectId: "gatsby-firebase-redux",
  storageBucket: "gatsby-firebase-redux.appspot.com",
  messagingSenderId: "799298956135",
  appId: "1:799298956135:web:177d7ebfac8937b9961dc2",
  measurementId: "G-PKD77CVQJ8"
};

firebase.initializeApp(firebaseConfig);

export default firebase
