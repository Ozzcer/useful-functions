// Takes a dictionary of strings in format [["key1","value1"],...,["keyN","valueN"]] and creates a constant not editable dictionary 
function createConstantPrimitivesDictionary(dictionaryItems) {
  const constantPrimitivesDictionary = {};
  if (dictionaryItems.length > 0) {
    for (let i = 0; i < dictionaryItems.length; i++) {
      let dictionaryItem = dictionaryItems[i];
      if (dictionaryItem.length == 2) {
        let dictionaryElementName = dictionaryItem[0];
        let dictionaryElementValue = dictionaryItem[1];

        if (
          typeof dictionaryElementName == "string" &&
          typeof dictionaryElementValue == "string"
        ) {
          try {
            Object.defineProperty(
              constantPrimitivesDictionary,
              dictionaryElementName,
              {
                value: dictionaryElementValue,
                writable: false,
              }
            );
          } catch (error) {
            throw error;
          }
        } else {
          throw new TypeError(
            "Dictionary item elements must be string literals"
          );
        }
      } else {
        throw new RangeError(
          "Dictionary Items Array Element Requires Length == 2"
        );
      }
    }
  } else {
    throw new RangeError("Dictionary Items Array Requires Length > 0");
  }
  try {
  } catch (error) {
    throw "Error with createConstantDictionary function";
  }
  return constantPrimitivesDictionary;
}
