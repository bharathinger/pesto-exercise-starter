
function objectInvert(...args) {
  const inputObject = args[0];
  const invertedObject = {};
  for (const [key, value] of Object.entries(inputObject)) {
    invertedObject[value] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
