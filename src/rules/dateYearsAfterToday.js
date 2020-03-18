/* eslint-disable prefer-const */
// @ts-ignore
const moment = require('moment');
const { dateFormats } = require('../lib/date');

module.exports = async function dateYearsAfterToday(field, value, days) {
    let mAfterDate; let
        mDate;

    mAfterDate = moment().add(days, 'years');
    mDate = moment(value, dateFormats);

    /* istanbul ignore next */
    if (!mAfterDate.isValid() || !mDate.isValid() || mAfterDate.valueOf() > mDate.valueOf()) {
        return false;
    }

    return true;
};
