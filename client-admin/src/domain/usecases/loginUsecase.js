import { LoginRepository } from '../repositories/loginRepository';
import { DATASOURCE } from '../constants/datasource';
import { AuthDtofromUI } from '../entities/AuthEntity/AuthDtofromUI';
import { AUTH_STATUS } from '../constants/authStatus';

class LoginUsecase {
    constructor() {
        this.loginMockRepository  = new LoginRepository(DATASOURCE.MOCK);
        this.loginLocalStorageRepository = new LoginRepository(DATASOURCE.LOCAL_STORAGE);
    }

    authorize = (userInput) => {
        try {
            const user = new AuthDtofromUI(userInput);
            const reponse = await this.loginMockRepository.authorize(user, { dataSource: DATASOURCE.MOCK });
            this.loginLocalStorageRepository.setAuthenticatedStatus(AUTH_STATUS.IS_AUTH);
            return reponse;
        } catch (error) {
            this.loginLocalStorageRepository.setAuthenticatedStatus(AUTH_STATUS.IS_UNAUTH);
            console.log(error);
            throw error;
        }
    }


    getAuthStatus = () => {
        return this.loginLocalStorageRepository.getAuthenticatedStatus();
    }

    checkAuthUser = (callback) => {
        if (this.getAuthStatus() === AUTH_STATUS.IS_AUTH) {
            callback();
        } 
    }

    checkGuestUser = () => {
        if (this.getAuthStatus() !== AUTH_STATUS.IS_AUTH) {
            callback();
        }
    }

    logout = (callback) => {
        this.loginLocalStorageRepository.setUnAuth();
        callback();
    }
}

const getInstance = () => {
    let instance = null;

    if (instance === null) {
        instance = new LoginUsecase();
    }

    return instance;
}

export const loginUsecase = getInstance();