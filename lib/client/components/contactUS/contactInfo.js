'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrapSweetalert = require('react-bootstrap-sweetalert');

var _reactBootstrapSweetalert2 = _interopRequireDefault(_reactBootstrapSweetalert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUsInfo = function (_Component) {
  _inherits(ContactUsInfo, _Component);

  function ContactUsInfo(props) {
    _classCallCheck(this, ContactUsInfo);

    var _this = _possibleConstructorReturn(this, (ContactUsInfo.__proto__ || Object.getPrototypeOf(ContactUsInfo)).call(this, props));

    _this.loadWindow = function () {
      window.location.pathname = '/contactus';
    };

    _this.submit = function (e) {
      var _data;

      e.preventDefault();
      var data = (_data = {}, _defineProperty(_data, e.target[0].name, e.target[0].value), _defineProperty(_data, e.target[1].name, e.target[1].value), _defineProperty(_data, e.target[2].name, e.target[2].value), _defineProperty(_data, e.target[3].name, e.target[3].value), _defineProperty(_data, e.target[4].name, e.target[4].value), _defineProperty(_data, e.target[5].name, e.target[5].value), _defineProperty(_data, e.target[6].name, e.target[6].value), _data);
      if ((data.Fname || data.Phnum || data.FaceLink || data.Lname || data.email || data.InstaLink || data.messasge).trim() === '') {
        _this.setState({ send: 'err' });
      } else {
        fetch('/api/v1/contactUs', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "credentials": "same-origin"
          },
          body: JSON.stringify(data)
        }).then(function (res) {
          _this.setState({ send: 'success' });
        }).catch(function (error) {
          console.error('Fetch Error =\n', error);
          _this.setState({ err: error });
        });
      }
    };

    _this.state = {
      err: '',
      send: ''
    };
    return _this;
  }

  _createClass(ContactUsInfo, [{
    key: 'render',
    value: function render() {
      console.log(this.state, 'this.state.');
      return _react2.default.createElement(
        'form',
        { onSubmit: this.submit },
        _react2.default.createElement(
          'div',
          { className: 'contactUs-content' },
          _react2.default.createElement(
            'div',
            { className: 'content-raightSection' },
            _react2.default.createElement(
              'div',
              { className: 'right-input' },
              _react2.default.createElement(
                'h1',
                { style: { color: '#475669', fontSize: '24px', fontWeight: '700', paddingTop: '10px' } },
                '\u0623\u0631\u0633\u0644 \u0644\u0646\u0627 \u062A\u0639\u0644\u064A\u0642'
              ),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u0648\u0644'
              ),
              _react2.default.createElement('input', { name: 'Fname', type: 'text', placeholder: '\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0625\u0633\u0645\u0643 \u0627\u0644\u0623\u0648\u0644', className: 'contactUs-input' }),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0627\u0644\u0645\u062D\u0645\u0648\u0644'
              ),
              _react2.default.createElement('input', { name: 'Phnum', type: 'text', placeholder: '\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0631\u0642\u0645\u0643 \u0635\u062D\u064A\u062D\u0627\u064B \u0644\u062A\u0633\u0647\u064A\u0644 \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643', className: 'contactUs-input' }),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 \u0641\u064A\u0633 \u0628\u0648\u0643'
              ),
              _react2.default.createElement('input', { name: 'FaceLink', type: 'url', placeholder: 'facebook.com/example', className: 'contactUs-input' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'left-input' },
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0627\u0644\u0625\u0633\u0645 \u0627\u0644\u0623\u062E\u064A\u0631'
              ),
              _react2.default.createElement('input', { name: 'Lname', type: 'text', placeholder: '\u064A\u0631\u062C\u0649 \u0643\u062A\u0627\u0628\u0629 \u0625\u0633\u0645\u0643 \u0627\u0644\u0627\u062E\u064A\u0631 (\u0627\u0644\u0639\u0627\u0626\u0644\u0629)', className: 'contactUs-input' }),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A'
              ),
              _react2.default.createElement('input', { name: 'email', type: 'email', placeholder: 'name@domain.com', className: 'contactUs-input' }),
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u062D\u0633\u0627\u0628\u0643 \u0639\u0644\u0649 \u0625\u0646\u0633\u062A\u0627\u062C\u0631\u0627\u0645'
              ),
              _react2.default.createElement('input', { name: 'InstaLink', type: 'url', placeholder: 'instagram.com/example', className: 'contactUs-input' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'battom-input' },
              _react2.default.createElement(
                'label',
                { className: 'contactUs-label' },
                '\u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629'
              ),
              _react2.default.createElement('textarea', { name: 'messasge', className: 'contactUs-textarea' }),
              _react2.default.createElement(
                'button',
                { type: 'submit', className: 'sendComment' },
                '\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'content-leftSection' },
            _react2.default.createElement(
              'h1',
              { style: { color: '#475669', fontSize: '24px', fontWeight: '700', paddingTop: '10px' } },
              '\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0625\u062A\u0635\u0627\u0644'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                { style: { display: 'flex', justifyContent: 'space-around', width: '100px', color: '#8492a6' } },
                _react2.default.createElement('img', { src: './assets/markerImg.png' }),
                '    \u0627\u0644\u0639\u0646\u0648\u0627\u0646'
              ),
              _react2.default.createElement(
                'h4',
                { style: { color: '#475669' } },
                '234 \u0634\u0627\u0631\u0639 \u0641\u0644\u0627\u0646 \u0627\u0644\u0641\u0644\u0627\u0646\u064A \u0627\u0644\u062D\u064A \u0627\u0644\u0631\u0626\u064A\u0633\u064A \u0627\u0644\u0645\u062F\u064A\u0646\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                { style: { display: 'flex', justifyContent: 'space-around', width: '117px', color: '#8492a6' } },
                _react2.default.createElement('img', { src: './assets/phone.png' }),
                ' \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641'
              ),
              _react2.default.createElement(
                'h4',
                { style: { color: '#475669' } },
                '00970599123456'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                { style: { display: 'flex', justifyContent: 'space-around', width: '148px', color: '#8492a6' } },
                _react2.default.createElement('img', { src: './assets/email.png' }),
                ' \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A'
              ),
              _react2.default.createElement(
                'h4',
                { style: { color: '#475669' } },
                'info@nabalifares.ps'
              )
            ),
            _react2.default.createElement(
              'div',
              { style: { width: '325px' } },
              _react2.default.createElement(
                'h4',
                { style: { display: 'flex', justifyContent: 'space-around', width: '184px', color: '#8492a6' } },
                _react2.default.createElement('img', { src: './assets/clock.png' }),
                ' \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u062F\u0648\u0627\u0645 \u0627\u0644\u0631\u0633\u0645\u064A'
              ),
              _react2.default.createElement(
                'h4',
                { style: { color: '#475669' } },
                '\u064A\u0648\u0645\u064A\u0627\u064B \u0639\u062F \u0627\u0644\u062C\u0645\u0639\u0629 \u0648\u0627\u0644\u0633\u0628\u062A \u0645\u0646 \u0627\u0644\u0633\u0627\u0639\u0629 9 \u0635\u0628\u0627\u062D\u0627\u064B \u0648\u062D\u062A\u0649 \u0627\u0644\u0633\u0627\u0639\u0629 5 \u0645\u0633\u0627\u0621\u064B \u0648\u0627\u0644\u0639\u0637\u0644 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0641\u064A \u0627\u0644\u0628\u0644\u0627\u062F'
              )
            )
          )
        ),
        this.state.send === 'success' ? _react2.default.createElement(_reactBootstrapSweetalert2.default, {
          success: true,
          title: '\u062A\u0645 \u0627\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643 \u0628\u0646\u062C\u0627\u062D ',
          onConfirm: this.hideAlert }) : this.state.send === 'err' ? _react2.default.createElement(_reactBootstrapSweetalert2.default, {
          warning: true,
          title: '\u0625\u0645\u0644\u0623 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644',
          confirmBtnBsStyle: 'danger',
          cancelBtnBsStyle: 'default' }) : _react2.default.createElement('div', null)
      );
    }
  }]);

  return ContactUsInfo;
}(_react.Component);

exports.default = ContactUsInfo;