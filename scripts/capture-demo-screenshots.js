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

    await page.waitForTimeout(1200);

    const roles = page.locator('input[type="radio"][name="demo-role"]');
    if (await roles.count()) {
      const checked = page.locator('input[type="radio"][name="demo-role"]:checked');
      if (await checked.count() === 0) {
        await roles.first().check({ force: true });
        await page.waitForTimeout(500);
      }
    }

    const loginState = await page.evaluate(() => ({
      radios: [...document.querySelectorAll('input[type="radio"][name="demo-role"]')].map(el => ({
        value: el.value,
        checked: el.checked,
        disabled: el.disabled,
        label: el.closest('label')?.innerText?.trim() || null
      })),
      enterDemo: [...document.querySelectorAll('button')].filter(
        el => (el.innerText || el.textContent || '').trim().toLowerCase() === 'enter demo'
      ).map(el => ({ disabled: el.disabled, text: (el.innerText || '').trim() }))
    }));
    console.log('LOGIN_STATE=' + JSON.stringify(loginState));

    const enterDemoButton = page.locator('button').filter({ hasText: /^Enter Demo$/i }).first();
    const clicked = await enterDemoButton.count() > 0;
    if (clicked) {
      await enterDemoButton.click({ force: true });
    }

    if (!clicked) {
      const buttonTexts = await page.evaluate(() =>
        [...document.querySelectorAll('button')].map(
          el => (el.innerText || el.textContent || '').trim()
        ).filter(Boolean)
      );
      throw new Error('Enter Demo button not found after guide cleanup. Buttons: ' + JSON.stringify(buttonTexts));
    }

    // Demo entry may persist client-side state without performing a hard navigation.
    // Give the app time to store the selected demo role, then reopen the target route
    // in the SAME browser context so that session/local state is preserved.
    await page.waitForTimeout(3000);

    const postLoginState = await page.evaluate(() => ({
      url: location.href,
      localStorageKeys: Object.keys(localStorage),
      sessionStorageKeys: Object.keys(sessionStorage),
      bodyPreview: (document.body.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 600)
    }));
    console.log('POST_ENTER_DEMO_STATE=' + JSON.stringify(postLoginState));

    await page.goto(target, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(4000);
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

async function capture(context, path, loginPath = null) {
  const page = await context.newPage();

  if (loginPath) {
    await page.goto(process.env.DEMO_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(5000);
    if (new URL(page.url()).pathname.startsWith('/login')) {
      await disableGuides(page);
      await page.waitForTimeout(1500);
      await page.screenshot({ path: loginPath, fullPage: true });
    }
  }

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
    'assets/screenshots/takvim-desktop.png',
    'assets/screenshots/login-clean-desktop.png'
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
