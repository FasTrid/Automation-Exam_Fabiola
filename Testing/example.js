var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.get('https://www.google.com');
driver.findElement(By.name('q')).sendKeys('Focus Services');
driver.findElement(By.name('btnK')).click();
driver.findElement(By.linkText('Focus Services – Beyond Expectations ')).click();
driver.findElement(By.className('avia_iconbox_title'));
driver.switchTo().window('Careers').then(() => {
    driver.getCurrentUrl().then(url => {console.log('current url: "' + url + '"');});
  });
driver.findElement(By.linkText('Careers')).click();
driver.findElement(By.id('search_keywords')).sendKeys('inbound');
driver.findElement(By.id('search_keywords')).sendKeys(webdriver.Key.ENTER);
driver.findElement(By.id('317531')).click();
driver.findElement(By.id('description'));



