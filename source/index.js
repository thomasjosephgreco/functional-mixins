export const flying = o => {
  let isFlying = false;
  const instance = Object.assign({}, o, {
    fly: () => {
      isFlying = true;
      return instance;
    },
    land: () => {
      isFlying = false;
      return instance;
    },
    isFlying: () => isFlying,
  });
  return instance;
};
