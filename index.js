const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require("cheerio");
const pool = require("./db");
const data = require("./crawler");

const url =
  "https://www.flaconi.de/pflege/dr-barbara-sturm/baby-and-kids/dr-barbara-sturm-baby-and-kids-baby-bum-cream-babykoerpercreme.html#sku=80055471-75";

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const title = [];
    const brand = [];
    const img_url = [];

    $(
      ".BrandProductNameAndTypestyle__BrandName-sc-117vbmi-2 hRyxVn",
      html
    ).each(function () {
      const title = $(this).text();
      const url = $(this).find("font").attr("href");
      title.push({
        title,
        url,
      });
    });

    $(".BrandProductNameAndTypestyle__Wrapper-sc-117vbmi-0 ihnFtO", html).each(
      function () {
        const brand = $(this).text();
        const tag = $(this).find("a").attr("href");
        brand.push({
          brand,
          tag,
        });
      }
    );

    $(".ProductPreviewSliderstyle__Image-sc-1t0tp5v-2 grpdtf", html).each(
      function () {
        const img_url = $(this).find("a").attr("href");
        img_url.push({
          img_url,
        });
      }
    );
  })
  .catch((err) => console.log(err));

app.listen(6000);
