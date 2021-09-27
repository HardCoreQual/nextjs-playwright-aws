import chromium  from 'chrome-aws-lambda';
import playwright from 'playwright-core';

export default async function (req: any, res: any) {
  const browser = await playwright.chromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });
  const context = await browser.newContext();


  const page = await context.newPage();
  await page.goto('https://google.com/');
  const pdf = await page.pdf();

  res.status(200).json({pdf});
}
