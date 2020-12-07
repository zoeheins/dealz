import getProductPrices from '../../services/getProductPrices';

const handler = async (req, res) => {
  try {
    await getProductPrices();
    res.send(200);
  } catch (err) {
    console.log('Error getting products prices:', err);
    res.send(500);
  }
};

export default handler;
