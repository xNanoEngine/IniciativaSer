import { Builder, By, Key } from "selenium-webdriver";
import {leerArchivoJSON} from "./OpenJson.js";


async function loginTime(username, password) {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    const startTime = new Date().getTime();

    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys(username);
    await driver.findElement(By.id("user_password")).sendKeys(password, Key.RETURN);

    const endTime = new Date().getTime();

    const elapsedTime = endTime - startTime;

    console.log(`Tiempo de carga: ` + elapsedTime.toString());
  } catch (error) {
    console.error(error);
  } finally {
    await driver.quit(); 
  }
}

const dato = await leerArchivoJSON("TestUsers.json");
const tiempo = 0;
for (const key in dato) {
    tiempo += loginTime(key.name, key.password)}

console.log("Tiempo promedio de carga: " + (tiempo/dato.length));