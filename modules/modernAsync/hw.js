'use strict';

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, ms);
  });
}

function delayReject(ms) {
  return new Promise((_, reject) => {
    setTimeout(reject, ms, ms);
  });
}

function race(promises) {
  if (!Array.isArray(promises)) {
    return Promise.reject(new Error('First argument must be an array'));
  }

  if (!promises.length) {
    return Promise.resolve(null);
  }

  const { resolve, promise } = Promise.withResolvers();

  promises.forEach((prom) => {
    prom.then(resolve).catch(resolve);
  });

  return promise;
}

const result = await race([
  delayReject(1000),
  delay(2000),
  delayReject(3000),
  delay(4000),
  delayReject(5000),
]);

console.log(result);
