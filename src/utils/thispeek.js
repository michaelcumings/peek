import firebase from "firebase";

export default {
    // thispeek.write() is the function method to add a new peek to the db
    write: (newpeek) => {

        // image and location values are both mandatory to create a peek.
        // If either or both are missing, error is written to console and
        // the peek is not created.
        if (!newpeek.image) {
            console.log("thispeek.write failed; no image in request");
            return;
        }

        if (!newpeek.location) {
            console.log("thispeek.write failed; no location in request");
            return;
        }

        // vends and vprivate are verified values of the boolean "ends" and
        // "private" form checkboxes.  This defaults the values to false, and
        // changes them to true if the boxes are checked ("on" is the value
        // for a checked checkbox in JSX).
        let vends = false;
        if (newpeek.ends === "on") {
            vends = true;
        }

        let vprivate = false;
        if (newpeek.private === "on") {
            vprivate = true;
        }

        // set user to be the user currently logged into firebase
        var user = firebase.auth().currentUser;

        // Verified username is the current user's displayName from firebase.
        // If user doesn't have one, the user's email is used instead for this value.
        const vusername = (user.displayName || user.email);
        // Verified tag and description are set with default values if those peek
        // attributes are missing or falsy
        const vtag = (newpeek.tag || "");
        const vdescription = (newpeek.description || "No Description");
        const vimage = newpeek.image;
        const vlocation = newpeek.location; 

        // Write verified values to firestore db
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
