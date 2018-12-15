import firebase from "firebase";

export default {
    write: (newpeek) => {

        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
        });
        db.collection("peeks").add({
        username: newpeek.username,
        tag: newpeek.tag,
        userID: firebase.auth().currentUser.uid,
        description: newpeek.description,
        image: newpeek.image,
        location: newpeek.location,
        ends: newpeek.ends,
        private: newpeek.private
        });  
    },
};
