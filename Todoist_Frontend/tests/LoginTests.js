import {ClientFunction} from 'testcafe'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

const url = 'https://todoist.com/auth/login?success_page=%2Fapp%2Ftoday'
const getUrl = ClientFunction(() => window.location.href);

require('dotenv').config()

fixture('Login Page')
.page(url)

test('Loading Login Page', async t => {
    await t
    .expect(getUrl()).contains(url)
    .expect(LoginPage.loginBtn.exists).ok();
});

test('Sucessful Login', async t => {
    LoginPage.setUserName(process.env.ACCOUNT);
    LoginPage.setPassword(process.env.PASSWORD);
    LoginPage.clickOnLoginButton();

    await t.expect(HomePage.todayLabel).exists;
});

test('Unsucessful Login - Invalid Username', async t => {
    LoginPage.setUserName(process.env.ACCOUNT);
    LoginPage.setPassword(process.env.PASSWORD);
    LoginPage.clickOnLoginButton();

    await t.expect(LoginPage.responseCard.innerText).contains('Wrong email or password.');
});

test('Unsucessful Login - Invalid Password', async t => {
    LoginPage.setUserName(process.env.ACCOUNT);
    LoginPage.setPassword(process.env.PASSWORD);
    LoginPage.clickOnLoginButton();

    await t.expect(LoginPage.responseCard.innerText).contains('Wrong email or password.');
});