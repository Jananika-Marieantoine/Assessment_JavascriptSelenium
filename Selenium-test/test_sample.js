const{Builder, By, key, until, Browser} = require('selenium-webdriver');
const assert = require ('assert');

(async function example(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.ebay.com/");
    //window mazimize
    await driver.manage().window().maximize();
    //change category of search items
    await driver.findElement(By.id("gh-cat")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//option[text() ='Computers/Tablets & Networking']")).click();
    //Enter values on search box
    await driver.findElement(By.id("gh-ac")).sendKeys("Mac book");
    await driver.sleep(2000);
    //click search
    await driver.findElement(By.id("gh-btn")).click();
    await driver.sleep(2000);
    //assertion on search items
    try {
    let title = await driver.findElement(By.xpath("(//span[@class ='BOLD'])[18]")).getText();
    assert.strictEqual(title,'Apple MacBook Pro 13" i7 3.4GHz Turbo 16GB RAM 512GB SSD MONTEREY - ALL STATE', 'Title should contains "Apple Macbook"');
    await driver.sleep(2000);
} 
finally
{    
    //closing driver
    await driver.quit();

}
})();

