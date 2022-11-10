import {ClientFunction} from 'testcafe'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const loginUrl = 'https://todoist.com/auth/login?success_page=%2Fapp%2Ftoday'
const homeUrl = 'https://todoist.com/app/today'

const getUrl = ClientFunction(() => window.location.href);

require('dotenv').config()

fixture('Home Page')
.page(loginUrl)
.beforeEach(async t => {
    LoginPage.setUserName(process.env.ACCOUNT);
    LoginPage.setPassword(process.env.PASSWORD);
    LoginPage.clickOnLoginButton();

    await t.wait(10000);
});

//Performs a successful login, using credentials stored preferably in a .env file
test('Loading Home Page', async t => {
    await t
    .expect(getUrl()).contains(homeUrl);
});

//Create a new task and validate it was created correctly.
test('Create a new task', async t => {
    HomePage.clickOnAddTask();
    await t.wait(2000);
    HomePage.setTaskTitle('SQA');
    await t.wait(2000);
    HomePage.clickOnAddTaskBtn();
    await t.wait(2000);

    await t.expect(HomePage.singleTaskLabel).exists;
    await t.wait(2000);
});

//Create 10 new tasks and validate they were created correctly.
test('Create 10 new task', async t => {
    for (let i = 1; i < 11; i++) {
        HomePage.clickOnAddTask();
        await t.wait(2000);
        let taskNumber = i.toString();
        HomePage.setTaskTitle(taskNumber);
        await t.wait(2000);
        HomePage.clickOnAddTaskBtn();
        await t.wait(2000); 
        await t.expect(HomePage.tenTaskLabel.withText(taskNumber)).exists;
        await t.wait(2000);
      }
    

    
});