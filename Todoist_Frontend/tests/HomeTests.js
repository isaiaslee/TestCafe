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
    LoginPage.setUserName("isaias.iniguez@wizeline.com");
    LoginPage.setPassword("isaias.iniguez@wizeline.com");
    LoginPage.clickOnLoginButton();

    await t.wait(10000);
});

test('Loading Home Page', async t => {
    await t
    .expect(getUrl()).contains(homeUrl);
});

test('Create a new task', async t => {
    HomePage.clickOnAddTask();
    HomePage.setTaskTitle('SQA single task');
    HomePage.clickOnAddTask();

    await t.expect(HomePage.singleTaskLabel).exists;
});

test('Create 10 new task', async t => {
    for (let i = 1; i < 11; i++) {
        HomePage.clickOnAddTask();
        HomePage.setTaskTitle('Task number' + i + 'of 10');
        HomePage.clickOnAddTask();
        await t.expect(HomePage.tenTaskLabel).exists;
      }
    

    
});