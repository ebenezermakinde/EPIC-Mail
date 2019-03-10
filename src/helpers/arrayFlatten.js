// eslint-disable-next-line import/prefer-default-export
export const arrayFlatten = (message) => {
  let newArr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < message.length; i++) {
    if (Array.isArray(message[i])) {
      newArr = newArr.concat(arrayFlatten(message[i]));
    } else {
      newArr.push(message[i]);
    }
    newArr.forEach((args, index) => {
      // eslint-disable-next-line no-param-reassign
      args.id = index + 1;
    });
  }
  return newArr;
};
