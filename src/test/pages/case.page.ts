import { $ } from '@wdio/globals';
import { baseUrl } from '../../helpers/constants';
import BasePage from './base.page';

class CasePage extends BasePage {
    constructor() {
        super();
        this.url = `${baseUrl}/projects`;
    }

    private get titleField() {
        return $('#title');
    }

    private get descriptionField() {
        return $('label[for="0-description"] + div p');
    }

    private get addStepBtn() {
        return $('//button[contains(., " Add step")]');
    }

    private get addAttachmentBtn() {
        return $('//button[contains(., "Add attachment")]');
    }

    private get uploadAttachmentInput() {
        return $('input[class="dz-hidden-input"]');
    }

    private get stepActionField() {
        return $('p[data-placeholder="Step Action"]');
    }

    private get dataField() {
        return $('p[data-placeholder="Data"]');
    }

    private get expectedResultField() {
        return $('p[data-placeholder="Expected result"]');
    }

    private get severityDropdown() {
        return $('label[for="0-severity"] + div');
    }

    private get searchFieldInSeverityDropdown() {
        return $('label[for="0-severity"] + div input');
    }

    private get saveBtn() {
        return $('#save-case');
    }

    public async fillCaseTitleField(title: string) {
        await this.titleField.setValue(title);
    }

    public async fillCaseDescriptionField(text: string) {
        await this.descriptionField.setValue(text);
    }

    public async openSeverityDropdown() {
        await this.severityDropdown.click();
    }

    public async fillSearchFieldInSeverityDropdown(severity: string) {
        await this.searchFieldInSeverityDropdown.setValue(severity);
    }

    public async selectValueInSeverityDropdown() {
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
    }

    public async clickAddStepBtn() {
        await this.addStepBtn.click();
    }
    
    public async clickAddAttachmentBtn() {
        await this.addAttachmentBtn.click();
    }

    public async uploadFileInAttachmentForm(filePath: string) {
        const file = await browser.uploadFile(filePath);
        await this.uploadAttachmentInput.addValue(file);
    }

    public async fillStepActionField(stepAction: string) {
        await this.stepActionField.setValue(stepAction);
    }

    public async fillDataField(data: string) {
        await this.dataField.setValue(data);
    }

    public async fillExpectedResultField(expectedResult: string) {
        await this.expectedResultField.setValue(expectedResult);
    }

    public async createSteps(countOfSteps: number, stepAction: string, data: string, expectedResult: string) {
        for (let i = 0; i < countOfSteps; i++) {
            await this.clickAddStepBtn();
            await this.fillStepActionField(`step-${i+1}: ${stepAction}`);
            await this.fillDataField(`data-${i+1}: ${data}`);
            await this.fillExpectedResultField(`result-${i+1}: ${expectedResult}`);
        }
    }

    public async clickSaveBtn() {
        await this.saveBtn.click();
    }
}

export default new CasePage();
