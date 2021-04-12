class MyArray {
  constructor() {
    this.length = 0;
    this.push(...arguments)
  }
  static isMyArray(item) {
    return item instanceof MyArray;
  };
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };
  pop() {
    if (this.length === 0) return;
    const lastValue = this[this.length - 1];
    delete this[--this.length];
    return lastValue;
  };
  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };
  unshift(...params) {
    if (this.length === 0) {
      this.push(...params);
      return this.length;
    }
    for (i = this.length - 1; i >= 0; i--) {
      this[i + params.length] = this[i];
    }
    for (let i = 0; i < params.length; i++) {
      this[i] = params[i]
    };
    return this.length += params.length;
  };
  shift() {
    if (this.length === 0) return;
    const result = this[0];
    delete this[0];
    this.length--;
    this.forEach((elem, i, arr) => {
      arr[i] = arr[i + 1];
    });
    delete this[this.length];
    return result;
  };
  concat(...params) {
    let newMyArray = new MyArray();
    this.forEach((elem) => {
      newMyArray.push(elem)
    });
    for (let i = 0; i < params.length; i++) {
      if (!params[i].length) {
        newMyArray.push(params[i]);
        continue;
      }
      for (let k = 0; k < params[i].length; k++) {
        newMyArray.push(params[i][k]);
      }
    };
    return newMyArray;
  };
  reverse() {
    if (this.length <= 1) return this;
    let newArray = [];
    this.forEach((elem) => {
      newArray.push(elem)
    });
    this.forEach((elem, i, arr) => {
      arr[arr.length - i - 1] = newArray[i];
    });
    return this;
  };
  map(cb) {
    let newArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      newArray.push(cb(this[i], i, this));
    }
    return newArray;
  };
  some(cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };
  every(cb) {
    for (let i = 0; i < this.length; i++) {
      if (!cb(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };
  filter(cb) {
    const newMyArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (!cb(this[i], i, this)) {
        newMyArray.push(this[i]);
      }
    }
    return newMyArray;
  };
}


function square(num) {
  let result = num * num;
  return result;
}