
class Utils {
    private static instance: Utils;

    private constructor() {

    }

    createUUID() {
        var dt = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (dt + Math.random()*16)%16 | 0;
            dt = Math.floor(dt/16);
            return (c=='x' ? r :(r&0x3|0x8)).toString(16);
        });
        return uuid; 
    }

    generateRandomId(prefix: string|null = null) {
        if (prefix === null) {
            return  this.createUUID();
        }
        return prefix + this.createUUID();
    }

    public static getInstance(): Utils {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }

        return Utils.instance;
    }
}



const utils: Utils = Utils.getInstance();

export {
    utils
}
