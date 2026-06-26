const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 600 });

  // hamdali.com
  await page.goto('https://Cubitrek.com', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'cubi.png', fullPage: false });
  console.log('hamdali.com ✅');

  // // LinkedIn
  // await page.goto('https://www.linkedin.com/in/muhammadhamd', { waitUntil: 'networkidle' });
  // await page.screenshot({ path: 'linkedin.png', fullPage: true });
  // console.log('LinkedIn ✅');

  await browser.close();
})();