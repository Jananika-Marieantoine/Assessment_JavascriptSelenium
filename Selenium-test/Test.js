const{Builder, By, key, until, Browser} = require('selenium-webdriver');
const assert = require ('assert');

(async function example(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://www.ebay.com/");
    //window mazimize
    await driver.manage().window().maximize();
    //navigate to shop category
    await driver.findElement(By.id("gh-shop-a")).click();
    await driver.findElement(By.xpath("(//a[@class = 'scnd'])[8]")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//a[text()='Cell Phones & Smartphones']")).click();
    //Allfilter
    await driver.findElement(By.xpath("//button[text() ='All Filters']")).click();
    await driver.sleep(2000);
    //Apply filter for condition
    await driver.findElement(By.xpath("//div[@id = 'c3-mainPanel-condition']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("c3-subPanel-LH_ItemCondition_New_cbx")).click();
    await driver.findElement(By.id("c3-subPanel-LH_ItemCondition_Certified%20-%20Refurbished_cbx")).click();
    //apply filter on price
    await driver.findElement(By.xpath("//div[@id = 'c3-mainPanel-price']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@class='x-textrange__input x-textrange__input--from']")).sendKeys("400");
    await driver.findElement(By.xpath("//input[@class='x-textrange__input x-textrange__input--to']")).sendKeys("1000");
    //apply filter on location
    await driver.findElement(By.xpath("//div[@id = 'c3-mainPanel-location']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("(//input[@class='radio__control'])[4]")).click();
    //click submit or apply
    await driver.findElement(By.xpath("//button[text()='Apply']")).click();
    await driver.sleep(2000);
    //Assertion
    try {
        let title = await driver.findElement(By.xpath("(//span[@class='brm__flyout__btn-label'])[1]")).getText();
        assert.strictEqual(title,'3 filters applied', 'title should be "3 filters applied"');
        await driver.sleep(3000);
    } 
    finally 
    {
    //closing driver
    await driver.quit();    
    }
})();