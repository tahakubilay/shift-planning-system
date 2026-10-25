const { chromium, devices } = require('playwright');

async function clickIfVisible(locator, timeout = 1500) {
  try {
    if (await locator.isVisible({ timeout })) {
      await locator.click();
      return true;
    }
  } catch {}
  return false;
}

async function disableGuides(page) {
  await clickIfVisible(page.getByRole('button', { name: /turn tutorials off|guides on/i }));
  await clickIfVisible(page.getByRole('button', { name: /cancel guide|stop automatic guides/i }));
  await clickIfVisible(page.getByRole('button', { name: /skip|close|kapat|atla|bitir|finish/i }).first());
  await page.waitForTimeout(800);
}

async function enterDemoAndOpenCalendar(page) {
  const target = process.env.DEMO_URL;
  await page.goto(target, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  if (new URL(page.url()).pathname.startsWith('/login')) {
    await disableGuides(page);

    const enterDemo = page.getByRole('button', { name: /^enter demo$/i });
    await enterDemo.waitFor({ state: 'visible', timeout: 10000 });
    await enterDemo.click();

    await page.waitForURL(url => !url.pathname.startsWith('/login'), {
      timeout: 20000
    });
  }

  if (!new URL(page.url()).pathname.startsWith('/takvim')) {
    await page.goto(target, { waitUntil: 'networkidle', timeout: 60000 });
  }

  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(3500);
  await disableGuides(page);
  await page.waitForTimeout(2500);

  if (new URL(page.url()).pathname.startsWith('/login')) {
    throw new Error('Demo flow did not reach the calendar page.');
  }

  const diagnostics = await page.evaluate(() => ({
    url: location.href,
    title: document.title,
    bodyPreview: (document.body.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 1200),
    buttons: [...document.querySelectorAll('button')]
      .filter(el => {
        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return style.visibility !== 'hidden' && style.display !== 'none' && rect.width > 0 && rect.height > 0;
      })
      .map(el => (el.innerText || el.textContent || '').trim())
      .filter(Boolean)
      .slice(0, 40)
  }));

  console.log('FINAL_PAGE_DIAGNOSTICS=' + JSON.stringify(diagnostics));
}

async function capture(context, path) {
  const page = await context.newPage();
  await enterDemoAndOpenCalendar(page);
  await page.screenshot({ path, fullPage: true });
  await context.close();
}

(async () => {
  const browser = await chromium.launch({ headless: true });

  await capture(
    await browser.newContext({
      viewport: { width: 1440, height: 1000 },
      deviceScaleFactor: 1
    }),
    'assets/screenshots/takvim-desktop.png'
  );

  await capture(
    await browser.newContext({ ...devices['iPhone 13'] }),
    'assets/screenshots/takvim-mobile.png'
  );

  await browser.close();
})().catch(error => {
  console.error(error);
  process.exit(1);
});
