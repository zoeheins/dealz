import cheerio from 'cheerio'

const getProductPrice = async (url) => {
  const res = await fetch(url)
  const $ = cheerio.load(await res.text());
  const priceText = $('#priceblock_ourprice').text();
  return parseFloat(priceText.replace('$', ''))
};

export default getProductPrice;
