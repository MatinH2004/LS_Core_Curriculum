function myBind(func, context) {
  return function (...args) {
    return func.apply(context, args);
  }
}

// improved

const myBind = function myBind(func, context, ...args) {
  return function() {
    return func.apply(context, [...args, ...arguments]);
  };
};