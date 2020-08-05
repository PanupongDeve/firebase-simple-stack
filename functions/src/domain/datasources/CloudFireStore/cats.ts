import { firebaseProvider } from '../../providers/firebase-provider';
import { utils } from '../../utils/utils';

class CatsDb {
    private static instance: CatsDb;
    private firestore: FirebaseFirestore.Firestore;
    private db: any;

    private constructor() {
        this.firestore = firebaseProvider.getFireStore();
        this.db = this.firestore.collection('cats').doc(utils.generateRandomId('cats-'));
    }

    public static getInstance(): CatsDb {
        if (!CatsDb.instance) {
            CatsDb.instance = new CatsDb();
        }

        return CatsDb.instance;
    }

    async create(data: any) {
        await this.db.set(data)
    }
}

const catsDb: CatsDb = CatsDb.getInstance();

export {
    catsDb
}
