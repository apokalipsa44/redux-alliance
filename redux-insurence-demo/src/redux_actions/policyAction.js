const createPolicy = (name) => {
  return {
    type: "POLICY_FORM",
    payload: {
      name: name,
      amount: 20,
    },
  };
};
