import {ClientFunction} from 'testcafe'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const loginUrl = 'https://todoist.com/app/today'
const homeUrl = 'https://todoist.com/auth/login?success_page=%2Fapp%2Ftoday'

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
    HomePage.setTaskTitle('SQA single task');
    HomePage.clickOnAddTask();

    await t.expect(HomePage.singleTaskLabel).exists;
});

//Create 10 new tasks and validate they were created correctly.
test('Create 10 new task', async t => {
    for (let i = 1; i < 11; i++) {
        HomePage.clickOnAddTask();
        HomePage.setTaskTitle('Task number' + i + 'of 10');
        HomePage.clickOnAddTask();
        await t.expect(HomePage.tenTaskLabel).exists;
      }
    

    
});