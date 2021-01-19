const deepCopyObject = objToCopy => {
  if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

  const deepCopyOfObject = Array.isArray(objToCopy) ? [] : {};

  // copy all properties
  for (const propertyName of Object.getOwnPropertyNames(objToCopy)) {
    deepCopyOfObject[propertyName] = deepCopyObject(objToCopy[propertyName]);
  }

  // copy symbol
  for (const propertySymbol of Object.getOwnPropertySymbols(objToCopy)) {
    deepCopyOfObject[propertySymbol] = deepCopyObject(objToCopy[propertySymbol]);
  }

  return deepCopyOfObject;
};

export { deepCopyObject };
