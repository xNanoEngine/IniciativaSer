import { Builder, By, Key} from "selenium-webdriver";

async function example() {
  let driver = await new Builder().forBrowser("MicrosoftEdge").build();  //cambiar segun el navegador
  try {
    await driver.get("http://localhost:3000/login");
    await driver.findElement(By.id("user_account")).sendKeys("admin");
    await driver.findElement(By.id("user_password")).sendKeys("admin1122", Key.RETURN);
    }finally{
    }
}   

example();