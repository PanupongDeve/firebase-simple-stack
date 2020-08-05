declare class FirebaseProvider {
    private static instance;
    private firestore;
    private constructor();
    initializeApp(): void;
    getFireStore(): FirebaseFirestore.Firestore;
    static getInstance(): FirebaseProvider;
}
declare const firebaseProvider: FirebaseProvider;
export { firebaseProvider };
