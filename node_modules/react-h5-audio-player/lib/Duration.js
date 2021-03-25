"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _utils = require("./utils");

var Duration = function (_PureComponent) {
  (0, _inheritsLoose2.default)(Duration, _PureComponent);

  function Duration(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "audio", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasAddedAudioEventListener", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      duration: _this.props.audio ? (0, _utils.getDisplayTimeBySeconds)(_this.props.audio.duration, _this.props.audio.duration, _this.props.timeFormat) : _this.props.defaultDuration
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioDurationChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          timeFormat = _this$props.timeFormat,
          defaultDuration = _this$props.defaultDuration;

      _this.setState({
        duration: (0, _utils.getDisplayTimeBySeconds)(audio.duration, audio.duration, timeFormat) || defaultDuration
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addAudioEventListeners", function () {
      var audio = _this.props.audio;

      if (audio && !_this.hasAddedAudioEventListener) {
        _this.audio = audio;
        _this.hasAddedAudioEventListener = true;
        audio.addEventListener('durationchange', _this.handleAudioDurationChange);
        audio.addEventListener('abort', _this.handleAudioDurationChange);
      }
    });
    var _audio = props.audio,
        _timeFormat = props.timeFormat,
        _defaultDuration = props.defaultDuration;
    _this.state = {
      duration: _audio ? (0, _utils.getDisplayTimeBySeconds)(_audio.duration, _audio.duration, _timeFormat) : _defaultDuration
    };
    return _this;
  }

  var _proto = Duration.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.addAudioEventListeners();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.addAudioEventListeners();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.audio && this.hasAddedAudioEventListener) {
      this.audio.removeEventListener('durationchange', this.handleAudioDurationChange);
      this.audio.removeEventListener('abort', this.handleAudioDurationChange);
    }
  };

  _proto.render = function render() {
    return this.state.duration;
  };

  return Duration;
}(_react.PureComponent);

var _default = Duration;
exports.default = _default;