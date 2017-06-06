const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

export const flying = o => {
  let isFlying = false;
  return Object.assign({}, o, {
    fly () {
      isFlying = true;
      return this;
    },
    land () {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying,
  });
};

const quacking = quack => o => Object.assign({}, o, {
  quack: () => quack
});

export const createDuck = quack => pipe(flying, quacking(quack))({});
