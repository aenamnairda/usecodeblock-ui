"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ExplainThisCodeClient", {
  enumerable: true,
  get: function get() {
    return _apiService.ExplainThisCodeClient;
  }
});
Object.defineProperty(exports, "ExplainThisCodeUI", {
  enumerable: true,
  get: function get() {
    return _explainthiscode.ExplainThisCodeUI;
  }
});
exports["default"] = void 0;
var _apiService = require("./services/api-service");
var _explainthiscode = require("./components/explainthiscode");
var _default = exports["default"] = {
  ExplainThisCodeClient: _apiService.ExplainThisCodeClient,
  ExplainThisCodeUI: _explainthiscode.ExplainThisCodeUI
};