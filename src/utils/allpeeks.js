import firebase from "firebase";

export default {
    // allpeeks.equalto() is the function method to get peeks which have
    // an attribute of a given value--doesn't yet work
    query: (attribute, operator, value) => {
        const db = firebase.firestore();
        var peeksRef = db.collection('peeks');
        var queryRef = peeksRef.where(attribute, operator, value);
        console.log(queryRef);
        queryRef.get()
        .then(snapshot => {
            if (snapshot.empty) {
            console.log('No matching documents');
            return;
            }
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data());
            });
            return snapshot;
        })
        .catch(err => {
            console.log("Error getting documents", err);
        });    
           
    },

    all: () => {
            const db = firebase.firestore();
            var peeksRef = db.collection('peeks');
            console.log(peeksRef);
            peeksRef.get()
            .then(snapshot => {
                if (snapshot.empty) {
                console.log('No matching documents');
                return;
                }
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });
                return snapshot;
            })
            .catch(err => {
                console.log("Error getting documents", err);
            });    
               
    },
};