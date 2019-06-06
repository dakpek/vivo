// import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';

// const config = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
// };

// firebase.initializeApp(config);


// export const database = firebase.database()
// export const auth = firebase.auth()


// export const signIn = (email, pwd) => {
//   return auth.signInWithEmailAndPassword(email, pwd)
//     .then(res => {
//       let uid = res.user.uid;
//       localStorage.setItem('uid', uid)
//       return uid;
//     })
// }


// //AUTHENTICATION


// export const signOut = () => auth.signOut();
// export const passwordReset =(email) => auth.sendPasswordResetEmail(email);
// export const passwordUpdate = password => {
//   return auth.currentUser.updatePassword(password)
// }

// export const signUp = (email, pwd) => {
//   return auth.createUserWithEmailAndPassword(email, pwd)
// }

// export const editUser = async (uid, user) => {
//   await database.ref(`users/${uid}`).set(user)
//   let data = await getUser(uid);
//   data.uid = uid;
//   return data
// }
 

// export const getUser = (uid) => {
//   return database.ref(`users/${uid}`).once('value')
//     .then(res => res.val())
// }

// export const getCatalog = () => {
//   return database.ref(`catalog/`).once('value')
//     .then(res => res.val())
// }


















  
// // class Firebase {
// //     constructor() {
// //       app.initializeApp(config);

// //       this.auth = app.auth();
// //       this.db = app.database();
// //     }


// //     // *** Auth API ***

// //     doCreateUserWithEmailAndPassword = (email, password) => (
// //         this.auth.createUserWithEmailAndPassword(email, password)
// //     )

// //     doSignInWithEmailAndPassword = (email, password) => (
// //         this.auth.signInWithEmailAndPassword(email, password)
// //     )

// //     doSignOut = () => this.auth.signOut();


// //     doPasswordReset = email => this.auth.sendPasswordResetEmail(email);


// //     doPasswordUpdate = password => (
// //         this.auth.currentUser.updatePassword(password)
// //     )






// //     // *** User API ***


// //     cancelSubscription = async (reason) => {

// //       let uid = await this.auth.currentUser.uid
// //       await this.getUser(uid)
// //       .then(res => {
// //         let user = res.val()
// //         this.setPastUser(uid, user)
// //       })

// //       let date = await new Date();
// //       date = date.toString()
// //       await this.db.ref(`cancellations/${uid}`).set({
// //         date, 
// //         reason
// //       })
// //       .then(() => {
// //         this.removeUser(uid)
// //       })
// //     }
      


// //     setUser = (uid, data) => this.db.ref(`users/${uid}`).set(data);
// //     setPastUser = (uid, data) => this.db.ref(`pastUsers/${uid}`).set(data);
// //     getUser = uid => this.db.ref(`users/${uid}`).once('value')
// //     getPastUser = uid => this.db.ref(`pastUsers/${uid}`).once('value')
// //     removeUser = uid => this.db.ref(`users/${uid}`).remove();
// //     users = () => this.db.ref('users');
// // }
  