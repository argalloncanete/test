var webdriver = require("selenium-webdriver");
By = webdriver.By;
until = webdriver.until;

var driver = new webdriver.Builder().forBrowser("chrome").build();

beforeAll(async () => {
          driver.manage().window().maximize();
          (await driver).get("http://localhost:4200/");
});
/* 
afterAll(async () => {
    await driver.quit();
  });
 */

test("test addOrder", async (done) => {
          (await driver)
                    .findElement(webdriver.By.id("ordName"))
                    .sendKeys("Americano");
          (await driver)
                    .findElement(webdriver.By.id("ordPrice"))
                    .sendKeys("4.5");
          (
                    await (
                              await driver
                    ).findElement(webdriver.By.id("ordDiscounted"))
          ).click();
          (
                    await (
                              await driver
                    ).findElement(webdriver.By.id("addOrderBtn"))
          ).click();
          (await driver)
                    .findElement(webdriver.By.id("ordName"))
                    .sendKeys("Butterfinger");
          (await driver)
                    .findElement(webdriver.By.id("ordPrice"))
                    .sendKeys("4.0");
          await (await driver).findElement(webdriver.By.id("ordDiscounted"));
          (
                    await (
                              await driver
                    ).findElement(webdriver.By.id("addOrderBtn"))
          ).click();

          done();
});

test("test editOrder", async (done) => {
          await driver;
          await (await driver).findElement(webdriver.By.id("edit")).click();
          //(await (await driver).findElement(webdriver.By.xpath("//table[2]/tr[4]/td[1]")));
          (
                    await (await driver).findElement(webdriver.By.id("updName"))
          ).clear();
          (await driver)
                    .findElement(webdriver.By.id("updName"))
                    .sendKeys("Espresso");
          (
                    await (
                              await driver
                    ).findElement(webdriver.By.id("updPrice"))
          ).clear();
          (await driver)
                    .findElement(webdriver.By.id("updPrice"))
                    .sendKeys("4.5");
          (
                    await (
                              await driver
                    ).findElement(webdriver.By.id("updDiscount"))
          ).click();
          (await (await driver).findElement(webdriver.By.id("updOrd"))).click();
          done();
});
test("test deleteOrder", async (done) => {
          await driver;
          await (await driver).findElement(webdriver.By.id("delete")).click();
          done();
});

jest.setTimeout(50000);
