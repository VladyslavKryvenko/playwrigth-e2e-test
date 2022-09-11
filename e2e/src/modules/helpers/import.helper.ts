import { test as importHelper } from '@playwright/test';
import {HomePage} from "../pages/home.page";
import {AssertionsHelper} from "./assertions.helper";

const test = importHelper.extend<{
    homePage: HomePage;
    assertionsHelper: AssertionsHelper;
}>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    assertionsHelper: async ({ page }, use) => {
        await use(new AssertionsHelper(page));
    },
});
export default test;
export { expect } from '@playwright/test';

