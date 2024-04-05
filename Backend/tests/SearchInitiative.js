import { Builder, By, Key, until } from "selenium-webdriver";

async function busquedaTest() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("http://localhost:3000/");
    await driver.findElement(By.id("busqueda")).sendKeys("test", Key.RETURN); // crear iniciativa antes que se llame test
    const leerIniciativaSelect = await driver.wait(
      until.elementLocated(By.xpath("//a[contains(text(),'Leer iniciativa')]")),
      10000
    );
    await leerIniciativaSelect.click();
  } finally {
  }
}
busquedaTest();

