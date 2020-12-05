import cheerio from 'cheerio';

const getProductPrice = async (url: string) => {
  try {
    const res = await fetch(url);
    const $ = cheerio.load(await res.text());

    const priceDivText = $('#price').text();
    const stripped = priceDivText.replace(/\s+/g, '');

    console.log('Amazon price text:', stripped);

    const regex = /Price:\$(\d*.\d*)/;
    const priceText = stripped.match(regex)[1];
    return parseFloat(priceText);

  } catch (err) {
    console.log('error getting price', err);
    return null;
  }
};

export default getProductPrice;
