declare class CatsDb {
    private static instance;
    private firestore;
    private db;
    private constructor();
    static getInstance(): CatsDb;
    create(data: any): Promise<void>;
}
declare const catsDb: CatsDb;
export { catsDb };
