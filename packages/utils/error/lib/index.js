'use strict';

const validateError = (err) => {
  if (err) {
    if (err.Message) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject(`${err.Message} ${err.Detail ? err.Detail : ''}`);
    }
    reject(err);
  } else {
    resolve();
  }
}

module.exports = validateError;