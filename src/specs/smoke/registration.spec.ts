import test from '../../modules/helpers/import.helper'
import {
    EMAIL,
    FIRST_NAME,
    LAST_NAME,
    PASSWORD_FOR_REGISTER,
    REGISTER_USER_NAME, REGISTRATION_FAIL,
    REGISTRATION_SUCCESSFUL
} from "../../data/login.data";

test.describe('Registration', () => {
    test.beforeEach(async ({homePage}) => {
        await homePage.goto()
    })

    test('Registration with valid data', async ({homePage,assertionsHelper}) => {
        await homePage.register(REGISTER_USER_NAME, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD_FOR_REGISTER);
        await assertionsHelper.checkAlert(REGISTRATION_SUCCESSFUL);
    });

    test('Registration with wrong email', async ({homePage,assertionsHelper}) => {
        await homePage.register('1', FIRST_NAME, LAST_NAME, EMAIL, PASSWORD_FOR_REGISTER);
        await assertionsHelper.checkAlert(REGISTRATION_FAIL);
    });

});