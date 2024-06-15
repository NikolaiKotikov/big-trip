import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

/**
 *
 * @param {string} date
 * @return {string}
 */

export function getFullYear(date) {
  return dayjs(date).format('YYYY');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getShortYear(date) {
  return dayjs(date).format('YY');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getMonthName(date) {
  return dayjs(date).format('MMM');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getMonthNumber(date) {
  return dayjs(date).format('MM');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getDay(date) {
  return dayjs(date).format('DD');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getHours(date) {
  return dayjs(date).format('HH');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getMinutes(date) {
  return dayjs(date).format('mm');
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getMachineDate(date) {
  return `${getFullYear(date)}-${getMonthNumber(date)}-${getDay(date)}`;
}

/**
 *
 * @param {string} date
 * @return {string}
 */
export function getMachineDateWithTime(date) {
  return `${getMachineDate(date)}T${getHours(date)}:${getMinutes(date)}`;
}


/**
 * Calculates the duration between two dates.
 *
 * @param {string} startDate - The start date in ISO 8601 format.
 * @param {string} endDate - The end date in ISO 8601 format.
 * @return {string} The duration in the format "DD HH:MM" if the duration is more than a day,
 *                  "HH:MM" if the duration is more than an hour, and "MM" if the duration is less than an hour.
 *                  Returns an empty string if either startDate or endDate is falsy.
 */
export function getDuration(startDate, endDate) {
  if (!startDate || !endDate) {
    return '';
  }

  const startTime = dayjs(startDate);
  const endTime = dayjs(endDate);

  const diffDuration = dayjs.duration(endTime.diff(startTime));

  const days = `${Math.floor(diffDuration.asDays()).toString().padStart(2, '0')}D`;
  const hours = `${diffDuration.hours().toString().padStart(2, '0')}H`;
  const minutes = `${diffDuration.minutes().toString().padStart(2, '0')}M`;

  if (diffDuration.asDays() >= 1) {
    return `${days} ${hours} ${minutes}`;
  }

  if (diffDuration.asHours() >= 1) {
    return `${hours} ${minutes}`;
  }

  return minutes;
}
