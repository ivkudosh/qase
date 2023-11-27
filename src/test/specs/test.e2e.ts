import { expect } from '@wdio/globals';
import { email, password } from '../../helpers/constants';
import { getRandomSeverity, randomName, randomText } from '../../helpers/randoms';
import CasePage from '../pages/case.page';
import LoginPage from '../pages/login.page';
import ProjectsPage from '../pages/projects.page';

const randomProjectName = randomName();
const randomDescriptionText = randomText(({ count: { min: 5, max: 10 } }));

const randomCaseName = randomName();
const randomCaseDescriptionText = randomText(({ count: { min: 5, max: 10 } }));

const randomSeverity = getRandomSeverity();

const imgForCase = 'src/img/test.jpg';

describe('Qase.io application', () => {
    it('Should create a test case in the project', async () => {
        await LoginPage.visitPage();
        await LoginPage.fillEmailField(email),
        await LoginPage.fillPasswordField(password);
        await LoginPage.clickSignInButton();

        await ProjectsPage.clickCreateNewProjectBtn();
        await ProjectsPage.fillProjectNameField(randomProjectName),
        await ProjectsPage.fillProjectDescriptionField(randomDescriptionText);
        await ProjectsPage.clickCreateProjectBtn();
        await ProjectsPage.clickCreateCaseBtn();
        
        await CasePage.fillCaseTitleField(randomCaseName);
        await CasePage.fillCaseDescriptionField(randomCaseDescriptionText);
        await CasePage.clickAddAttachmentBtn();
        await CasePage.uploadFileInAttachmentForm(imgForCase);
        await CasePage.openSeverityDropdown();
        await CasePage.fillSearchFieldInSeverityDropdown(randomSeverity);
        await CasePage.selectValueInSeverityDropdown();
        await CasePage.createSteps(3, randomName(), randomName(), randomName());
        await CasePage.clickSaveBtn();

        await expect(await ProjectsPage.getCreatedTestCaseNameInContainer()).toContain(randomCaseName);
    });
});
