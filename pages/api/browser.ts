import chromium  from 'chrome-aws-lambda';
import playwright from 'playwright-core';
import {NextApiRequest, NextApiResponse} from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const isOnVercel = chromium.headless;

  const browser = await playwright.chromium.launch(isOnVercel ? {
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  } : {});

  const page = await browser.newPage();
  await page.goto('https://google.com/');
  const pdf = await page.pdf();

  res.status(200).json({pdf});
}
