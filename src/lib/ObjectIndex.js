// @ts-nocheck
/* eslint-disable no-use-before-define */
/**
 * return the value of the object for the given index
 * @param {any} object
 * @param {Number} index
 * @returns {boolean}
 */

// obj,'1.2.3' -> multiIndex(obj,['1','2','3'])
function pathIndex(obj, is) {
    return multiIndex(obj, is.split('.'));
}

// obj,['1','2','3'] -> ((obj['1'])['2'])['3']
function multiIndex(obj, is) {
    return is.length ? multiIndex(obj[is[0]], is.slice(1)) : obj;
}
module.exports = { pathIndex, multiIndex };
