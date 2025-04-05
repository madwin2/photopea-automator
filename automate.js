const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

(async () => {
  const scriptPath = process.argv[2];
  if (!scriptPath) {
    console.error("Debes indicar el path al archivo JS de script de Photopea.");
    process.exit(1);
  }

  const scriptCode = fs.readFileSync(scriptPath, "utf8");

  const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox"] });
  const page = await browser.newPage();

  await page.goto("https://www.photopea.com");

  await page.waitForFunction(() => typeof window.Photopea !== "undefined");

  await page.evaluate(scriptCode => {
    Photopea.runScript(scriptCode);
  }, scriptCode);

  // Esperar a que el archivo mockup se genere
  await page.waitForTimeout(5000);

  await browser.close();
})();