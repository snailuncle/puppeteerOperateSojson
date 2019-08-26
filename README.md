写此仓库的原因: 有几十个脚本要加密, sojson用的人比较多, 加密好, 但是不想手动复制黏贴, 所以就用puppeteer实现自动化.

puppeteer  两篇较好的教程
1. https://www.jianshu.com/p/a9a55c03f768   爬虫利器 Puppeteer 实战
2. https://cnodejs.org/topic/5a041412ad77fa2004549183   使用puppeteer-autotest 来为cnodejs 做自动化测试.

搭建puppeteer环境遇到的错误

错误描述: 
ERROR: Failed to download Chromium r674921! Set "PUPPETEER_SKIP_CHROMIUM_DOWNLOAD" env variable to skip download.

解决办法:
npm config set puppeteer_download_host=https://npm.taobao.org/mirrors
npm i puppeteer

环境搭建:
puppeteer需要首先在电脑上安装nodejs, 然后npm i puppeteer即可.

puppeteer官方文档
https://pptr.dev/

