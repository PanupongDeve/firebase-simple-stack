import { DATASOURCE } from '../constants/datasource';
import { userAuthMock, authenticatedStatusMock } from '../dataSources/mocks/login-page-mock';
import { authStatusStorage } from '../dataSources/localStorages/authStatusStorage';

export class LoginRepository {
    constructor(dataSource = DATASOURCE.MOCK) {
        this.dataSource = dataSource;
    }

    authorize = async (user) => {
        try {
            if (this.dataSource === DATASOURCE.MOCK) {
                if ((user.email === userAuthMock.email) && (user.password === userAuthMock.password)) {
                    return {
                        successful: true,
                        msg: 'เข้าสู่ระบบสำเร็จ'
                    }
                } else {
                    throw {
                        successful: false,
                        msg: 'email หรือ รหัสผ่านไม่ถูกต้อง'
                    }
                }
            }
        } catch (error) {
            throw error;
        }
    }

    getAuthenticatedStatus() {
        try {
            if (this.dataSource === DATASOURCE.MOCK) {
                return authenticatedStatusMock;
            } else {
                return authStatusStorage.getValue();
            }
        } catch (error) {
            throw error;
        }
    }

    setAuthenticatedStatus(value) {
        try {
            if (this.dataSource === DATASOURCE.MOCK) {
                return;
            } else {
                authStatusStorage.setValue(value);
            }
        } catch (error) {
            throw error;
        }
    }

    setUnAuth() {
        try {
            if (this.dataSource === DATASOURCE.MOCK) {
                return;
            } else {
                authStatusStorage.removeItem();
            }
        } catch (error) {
            throw error;
        }
    }
}


