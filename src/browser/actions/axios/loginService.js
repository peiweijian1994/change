import {MethodType, request} from './index';

class LoginService{

    constructor(){
    }
    static Instance;
    static get Instance() {
        if (null == LoginService.instance) {
            LoginService.instance = new LoginService();
        }
        return LoginService.instance;
    }
    login(){
        
    }
}
export default LoginService;