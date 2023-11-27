import { $ } from '@wdio/globals';
import BasePage from './base.page';
//This page is needed if the test first goes to https://qase.io
class MainPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://qase.io';
    }

    private get loginBtn() {
        return $('#signin');
    }

    public async clickLoginBtn() {
        await this.loginBtn.click();
    }
}

export default new MainPage();
