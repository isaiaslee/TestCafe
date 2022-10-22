import {Selector, t} from 'testcafe'

class LoginPage{

    constructor(){
        this.userNameInput = Selector('input#element-0');
        this.passwordInput = Selector('input#element-3');
        this.loginBtn = Selector('button').withText('Log in');
        this.responseCard = Selector('div').withText('Wrong email or password.');
    }

    async setUserName(userName){
        await t
        .typeText(this.userNameInput, userName)
    }
    

    async setPassword(password){
        await t
        .typeText(this.passwordInput, password)
    }

    async clickOnLoginButton(){
        await t
        .click(this.loginBtn);
    }
}

export default new LoginPage();