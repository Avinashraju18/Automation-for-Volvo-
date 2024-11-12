const { $ } = require('@wdio/globals');
const { clickElement, getTextFromElement, isElementVisible, isElementEnabled } = require('../utils/utils'); // Importing utils

class Homepage {
    
    // Define your page elements
    get ourCarsLabel() {
        return $('#section-label-0 > span');
    }

    get sedanText() {
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/small[1]');
    }

    get shopLink() {
        return $('#section-label-1 > span');
    }

    get specialVehiclesLink() {
        return $('//*[@id="sitenav-topbar-section-menu"]/div[1]/div[1]/ul/li[3]/a');
    }

    get specialVehiclesText() {
        return $('#ModelIntro-1 > section > section > h2');
    }

    get volvoBtn() {
        return $('#sitenav-topbar-wrapper > nav > div:nth-child(1) > div > a');
    }

    get scrollBtn() {
        return $('//*[@id="CarCarousel-1"]/section/div/div[1]/div[2]');
    }

    // Cookie Consent Popup - Button to accept cookies
    get acceptCookiesButton() {
        return $('//*[@id="onetrust-accept-btn-handler"]'); // Update with the correct selector
    }

    // Reusable action methods

    /**
     * Clicks on the 'Our Cars' label.
     */
    async clickOurCarsLabel() {
        await clickElement(this.ourCarsLabel);
    }

    /**
     * Fetches the text from the 'Sedan Text' label.
     * @returns {string} The text content of the element.
     */
    async getSedanText() {
        return await getTextFromElement(this.sedanText);
    }

    /**
     * Clicks on the 'Shop' link.
     */
    async clickShopLink() {
        await clickElement(this.shopLink);
    }

    /**
     * Clicks on the 'Special Vehicles' link.
     */
    async clickSpecialVehiclesLink() {
        await clickElement(this.specialVehiclesLink);
    }

    /**
     * Fetches the 'Special Vehicles' text.
     * @returns {string} The text content of the element.
     */
    async getSpecialVehiclesText() {
        return await getTextFromElement(this.specialVehiclesText);
    }

    /**
     * Clicks on the Volvo button.
     */
    async clickVolvoBtn() {
        await clickElement(this.volvoBtn);
    }

    /**
     * Checks if the scroll button is enabled.
     * @returns {boolean} True if the scroll button is enabled, false otherwise.
     */
    async isScrollBtnEnabled() {
        return await isElementEnabled(this.scrollBtn);
    }

    /**
     * Handles the cookie consent popup and accepts it.
     */
    async acceptCookies() {
        try {
            // Check if the accept button is visible and then click it
            const acceptButton = await this.acceptCookiesButton;
            if (await acceptButton.isDisplayed()) {
                await acceptButton.click();
                console.log('Cookie consent accepted.');
            }
        } catch (error) {
            console.error('Error handling cookie consent:', error);
        }
    }
}

module.exports = new Homepage();
