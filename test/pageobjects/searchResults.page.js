class SearchResultsPage {
    get searchResults() {
      return $('//XCUIElementTypeOther[@name="About ¡Hola!"]');
    }
  
    get holaPageLink() {
      return $('//XCUIElementTypeLink[@name="¡HOLA! www.hola.com ¡HOLA!"]');
    }
  
    async waitForSearchResults() {
      await this.searchResults.waitForDisplayed({ timeout: 5000 });
    }
  
    async scrollToHolaPageLink() {
      await this.holaPageLink.scrollIntoView();
    }
  
    async clickHolaPageLink() {
      await this.holaPageLink.click();
    }
  }
  
  module.exports = new SearchResultsPage();
  