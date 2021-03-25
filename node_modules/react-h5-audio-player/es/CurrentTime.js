import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import { getDisplayTimeBySeconds } from './utils';

var CurrentTime = function (_PureComponent) {
  _inheritsLoose(CurrentTime, _PureComponent);

  function CurrentTime(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "audio", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasAddedAudioEventListener", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      currentTime: _this.props.defaultCurrentTime
    });

    _defineProperty(_assertThisInitialized(_this), "handleAudioCurrentTimeChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          isLeftTime = _this$props.isLeftTime,
          timeFormat = _this$props.timeFormat,
          defaultCurrentTime = _this$props.defaultCurrentTime;

      _this.setState({
        currentTime: getDisplayTimeBySeconds(isLeftTime ? audio.duration - audio.currentTime : audio.currentTime, audio.duration, timeFormat) || defaultCurrentTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAudioEventListeners", function () {
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
      currentTime = getDisplayTimeBySeconds(_isLeftTime ? _audio.duration - _audio.currentTime : _audio.currentTime, _audio.duration, _timeFormat);
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
}(PureComponent);

export default CurrentTime;