export const calcPercentSaved = (price, listPrice) => {
    if(price && listPrice) {
      let amountSaved = (listPrice - price).toFixed(2);
      let percentSaved = 100 - (100 * price  / listPrice);
      return `Save $${amountSaved} (${percentSaved.toFixed(0)}%)`
    }
    return null;
  }