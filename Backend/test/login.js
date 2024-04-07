import { Builder, By, Key } from "selenium-webdriver";
import fs from "fs/promises";

async function loginWithDelay(username, password) {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys(username);
    await driver.findElement(By.id("user_password")).sendKeys(password, Key.RETURN);
    await driver.sleep(5000); // Esperar 10 segundos entre cada intento

    // Verificar si el inicio de sesión fue exitoso (por ejemplo, comprobar si estamos en una página de inicio)
    const currentUrl = await driver.getCurrentUrl();
    if (currentUrl === "http://localhost:3000/login") {
      throw new Error(`Error: Las credenciales son incorrectas.`);
    }

    console.log(`Inicio de sesión exitoso para "${username}".`);
  } catch (error) {
    console.error("Error durante el inicio de sesión:", error.message);
  } finally {
    await driver.quit();
  }
}

async function example() {
  try {
    // Leer los datos del archivo JSON
    const data = await fs.readFile("credenciales.json", "utf-8");
    const credentials = JSON.parse(data);

    // Iterar sobre cada conjunto de credenciales y realizar el login con delay
    for (let { username, password } of credentials) {
      await loginWithDelay(username, password);
    }

    console.log("Todos los intentos de inicio de sesión han sido completados.");
  } catch (error) {
    console.error("Error:", error);
  }
}

example();
