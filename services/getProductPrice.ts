import cheerio from 'cheerio';

// scrapeProductPrice?
const getProductPrice = async (url: string) => {
  try {
    const res = await fetch(url);
    const $ = cheerio.load(await res.text());

    const priceDivText = $('#price').text();
    const stripped = priceDivText.replace(/\s+/g, '');

    console.log('Amazon price text:', stripped);

    const regex = /Price:\$(\d*.\d*)/;
    const matches = stripped.match(regex);
    const priceText = matches ? matches[1] : null;

    if (priceText) {
      return parseFloat(priceText);
    } else {
      return null;
    }
  } catch (err) {
    console.log('error getting price', err);
    return null;
  }
};

export default getProductPrice;
