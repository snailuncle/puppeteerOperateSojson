const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await (puppeteer.launch({
    // 显示浏览器
    headless: false,
    // 每步延迟250毫秒
    'slowMo': 250,
  }));
  const page = await browser.newPage();

  // 进入页面
  await page.goto('https://www.sojson.com/jsobfuscator.html');
  page.on('dialog', async dialog => {
    console.log(dialog.type())
    console.log(dialog.message())
    await dialog.accept()
  })
  // 获取页面标题
  let title = await page.title();
  console.log('页面标题是: ' + title);

  // 等待弹框
  await page.waitFor(3000);
  let inputValue = await page.$eval('.layui-layer-btn0', el => el.innerText);
  console.log(inputValue)

  // 点击弹框
  let el = await page.$('.layui-layer-btn0');
  await el.click();	// 执行点击事件

  // 打印输入框内容
  inputValue = await page.$eval('#source', el => el.value);
  console.log(inputValue)

  // 改变输入框内容
  await page.$eval('#source', el => el.value = "123");

  // 点击js混淆加密按钮
  el = await page.$('.layui-btn.execute');
  await el.click();	// 执行点击事件

  // 打印输入框内容
  await page.waitFor(2000);
  inputValue = await page.$eval('#resultSource', el => el.value);
  console.log(inputValue)



  // 写入文件
  writerStream = fs.createWriteStream('encrypted.js');
  await writerStream.write(inputValue, 'UTF8');
  await writerStream.end();

})();

