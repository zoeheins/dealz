// DB representation of Product model
export type DBProduct = {
  _id: string;
  url: string;
  nickname: string;
  price?: number;  // should be float
  targetPrice: number;  // should be float
};
