import test from '../../modules/helpers/import.helper'
import {
    INVALID_LOGIN,
    LOGIN_SUCCESSFUL,
    PASSWORD,
    USER_NAME,
    WRONG_PASSWORD,
    WRONG_USER_NAME
} from "../../data/login.data";

test.describe('Login', () => {

    test.beforeEach(async ({homePage})=>{
        await homePage.goto();
    })

    test('Login with valid data', async ({homePage,assertionsHelper}) => {
        await homePage.login(USER_NAME,PASSWORD);
        await assertionsHelper.checkAlert(LOGIN_SUCCESSFUL);
        await assertionsHelper.checkScreenshot();
    });

    test('Login with wrong email', async ({homePage,assertionsHelper}) => {
        await homePage.login(WRONG_USER_NAME,PASSWORD);
        await assertionsHelper.checkAlert(INVALID_LOGIN);
    });

    test('Login with wrong password', async ({homePage,assertionsHelper}) => {
        await homePage.login(USER_NAME,WRONG_PASSWORD);
        await assertionsHelper.checkAlert(INVALID_LOGIN);
    });
});