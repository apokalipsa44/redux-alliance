const createClaim = (name, amountOfMoney) => {
  return {
    type: "CLAIM_FORM",
    payload: {
      name: name,
      amountOfMoney: amountOfMoney,
    },
  };
};
