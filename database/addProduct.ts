import getProductCollection from './getProductCollection';

const addProduct = async (
  name: string,
  url: string,
  targetPrice: string,
  price: number
) => {
  const collection = await getProductCollection();
  collection.insert({
    nickname: name,
    url,
    targetPrice: parseFloat(targetPrice),
    price,
  });
};

export default addProduct;
