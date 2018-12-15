import firebase from "firebase";

export default {
    write: (newpeek) => {

        if (!newpeek.image) {
            return "Error-No Image";
        }

        if (!newpeek.location) {
            return "Error-No Location";
        }

        let vends = false;
        if (newpeek.ends = "on") {
            vends = true;
        }

        let vprivate = false;
        if (newpeek.private = "on") {
            vprivate = true;
        }

        var user = firebase.auth().currentUser;

        const vusername = (user.displayName || user.email);
        const vtag = (newpeek.tag || "");
        const vdescription = (newpeek.description || "No Description");
        const vimage = newpeek.image;
        const vlocation = newpeek.location; 

        const db = firebase.firestore();
        db.settings({
        timestampsInSnapshots: true
        });
        db.collection("peeks").add({
        username: vusername,
        tag: vtag,
        userID: user.uid,
        description: vdescription,
        image: vimage,
        location: vlocation,
        ends: vends,
        private: vprivate
        });  
    },
};
