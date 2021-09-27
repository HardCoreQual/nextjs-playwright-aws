const chromium = require('chrome-aws-lambda');
const playwright = require('playwright-core');

export default async function (req: any, res: any) {
  const browser = await playwright.chromium.launch({});
  const context = await browser.newContext();


  const page = await context.newPage({});
  await page.goto('https://google.com/');
  const pdf = await page.pdf();

  res.status(200).json({pdf});
}
