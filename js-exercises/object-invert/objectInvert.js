
function objectInvert(...args) {
  const inputObject = args[0];
  const invertedObject = {};
  for (const [key, value] of Object.entries(inputObject)) {
    if (Object.prototype.hasOwnProperty.call(inputObject, key)) invertedObject[value] = key;
  }
  return invertedObject;
}

export {
  objectInvert,
};
