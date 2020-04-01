"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

/**
 * trim filter
 * @param {string} value
 * @returns {Promise.<string>}
 */
module.exports = /*#__PURE__*/function () {
  var _trim = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(value) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", value.trim());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  function trim(_x) {
    return _trim.apply(this, arguments);
  }

  return trim;
}();