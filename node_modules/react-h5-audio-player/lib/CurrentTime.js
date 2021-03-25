"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _utils = require("./utils");

var CurrentTime = function (_PureComponent) {
  (0, _inheritsLoose2.default)(CurrentTime, _PureComponent);

  function CurrentTime(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "audio", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "hasAddedAudioEventListener", false);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      currentTime: _this.props.defaultCurrentTime
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleAudioCurrentTimeChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          isLeftTime = _this$props.isLeftTime,
          timeFormat = _this$props.timeFormat,
          defaultCurrentTime = _this$props.defaultCurrentTime;

      _this.setState({
        currentTime: (0, _utils.getDisplayTimeBySeconds)(isLeftTime ? audio.duration - audio.currentTime : audio.currentTime, audio.duration, timeFormat) || defaultCurrentTime
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "addAudioEventListeners", function () {
      var audio = _this.props.audio;

      if (audio && !_this.hasAddedAudioEventListener) {
        _this.audio = audio;
        _this.hasAddedAudioEventListener = true;
        audio.addEventListener('timeupdate', _this.handleAudioCurrentTimeChange);
        audio.addEventListener('loadedmetadata', _this.handleAudioCurrentTimeChange);
      }
    });
    var _audio = props.audio,
        _defaultCurrentTime = props.defaultCurrentTime,
        _isLeftTime = props.isLeftTime,
        _timeFormat = props.timeFormat;
    var currentTime = _defaultCurrentTime;

    if (_audio) {
      currentTime = (0, _utils.getDisplayTimeBySeconds)(_isLeftTime ? _audio.duration - _audio.currentTime : _audio.currentTime, _audio.duration, _timeFormat);
    }

    _this.state = {
      currentTime: currentTime
    };
    return _this;
  }

  var _proto = CurrentTime.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.addAudioEventListeners();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.addAudioEventListeners();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.audio && this.hasAddedAudioEventListener) {
      this.audio.removeEventListener('timeupdate', this.handleAudioCurrentTimeChange);
      this.audio.removeEventListener('loadedmetadata', this.handleAudioCurrentTimeChange);
    }
  };

  _proto.render = function render() {
    return this.state.currentTime;
  };

  return CurrentTime;
}(_react.PureComponent);

var _default = CurrentTime;
exports.default = _default;