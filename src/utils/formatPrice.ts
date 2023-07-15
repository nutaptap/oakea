export const formatPrice = (price: number, currency: string = "€") => {
  const formattedPrice = price.toFixed(2);
  return `${currency} ${formattedPrice}`;
};
