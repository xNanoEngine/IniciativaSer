import { Builder, By, Key, until } from "selenium-webdriver";

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // await driver.get("https://www.ejemplo.com");
    // let element = await driver.findElement(By.name("q"));
    // await element.sendKeys("ejemplo", Key.RETURN);
    // await driver.wait(until.titleIs("ejemplo - Google"), 1000);
    // let title = await driver.getTitle();
    // console.log("Título de la página:", title);
    await driver.get("http://198.58.113.82:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys("admin");
    await driver
      .findElement(By.id("user_password"))
      .sendKeys("admin1122", Key.RETURN);
    // await driver.findElement(By.)
  } finally {
  }
}
example();
