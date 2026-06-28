const { chromium } = require('/Users/atitudeeprogresso/.npm/_npx/e41f203b7505f1fb/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  const outputDir = path.join(__dirname, 'instagram');
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1080, height: 1350 });

  const filePath = 'file://' + path.join(__dirname, 'carrossel.html');
  await page.goto(filePath, { waitUntil: 'networkidle', timeout: 30000 });

  // Wait for fonts to load
  await page.waitForFunction(() => document.fonts.ready);

  const slides = await page.$$('.slide');
  console.log(`Encontrados ${slides.length} slides`);

  for (let i = 0; i < slides.length; i++) {
    const num = String(i + 1).padStart(2, '0');
    const outPath = path.join(outputDir, `slide-${num}.png`);
    await slides[i].screenshot({ path: outPath });
    console.log(`✓ slide-${num}.png`);
  }

  await browser.close();
  console.log('\nPronto! PNGs salvos em instagram/');
})();
