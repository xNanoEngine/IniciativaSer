//test funcional login
import { Builder, By, Key } from "selenium-webdriver";

async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();
  try {
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys("admin");
    await driver.findElement(By.id("user_password")).sendKeys("admin1122", Key.RETURN);

    await driver.sleep(3000); // Esperar 3 segundos 

    const errorMessageElement = await driver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div[2]/div[2]/div/form/p"));
    const errorMessageText = await errorMessageElement.getText();
    console.log(errorMessageText)

    if (errorMessageText.toLowerCase().includes("incorrect")) {
      throw new Error("Error: Las credenciales proporcionadas son incorrectas.");
    } else {
      console.log("Inicio de sesión exitoso!");
    }
  } catch (error) {
    console.error(error);
  } finally {


  }
}

example();