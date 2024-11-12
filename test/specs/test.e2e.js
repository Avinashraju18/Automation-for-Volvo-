const { expect } = require('@wdio/globals'); // Importing WebDriverIO assertion library
const Homepage = require('../pageobjects/Homepage'); // Import the Homepage page object
const { clickElement, getTextFromElement, isElementEnabled } = require('../utils/utils'); // Import reusable utility functions

describe('Volvo Cars Home Page', () => {
    // This block runs before each test case
    beforeEach(async () => {
        // Maximize the browser window before every test to ensure all elements are fully visible
        await browser.maximizeWindow();

         await browser.url('/');

         
         await Homepage.acceptCookies();

    });

    /**
     * Test Case 1 - Fetch Data and Verify it
     */
    it('01 - Fetch the data, verify and print', async () => {
        try {
            // Optional pause to ensure the page and elements are fully loaded
            await browser.pause(1000);

            // Click on 'Our Cars' link by calling the reusable click method from Homepage page object
            await Homepage.clickOurCarsLabel();

            // Fetch the sedan text from the 'Sedan Text' element and verify it
            const text = await Homepage.getSedanText();
            console.log('Text displayed:', text); // Output the text for debugging or reporting

            // Assert that the fetched text matches the expected value ('SUVs')
            expect(text).toEqual('SUVs');
        } catch (error) {
            // Catch and log any error that occurs during the execution of the test
            console.error('Error fetching data:', error);
        }
    });

    /**
     * Test Case 2 - Verify Scroll Button is Disabled After Clicking the Volvo Logo
     */
    it('02 - Click on Volvo logo and verify scroll button is disabled', async () => {
        try {
            // Click on the Volvo logo by calling the click method from Homepage page object
            await Homepage.clickVolvoBtn();

            // Verify that the scroll button is disabled by checking its enabled status
            const isDisabled = await Homepage.isScrollBtnEnabled();

            // Assert that the scroll button is disabled (i.e., it should not be interactable)
            expect(isDisabled).toBe(false); // The button should be disabled (non-interactable)
        } catch (error) {
            // Catch and log any error that occurs during the execution of the test
            console.error('Error verifying scroll button:', error);
        }
    });

    /**
     * Test Case 3 - Fetch Data and Verify it for 'Shop' and 'Special Vehicles' Links
     */
    it('03 - Fetch the data, verify and print', async () => {
        try {
            // Optional pause to ensure page elements are loaded
            await browser.pause(1000);

            // Click on the 'Shop' link by calling the click method from the Homepage page object
            await Homepage.clickShopLink();

            // Click on the 'Special Vehicles' link by calling the click method from Homepage page object
            await Homepage.clickSpecialVehiclesLink();

            // Fetch the text for 'Special Vehicles' and verify it
            const spText = await Homepage.getSpecialVehiclesText();
            console.log('Text displayed:', spText); // Output the text for debugging or reporting

            // Assert that the fetched text matches the expected value ('Special Vehicles by Volvo Cars')
            expect(spText).toEqual('Special Vehicles by Volvo Cars');
        } catch (error) {
            // Catch and log any error that occurs during the execution of the test
            console.error('Error fetching or verifying data:', error);
        }
    });

    /**
     * Test Case 4 - Visual Appearance Test (UI Consistency)
     */
    it('should verify the homepage visual appearance', async () => {
        try {
            // Select the body element of the page to take a screenshot
            const homepage = await $('body');

            // Use WebDriverIO's assertView method to compare the current screenshot with the baseline
            await browser.assertView(homepage, 'homepage'); // This will compare and ensure the UI matches the baseline image
        } catch (error) {
            // Catch and log any error that occurs during the execution of the visual appearance test
            console.error('Error taking visual screenshot:', error);
        }
    });
});
