class AuthStatusStorage {
    constructor() {
        this.key = 'ejkasxbas';
    }
    
    setValue = (value) => {
        localStorage.setItem(this.key, value);
    }

    getValue = () => {
        const value = localStorage.getItem(this.key);
        return value;
    }

    removeItem = () => {
        localStorage.removeItem(this.key);
    }
}


const getinstance = () => {
    let instance = null;

    if (instance === null) {
        instance = new AuthStatusStorage();
    }

    return instance;
}

export const authStatusStorage = getinstance();

