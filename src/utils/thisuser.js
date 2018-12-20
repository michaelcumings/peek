import firebase from "firebase";

export default {
    // thisuser.write() is the function method to add a new user to the db.
    // This is the "user" collection of our app, which is separate from the
    // list of users in the Authentication tab of our firebase console,
    // though there should be a user document for each user listed there.
    write: (newuser) => {

        // set the user to be the user currently logged in to firebase
        var user = firebase.auth().currentUser;

        // Verified username is the currently logged in firebase user's
        // displayName; if the user doesn't have one, the user's email is
        // used for this value.
        const vusername = (user.displayName || user.email);
        
        // if the "bio" field is missing or falsy, a default value is
        // used for the verified bio attribute value.
        const vbio = (newuser.bio || "");

        // write the verified values to the firestore database.
        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
            });
            db.collection("users").add({
            username: vusername,
            bio: vbio,
        });  
    },

    // thisuser.get() is the function method to get a user document by id.
    get: (id) => {
        const db = firebase.firestore();
        var userRef = db.collection('users').doc(id);
        userRef.get()
        .then(doc => {
            if (!doc.exists) {
            console.log('No such document!');
            } else {
            console.log('Document data:', doc.data());
            return doc.data();
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
        });
    }
};