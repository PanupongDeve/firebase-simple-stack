import * as admin from 'firebase-admin';
import { loggerHelper as logger } from '../helpers/logger';


class FirebaseProvider {
    private static instance: FirebaseProvider;
    private firestore: FirebaseFirestore.Firestore;

    private constructor() {
        admin.initializeApp({
            credential: admin.credential.applicationDefault(),
            databaseURL: 'https://helpchecks-manger.firebaseio.com'
        });

        this.firestore = admin.firestore();
    }

    initializeApp() {
        logger.log("FirebaseProvider", "Firebase Admin Provider initialized")
    }

    getFireStore() {
        return this.firestore;
    }

    public static getInstance(): FirebaseProvider {
        if (!FirebaseProvider.instance) {
            FirebaseProvider.instance = new FirebaseProvider();
        }

        return FirebaseProvider.instance;
    }
}


const firebaseProvider: FirebaseProvider = FirebaseProvider.getInstance();

export {
    firebaseProvider
}

