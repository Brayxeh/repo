class GooglePage {
    get googleFavorite() {
      return $('//XCUIElementTypeCell[@name="favoritesItemIdentifierContent" and @label="Google"]/XCUIElementTypeOther');
    }
  
    get searchGoogle() {
      return $('~search');
    }
  
    async openGoogleFavorite() {
      await this.googleFavorite.waitForDisplayed({ timeout: 5000 });
      await this.googleFavorite.click();
    }
  
    async search(term) {
      await this.searchGoogle.waitForDisplayed({ timeout: 5000 });
      await this.searchGoogle.setValue(term);
      await browser.keys('Enter'); 
    }
  }
  
  module.exports = new GooglePage();
  