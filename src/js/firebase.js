
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAISJwIvlQiu1vO1g3k6WNh_mWv-OwRyBo",
  authDomain: "code-your-future-web-352aa.firebaseapp.com",
  databaseURL: "https://code-your-future-web-352aa.firebaseio.com",
  projectId: "code-your-future-web-352aa",
  storageBucket: "code-your-future-web-352aa.appspot.com",
  messagingSenderId: "151705779052"
};
firebase.initializeApp(config);

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'https://codeyourfuture.co/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);