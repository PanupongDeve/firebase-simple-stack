import * as firebaseLogger from 'firebase-functions/lib/logger';
import { Logger } from '@nestjs/common';

class LoggerHelper {
    private static instance: LoggerHelper;

    private constructor(){}

    public static getInstance(): LoggerHelper {
        if (!LoggerHelper.instance) {
            LoggerHelper.instance = new LoggerHelper();
        }

        return LoggerHelper.instance;
    }

    log(dest: string, message: string) {
        firebaseLogger.log(`[${dest}]`, message);
        Logger.log(message, dest, true);
    }

    info(dest: string, message: string) {
        firebaseLogger.info(`[${dest}]`, message);
        Logger.log(message, dest, true);
    }

    warn(dest: string, message: string) {
        firebaseLogger.warn(`[${dest}]`, message);
        Logger.warn(message, dest, true);
    }

    error(dest: string, message: string) {
        firebaseLogger.error(`[${dest}]`, message);
        Logger.error(message, '',dest, true);
    }
}


const loggerHelper: LoggerHelper = LoggerHelper.getInstance();

export {
    loggerHelper
}