import { $ } from '@wdio/globals';
import { baseUrl } from '../../helpers/constants';
import BasePage from './base.page';

class ProjectsPage extends BasePage {
    constructor() {
        super();
        this.url = `${baseUrl}/projects`;
    }

    private get createNewProjectBtn() {
        return $('#createButton');
    }

    public get createNewProjectModal() {
        return $('.ReactModal__Overlay');
    }

    private get projectNameField() {
        return $('#project-name');
    }

    private get descriptionField() {
        return $('#description-area');
    }

    private get createProjectBtn() {
        return $(`.ReactModal__Overlay button[type="submit"]`);
    }

    private get createCaseBtn() {
        return $(`#create-case-button`);
    }

    public get testCaseName() {
        return $(`#suitecases-container div ~ div ~ div ~ div + div`);
    }

    public async clickCreateNewProjectBtn() {
        await this.createNewProjectBtn.click();
    }

    public async fillProjectNameField(name: string) {
        await this.projectNameField.setValue(name);
    }

    public async fillProjectDescriptionField(text: string) {
        await this.descriptionField.setValue(text);
    }

    public async clickCreateProjectBtn() {
        await this.createProjectBtn.click();
    }

    public async clickCreateCaseBtn() {
        await this.createCaseBtn.click();
    }

    public getCreatedTestCaseNameInContainer() {
        return this.testCaseName.getText();
    }
}

export default new ProjectsPage();
