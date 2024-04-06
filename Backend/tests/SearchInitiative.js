import { Builder, By, Key, until } from "selenium-webdriver";
import {leerArchivoJSON} from "./OpenJson.js";

async function busquedaTest(ip, name) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get(ip);
    await driver.findElement(By.id("busqueda")).sendKeys(name, Key.RETURN); // crear iniciativa antes que se llame test
    const leerIniciativaSelect = await driver.wait(
      until.elementLocated(By.xpath("//a[contains(text(),'Leer iniciativa')]")),
      10000
    );
    await leerIniciativaSelect.click();
  } finally {
  }
}


const dato = await leerArchivoJSON();

busquedaTest(dato.ip, dato.name);