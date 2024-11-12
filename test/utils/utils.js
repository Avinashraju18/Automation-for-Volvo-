/**
 * Utility functions for commonly used actions and assertions.
 */

const { expect } = require('@wdio/globals');

/**
 * Clicks on an element.
 * @param {WebdriverIO.Element} element - The WebDriverIO element to click.
 */
async function clickElement(element) {
    try {
        await element.click();
    } catch (error) {
        console.error(`Error clicking on the element: ${error}`);
        throw error;
    }
}

/**
 * Retrieves text from an element.
 * @param {WebdriverIO.Element} element - The WebDriverIO element to get text from.
 * @returns {string} The text content of the element.
 */
async function getTextFromElement(element) {
    try {
        return await element.getText();
    } catch (error) {
        console.error(`Error getting text from the element: ${error}`);
        throw error;
    }
}

/**
 * Checks if an element is visible on the page.
 * @param {WebdriverIO.Element} element - The WebDriverIO element to check.
 * @returns {boolean} True if the element is visible, false otherwise.
 */
async function isElementVisible(element) {
    try {
        return await element.isDisplayed();
    } catch (error) {
        console.error(`Error checking visibility of the element: ${error}`);
        throw error;
    }
}

/**
 * Checks if an element is enabled (i.e., interactive).
 * @param {WebdriverIO.Element} element - The WebDriverIO element to check.
 * @returns {boolean} True if the element is enabled (interactable), false if disabled.
 */
async function isElementEnabled(element) {
    try {
        return await element.isEnabled();
    } catch (error) {
        console.error(`Error checking if the element is enabled: ${error}`);
        throw error;
    }
}

module.exports = {
    clickElement,
    getTextFromElement,
    isElementVisible,
    isElementEnabled,
};
