declare class Utils {
    private static instance;
    private constructor();
    createUUID(): string;
    generateRandomId(prefix?: string | null): string;
    static getInstance(): Utils;
}
declare const utils: Utils;
export { utils };
