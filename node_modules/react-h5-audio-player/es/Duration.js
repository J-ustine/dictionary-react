import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import { PureComponent } from 'react';
import { getDisplayTimeBySeconds } from './utils';

var Duration = function (_PureComponent) {
  _inheritsLoose(Duration, _PureComponent);

  function Duration(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "audio", void 0);

    _defineProperty(_assertThisInitialized(_this), "hasAddedAudioEventListener", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      duration: _this.props.audio ? getDisplayTimeBySeconds(_this.props.audio.duration, _this.props.audio.duration, _this.props.timeFormat) : _this.props.defaultDuration
    });

    _defineProperty(_assertThisInitialized(_this), "handleAudioDurationChange", function (e) {
      var audio = e.target;
      var _this$props = _this.props,
          timeFormat = _this$props.timeFormat,
          defaultDuration = _this$props.defaultDuration;

      _this.setState({
        duration: getDisplayTimeBySeconds(audio.duration, audio.duration, timeFormat) || defaultDuration
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAudioEventListeners", function () {
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
      duration: _audio ? getDisplayTimeBySeconds(_audio.duration, _audio.duration, _timeFormat) : _defaultDuration
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
}(PureComponent);

export default Duration;