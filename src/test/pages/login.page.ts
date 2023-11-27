/* eslint-disable @typescript-eslint/no-unused-vars */
import { $ } from '@wdio/globals';
import { baseUrl } from '../../helpers/constants';
import BasePage from './base.page';

class LoginPage extends BasePage {
    constructor() {
        super();
        this.url = `${baseUrl}/login`;
    }

    private get emailField () {
        return $('input[name="email"]');
    }

    private get passwordField() {
        return $('input[name="password"]');
    }

    private get signInBtn() {
        return $('button[type="submit"]');
    }

    public async fillEmailField(email: string){
        await this.emailField.setValue(email);
    }

    public async fillPasswordField(password: string){
        await this.passwordField.setValue(password);
    }

    public async clickSignInButton(){
        await this.signInBtn.click();
    }
}

export default new LoginPage();
