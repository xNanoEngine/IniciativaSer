import { Builder, By, Key, until } from "selenium-webdriver";
import {leerArchivoJSON} from "./OpenJson.js";
import assert from 'assert';

async function busquedaTest(ip, name, expectedName) {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get(ip);
    await driver.findElement(By.id("busqueda")).sendKeys(name, Key.RETURN); // crear iniciativa antes que se llame test
    const leerIniciativaSelect = await driver.wait(
      until.elementLocated(By.xpath("//a[contains(text(),'Leer iniciativa')]")),
      10000
    );
    await leerIniciativaSelect.click();
  } finally {
    let nombreIniciativaEncontrado = await driver.findElement(By.xpath(`//h1[contains(text(), "${name}")]`)).getText();
    assert.strictEqual(nombreIniciativaEncontrado, expectedName, 'El nombre de la iniciativa no coincide con el valor esperado.');
    console.log('El nombre de la iniciativa coincide con el valor esperado:', expectedName);
    await driver.quit();
  }
}


const dato = await leerArchivoJSON();

busquedaTest(dato.ip, dato.name, "test");