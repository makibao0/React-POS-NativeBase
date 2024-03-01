import numeral from 'numeral';

// numeral.locale('id');

export const formattedCurrency = number => {
  return numeral(parseFloat(number)).format('0,0.[0000]');
};
