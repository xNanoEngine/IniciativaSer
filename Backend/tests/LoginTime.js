import { Builder, By, Key } from "selenium-webdriver";
import {leerArchivoJSON} from "./OpenJson.js";
import assert from 'assert';


async function loginTime(username, password) {
  let driver = await new Builder().forBrowser("chrome").build();
  let elapsedTime;
  try {
    const startTime = new Date().getTime();

    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys(username);
    await driver.findElement(By.id("user_password")).sendKeys(password, Key.RETURN);

    await waitForUrlChange(driver, "http://localhost:3000", 5000);

    const endTime = new Date().getTime();

    elapsedTime = endTime - startTime;

    console.log(`Tiempo de carga: ` + elapsedTime.toString());
  } catch (error) {
    console.error(error);
  } finally {
    // const currentUrl = await driver.getCurrentUrl();
    // console.log(currentUrl);
    // assert.strictEqual(currentUrl, 'http://localhost:3000', 'La pagina resultado no es la de inicio.');
    // console.log('El valor obtenido coincide con el valor esperado:');
    await driver.quit();
    return elapsedTime;
  }
}

async function waitForUrlChange(driver, targetUrl, timeout) {
    return new Promise((resolve, reject) => {
      const interval = 100; // Intervalo de verificación de la URL en milisegundos
      let elapsedTime = 0;

      const intervalId = setInterval(async () => {
        elapsedTime += interval;
        const currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes(targetUrl)) {
          clearInterval(intervalId);
          resolve();
        } else if (elapsedTime >= timeout) {
          clearInterval(intervalId);
          reject(new Error(`La página no cargó la URL ${targetUrl} dentro de ${timeout} milisegundos.`));
        }
      }, interval);
    });
  }

const dato = await leerArchivoJSON("TestUsers.json");
let tiempo = 0;
for (let { name, password } of dato) {
    tiempo += loginTime(name, password)}
console.log("Tiempo promedio de carga: " + (tiempo/dato.length));
