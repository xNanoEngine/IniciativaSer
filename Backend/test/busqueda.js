//test no funcional tiempo de busqueda

import { Builder, By, Key } from "selenium-webdriver";

async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    // Obtener el tiempo de inicio
    const startTime = new Date().getTime();

    await driver.get("http://localhost:3000");
    await driver.findElement(By.id("busqueda")).sendKeys("si", Key.RETURN);

    // Esperar hasta que la URL cambie a la ruta deseada con un límite de 5 segundos
    await waitForUrlChange(driver, "http://localhost:3000/search", 5000);

    // Obtener el tiempo de finalización
    const endTime = new Date().getTime();

    // Calcular el tiempo transcurrido en milisegundos
    const elapsedTime = endTime - startTime;

    console.log(`La página tardó ${elapsedTime} milisegundos en cargar después de la búsqueda.`);
  } catch (error) {
    console.error(error);
  } finally {
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

example();