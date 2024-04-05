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
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys("admin");
    await driver
      .findElement(By.id("user_password"))
      .sendKeys("admin1122", Key.RETURN);
    // await driver.findElement(By.)
    await driver.wait(until.elementLocated(By.xpath("//a[contains(@href, '/initiative')]")), 10000).click();

    // Persona Juridica
    await driver.wait(until.elementLocated(By.xpath("//span[text()='Personalidad Jurídica']")), 10000).click();
    await driver.wait(until.elementLocated(By.xpath("//span[text()='Tipo de Persona Jurídica']")), 10000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Junta de vecinos']")), 10000).click();
    await driver.findElement(By.id("name")).sendKeys("Mismisimo");
    await driver.findElement(By.id("rut")).sendKeys("12.123.123-4");
    await driver.wait(until.elementLocated(By.xpath("//span[text()='Rol Persona Jurídica']")), 10000).click();
    await driver.wait(until.elementLocated(By.xpath("//div[text()='Ejecutor']")), 10000).click();
    await driver.wait(until.elementLocated(By.xpath("//button[text()='Guardar']")), 10000).click();

    // Persona Natural
    await driver.wait(until.elementLocated(By.xpath("//span[text()='Persona Natural']")), 10000).click();

  } finally {
  }
}
example();
