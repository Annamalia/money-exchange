
module.exports = function makeExchange(currency) {
    let money = currency;
  if (currency <= 0) {
    return {};
  }
  if (money >= 10000) {
    return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
  }

  const result = {};
  const half = {
    value: 50,
    sign: 'H',
  };
  const quarter = {
    value: 25,
    sign: 'Q',
  };
  const dime = {
    value: 10,
    sign: 'D',
  };
  const nickel = {
    value: 5,
    sign: 'N',
  };
  const pennie = {
    value: 1,
    sign: 'P',
  };

  if (money >= half.value) {
    result[half.sign] = Math.floor(money/half.value);
    money %= half.value;
  }
  if (money >= quarter.value) {
    result[quarter.sign] = Math.floor(money/quarter.value);
    money %= quarter.value;
  }
  if (money >= dime.value) {
    result[dime.sign] = Math.floor(money/dime.value);
    money %= dime.value;
  }
  if (money >= nickel.value) {
    result[nickel.sign] = Math.floor(money/nickel.value);
    money %= nickel.value;
  }
  if (money > 0) {
    result[pennie.sign] = money;
  }
  return result;
}
