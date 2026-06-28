const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'carrossel.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  await page.waitForTimeout(2000);

  const slides = await page.$$('.slide');

  for (let i = 0; i < slides.length; i++) {
    const slideNum = String(i + 1).padStart(2, '0');
    await slides[i].screenshot({
      path: path.join(__dirname, 'instagram', `slide-${slideNum}.png`),
      type: 'png'
    });
    console.log(`slide-${slideNum}.png`);
  }

  await browser.close();
  console.log(`\n${slides.length} slides renderizados em instagram/`);
})();
