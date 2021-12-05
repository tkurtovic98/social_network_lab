function makeStruct(names) {
  var names = names.split(" ");
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}

module.exports = { makeStruct };
