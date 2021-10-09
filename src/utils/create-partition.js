const createPartition = (array, countOfItems = 8) => {
  const copiedArray = [...array];
  const newArray = [];

  while (copiedArray.length) {
    const items = copiedArray.slice(0, countOfItems);
    newArray.push(items);
    copiedArray.splice(0, countOfItems);
  }

  return newArray;
};

export default createPartition;
