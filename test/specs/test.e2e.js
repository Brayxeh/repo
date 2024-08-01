const GooglePage = require('../pageobjects/GooglePage');
const SearchResultsPage = require('../pageobjects/SearchResultsPage');

describe('Google Search', () => {
  it('Google search 1', async () => {
    await GooglePage.openGoogleFavorite();
    await GooglePage.search('hola');
    await browser.pause(5000);
    await SearchResultsPage.waitForSearchResults();
    expect(await SearchResultsPage.searchResults.isDisplayed()).to.be.true;
    await SearchResultsPage.scrollToHolaPageLink();
    await SearchResultsPage.clickHolaPageLink();
  });
});
