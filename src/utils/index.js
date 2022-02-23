function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function mergeRefs(...refs) {
  const filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return (inst) => {
    for (const ref of filteredRefs) {
      if (typeof ref === 'function') {
        ref(inst);
      } else if (ref) {
        ref.current = inst;
      }
    }
  };
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

export { classNames, mergeRefs, throttle };
