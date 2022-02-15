function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function throttle(fn, rate = 250, scope) {
  var timer = null;
  var last = null;
  return function () {
    var context = scope || this;
    var args = arguments;

    if (!last) {
      last = Date.now();
      fn.apply(context, args);
    } else if (Date.now() - last > rate) {
      last = Date.now();
      fn.apply(context, args);
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = Date.now();
        fn.apply(context, args);
      }, rate);
    }
  };
}

export { classNames, throttle };
