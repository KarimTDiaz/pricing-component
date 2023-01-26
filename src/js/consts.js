const SUBSCRIPTION__OPTIONS = {
  monthly: {
    basic: {
      price: '$19.99',
      storage: 500,
      users: 2,
      sendUp: 3
    },
    professional: {
      price: '$24.99',
      storage: 1,
      users: 5,
      sendUp: 10
    },
    master: {
      price: '$39.99',
      storage: 2,
      users: 10,
      sendUp: 20
    }
  },
  annualy: {
    basic: {
      price: '$199.99',
      storage: 500,
      users: 15,
      sendUp: 6
    },
    professional: {
      price: '$249.99',
      storage: 1,
      users: 25,
      sendUp: 20
    },
    master: {
      price: '$399.99',
      storage: 2,
      users: 35,
      sendUp: 30
    }
  }
};

export { SUBSCRIPTION__OPTIONS };
