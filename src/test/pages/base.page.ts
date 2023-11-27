import { browser } from '@wdio/globals';

export default class BasePage {
    protected url!: string;

    public async visitPage() {
        await browser.url(this.url);
    }
}
