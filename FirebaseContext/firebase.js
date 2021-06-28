import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';


class Firebase {

    constructor() {

        this.auth = auth;
        this.db = firestore();
        this.storage = storage;
    }

    // ALL QUERY
    queryContact = firestore().collection("contacts");
    queryAllContact = this.queryContact.orderBy('name', 'asc');
    queryAddContact = (contact) => this.queryContact.add(contact);
    queryDeleteContact = (id) => this.queryContact.doc(id).delete();


}

export default Firebase;


