
function updateObject(...args) {
  const index = args[0];
  const replaceWith = args[1];
  const list = [...args[2]];
  const deleteCount = 1;
  list.splice(index, deleteCount, replaceWith);
  return list;
}

export {
  updateObject,
};
