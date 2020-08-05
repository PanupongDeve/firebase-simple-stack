declare class LoggerHelper {
    private static instance;
    private constructor();
    static getInstance(): LoggerHelper;
    log(dest: string, message: string): void;
    info(dest: string, message: string): void;
    warn(dest: string, message: string): void;
    error(dest: string, message: string): void;
}
declare const loggerHelper: LoggerHelper;
export { loggerHelper };
