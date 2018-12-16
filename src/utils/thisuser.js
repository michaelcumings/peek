import firebase from "firebase";

export default {
    write: (newuser) => {

        var user = firebase.auth().currentUser;

        const vusername = (user.displayName || user.email);
        const vbio = (newuser.bio || "");

        const db = firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
            });
            db.collection("users").add({
            username: vusername,
            bio: vbio,
        });  
    },

    // update: (change) => {

    // }
};