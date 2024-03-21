/**
 * Returns time since the given time
 * @param {String} time - timestamp
 * @returns {String} formatted time
 */

export const timeSince = (time) => {
  const currentDate = new Date();
  const givenDate = new Date(time);
  const seconds = Math.floor((currentDate - givenDate) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years ago';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months ago';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days ago';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours ago';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' mins ago';
  }
  return Math.floor(seconds) + ' sec ago';
};

export const convertToK = (value) => {
  if (value >= 1000000) {
    value = value / 1000000 + 'M';
  } else if (value >= 1000) {
    value = value / 1000 + 'K';
  }
  return value;
};
