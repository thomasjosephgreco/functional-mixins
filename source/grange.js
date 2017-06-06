export function* grange (start, end, transform, options) {
  // Polymorphism to find out if a function has been passed into grange() as an arg
  const shouldTransform = typeof transform === 'function';

  // If shouldTransform === false, then the options object will assume the role of transform
  if (!shouldTransform) options = transform;

  // fabulous descructuring for our options object
  const {
    step = 1,
    loop
  } = options || {};

  // decrement case
  // if the start val > end val ==> decrement by step amt (1)
  if (start > end) {
    for (let i = start; i >= end; i -= step) {
    yield shouldTransform ? transform(i) : i;
    if (i <= end && loop === true) i = start + step;
  }
    return;
  }

  for (let i = start; i <= end; i += step) {
    yield shouldTransform ? transform(i) : i;
    // Iterator protocol
    //   * see if .next() has reached { value: Done }
    //   * if it has not && loop is set true, keep iterating
    if (i >= end && loop === true) i = start - step;
  }
}
