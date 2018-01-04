/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USER = exports.FETCH_USER = 'FETCH_USER';
var FETCH_SURVEYS = exports.FETCH_SURVEYS = 'FETCH_SURVEYS';

// api is the customized axios instance passed in by redux-thunk
var fetchUser = exports.fetchUser = function fetchUser() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return api.get('/api/current_user');

            case 2:
              res = _context.sent;

              dispatch({ type: FETCH_USER, payload: res.data });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

var handleToken = exports.handleToken = function handleToken(token) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return api.post('/api/stripe', token);

            case 2:
              res = _context2.sent;

              dispatch({ type: FETCH_USER, payload: res.data });

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var submitSurvey = exports.submitSurvey = function submitSurvey(values, history) {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return api.post('/api/surveys', values);

            case 2:
              res = _context3.sent;

              history.push('/surveys');
              dispatch({ type: FETCH_USER, payload: res.data });

            case 5:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }();
};

var fetchSurvey = exports.fetchSurvey = function fetchSurvey() {
  return function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return api.get('/api/surveys');

            case 2:
              res = _context4.sent;

              dispatch({ type: FETCH_SURVEYS, payload: res.data });

            case 4:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function (_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import { Route } from 'react-router-dom';


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(14);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(18);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _NotFoundPage = __webpack_require__(19);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _SurveysPage = __webpack_require__(20);

var _SurveysPage2 = _interopRequireDefault(_SurveysPage);

var _SurveyNew = __webpack_require__(22);

var _SurveyNew2 = _interopRequireDefault(_SurveyNew);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Traditional react router setup:
 * but react-router has to render the entire app
 * to figure out which component to show
 *
 *export default () => {
 *  return (
 *    <div>
 *      <Route exact path='/' component={ Home } />
 *      <Route exact path='/users' component={ UsersList } />
 *    </div>
 *  );
 *};
*/

// instead we use a javascript object to represent routing config
exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _SurveysPage2.default, {
    path: '/surveys',
    exact: true
  }), _extends({}, _SurveyNew2.default, {
    path: '/surveys/new',
    exact: true
  }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{ label: 'Survey Title', name: 'title' }, { label: 'Subject Line', name: 'subject' }, { label: 'Email Body', name: 'body' }, { label: 'Recipient List', name: 'recipients' }];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _expressHttpProxy = __webpack_require__(13);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(28);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(31);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// setup proxy
// send any request for /api to api server
// app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
app.use('/api', (0, _expressHttpProxy2.default)('http://localhost:5000', {
  // for handling google oauth flow
  // proxyReqOptDecorator(opts) {
  //   opts.headers['x-forwarded-host'] = 'localhost:3000';
  //   return opts;
  // }
}));

// serving the public folder for any file request
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  // Load data into the store before render application
  // use matchRoutes to find out what component to show
  // and more importantly what data to fetch and return an array of promises
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  })
  // wrap the promise generated by the loadData function call
  // with a new promise, so each promise will for sure be resolved
  // and Promise.all will for sure succeed
  .map(function (promise) {
    if (promise) {
      // this way the successful data fetching will be resolved properly
      // the unsuccessful data fetching will also be resolved
      // and proceed to the server side rendering
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  // wait for all data requests to finish then render
  Promise.all(promises).then(function () {
    // this context is used for react staticRouter
    // to pass it down to all components rendered by staticRouter
    var context = {};

    // generate the content to be sent to the brower
    var content = (0, _renderer2.default)(req, store, context);

    // when a <Redirect /> is rendered,
    // the url property will be set on the context object
    if (context.url) {
      // if url property exist, redirect the req to the url
      return res.redirect(301, context.url);
    }

    // in notFoundPage we modify the context object
    // by setting the notFound property to true
    if (context.notFound) {
      // so if notFound is true, set status code to 404
      res.status(404);
    }

    // finally send the content with appropriate status code
    res.send(content);
  });

  /*
   * insert a catch statement for error handling
   * but this approach will stop the entire server side rendering
   *
   * even if we try to run renderer in the catch state
   * it is still not ideal because if any data fetching went wrong
   * all the success data fetching get ignored
   *
   * .catch(() => {
   *   res.send('Something went wrong');
   * });
   */
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      (0, _reactRouterConfig.renderRoutes)(route.routes)
    )
  );
};

exports.default = {
  component: App,
  loadData: function loadData(_ref2) {
    var dispatch = _ref2.dispatch;

    return dispatch((0, _actions.fetchUser)());
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _StripeBilling = __webpack_require__(16);

var _StripeBilling2 = _interopRequireDefault(_StripeBilling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'renderContent',
    value: function renderContent() {
      switch (this.props.auth) {
        case null:
          return;

        case false:
          return _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              { href: '/api/auth/google' },
              'Login With Google'
            )
          );

        default:
          return [_react2.default.createElement(
            'li',
            { key: '1' },
            _react2.default.createElement(_StripeBilling2.default, null)
          ), _react2.default.createElement(
            'li',
            { key: '2', style: { margin: '0 15px' } },
            'Credits: ',
            this.props.auth.credits
          ), _react2.default.createElement(
            'li',
            { key: '3' },
            _react2.default.createElement(
              'a',
              { href: '/api/api/logout' },
              'Logout'
            )
          )];

      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              to: !!this.props.auth ? '/surveys' : '/',
              className: 'left brand-logo'
            },
            '\xA0\xA0\xA0Mini e-commerce site'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'right' },
            this.renderContent()
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return { auth: auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactStripeCheckout = __webpack_require__(17);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StripeBilling = function (_Component) {
  _inherits(StripeBilling, _Component);

  function StripeBilling() {
    _classCallCheck(this, StripeBilling);

    return _possibleConstructorReturn(this, (StripeBilling.__proto__ || Object.getPrototypeOf(StripeBilling)).apply(this, arguments));
  }

  _createClass(StripeBilling, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactStripeCheckout2.default,
        {
          name: 'Mini Ecom Site',
          description: '$5 for 5 credits',
          amount: 500,
          token: this.props.handleToken,
          stripeKey: 'pk_test_f5LmuBs0Fk6yyxSYgn1n0BeI'
        },
        _react2.default.createElement(
          'button',
          { className: 'btn' },
          'Add Credits'
        )
      );
    }
  }]);

  return StripeBilling;
}(_react.Component);

;

exports.default = (0, _reactRedux.connect)(null, actions)(StripeBilling);

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-stripe-checkout");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing() {
  return _react2.default.createElement(
    'div',
    { style: { textAlign: 'center' } },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Ecom Home'
      ),
      _react2.default.createElement('meta', { property: 'og:title', content: 'Ecom Home' })
    ),
    _react2.default.createElement(
      'h1',
      null,
      'Ecom!'
    ),
    'Collect feedback from your users'
  );
};

exports.default = {
  component: Landing
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// staticContext is the context object
var NotFoundPage = function NotFoundPage(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.notFound = true;
  return _react2.default.createElement(
    'h1',
    null,
    'Ooops, route not found.'
  );
};

exports.default = {
  component: NotFoundPage
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactHelmet = __webpack_require__(5);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _SurveyList = __webpack_require__(21);

var _SurveyList2 = _interopRequireDefault(_SurveyList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SurveysPage = function (_Component) {
  _inherits(SurveysPage, _Component);

  function SurveysPage() {
    _classCallCheck(this, SurveysPage);

    return _possibleConstructorReturn(this, (SurveysPage.__proto__ || Object.getPrototypeOf(SurveysPage)).apply(this, arguments));
  }

  _createClass(SurveysPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchSurvey();
    }
  }, {
    key: 'renderHead',
    value: function renderHead() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Survey Dashboard'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Survey Dashboard' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderHead(),
        _react2.default.createElement(_SurveyList2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'fixed-action-btn' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/surveys/new', className: 'btn-floating btn-large red' },
            _react2.default.createElement(
              'i',
              { className: 'large material-icons' },
              'add'
            )
          )
        )
      );
    }
  }]);

  return SurveysPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var surveys = _ref.surveys;
  return { surveys: surveys };
};

// for loading data with server side rendering
var loadData = function loadData(store) {
  // manually dispatch action creator
  return store.dispatch((0, _actions.fetchSurvey)());
};

exports.default = {
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchSurvey: _actions.fetchSurvey })(SurveysPage),
  loadData: loadData
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SurveyList = function (_Component) {
  _inherits(SurveyList, _Component);

  function SurveyList() {
    _classCallCheck(this, SurveyList);

    return _possibleConstructorReturn(this, (SurveyList.__proto__ || Object.getPrototypeOf(SurveyList)).apply(this, arguments));
  }

  _createClass(SurveyList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchSurvey();
    }
  }, {
    key: 'renderSurveys',
    value: function renderSurveys() {
      var surveys = this.props.surveys;

      return surveys.map(function (survey) {
        return _react2.default.createElement(
          'div',
          { key: survey._id, className: 'card darken-1' },
          _react2.default.createElement(
            'div',
            { className: 'card-content' },
            _react2.default.createElement(
              'span',
              { className: 'card-title' },
              survey.title
            ),
            _react2.default.createElement(
              'p',
              null,
              survey.body
            ),
            _react2.default.createElement(
              'p',
              { className: 'right' },
              'Sent On: ',
              survey.dateSent.slice(5, 10).replace('-', '/')
            ),
            _react2.default.createElement(
              'div',
              { className: 'card-action' },
              _react2.default.createElement(
                'a',
                null,
                'Yes: ',
                survey.yes
              ),
              _react2.default.createElement(
                'a',
                null,
                'No: ',
                survey.no
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderSurveys()
      );
    }
  }]);

  return SurveyList;
}(_react.Component);

;

var mapStateToProps = function mapStateToProps(_ref) {
  var surveys = _ref.surveys;
  return { surveys: surveys };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchSurvey: _actions.fetchSurvey })(SurveyList);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(6);

var _SurveyForm = __webpack_require__(23);

var _SurveyForm2 = _interopRequireDefault(_SurveyForm);

var _SurveyFormReview = __webpack_require__(27);

var _SurveyFormReview2 = _interopRequireDefault(_SurveyFormReview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SurveyNew shows SurveyForm and SurveyFormReview


var SurveyNew = function (_Component) {
  _inherits(SurveyNew, _Component);

  function SurveyNew() {
    _classCallCheck(this, SurveyNew);

    var _this = _possibleConstructorReturn(this, (SurveyNew.__proto__ || Object.getPrototypeOf(SurveyNew)).call(this));

    _this.state = { showFormReview: false };
    return _this;
  }

  _createClass(SurveyNew, [{
    key: 'renderContent',
    value: function renderContent() {
      if (this.state.showFormReview) {
        return _react2.default.createElement(_SurveyFormReview2.default, { onCancel: this.toggleReview.bind(this) });
      }

      return _react2.default.createElement(_SurveyForm2.default, { onSurveySubmit: this.toggleReview.bind(this) });
    }
  }, {
    key: 'toggleReview',
    value: function toggleReview() {
      var showFormReview = !this.state.showFormReview;
      this.setState({ showFormReview: showFormReview });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderContent()
      );
    }
  }]);

  return SurveyNew;
}(_react.Component);

;

exports.default = {
  component: (0, _reduxForm.reduxForm)({ form: 'surveyForm' })(SurveyNew)
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(24);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reduxForm = __webpack_require__(6);

var _SurveyField = __webpack_require__(25);

var _SurveyField2 = _interopRequireDefault(_SurveyField);

var _validateEmails = __webpack_require__(26);

var _validateEmails2 = _interopRequireDefault(_validateEmails);

var _formFields = __webpack_require__(8);

var _formFields2 = _interopRequireDefault(_formFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // SurveyForm shows a form for a user to add input


var SurveyForm = function (_Component) {
  _inherits(SurveyForm, _Component);

  function SurveyForm() {
    _classCallCheck(this, SurveyForm);

    return _possibleConstructorReturn(this, (SurveyForm.__proto__ || Object.getPrototypeOf(SurveyForm)).apply(this, arguments));
  }

  _createClass(SurveyForm, [{
    key: 'renderFields',
    value: function renderFields() {
      return _lodash2.default.map(_formFields2.default, function (field) {
        return _react2.default.createElement(_reduxForm.Field, _extends({ key: field.name, component: _SurveyField2.default, type: 'text' }, field));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          onSurveySubmit = _props.onSurveySubmit;

      return _react2.default.createElement(
        'div',
        { style: { marginTop: '30px' } },
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(onSurveySubmit) },
          this.renderFields(),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/surveys', className: 'red btn-flat white-text' },
            'Cancel'
          ),
          _react2.default.createElement(
            'button',
            { className: 'teal btn-flat right white-text', type: 'submit' },
            'Next',
            _react2.default.createElement(
              'i',
              { className: 'material-icons right' },
              'done'
            )
          )
        )
      );
    }
  }]);

  return SurveyForm;
}(_react.Component);

;

var validate = function validate(values) {
  var errors = {};

  errors.recipients = (0, _validateEmails2.default)(values.recipients || '');

  _lodash2.default.each(_formFields2.default, function (_ref) {
    var name = _ref.name,
        label = _ref.label;

    if (!values[name]) errors[name] = label + ' is required';
  });

  return errors;
};

exports.default = (0, _reduxForm.reduxForm)({
  validate: validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // SurveyField contains logic to render a single label and text input


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var input = _ref.input,
      label = _ref.label,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      null,
      label
    ),
    _react2.default.createElement('input', _extends({ style: { marginBottom: '5px' } }, input)),
    _react2.default.createElement(
      'div',
      { className: 'red-text', style: { marginBottom: '20px' } },
      touched && error
    )
  );
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

exports.default = function (emails) {
  var invalidEmails = emails.split(',').map(function (email) {
    return email.trim();
  }).filter(function (email) {
    return !re.test(email);
  });

  if (invalidEmails.length) {
    return 'These emails are invalid: ' + invalidEmails;
  }

  return;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _formFields = __webpack_require__(8);

var _formFields2 = _interopRequireDefault(_formFields);

var _actions = __webpack_require__(1);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SurveyFormReview = function SurveyFormReview(_ref) {
  var onCancel = _ref.onCancel,
      formValues = _ref.formValues,
      submitSurvey = _ref.submitSurvey,
      history = _ref.history;

  var reviewFields = _formFields2.default.map(function (_ref2) {
    var name = _ref2.name,
        label = _ref2.label;
    return _react2.default.createElement(
      'div',
      { key: name },
      _react2.default.createElement(
        'label',
        null,
        label
      ),
      _react2.default.createElement(
        'div',
        null,
        formValues[name]
      )
    );
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h5',
      null,
      'Please confirm you entries'
    ),
    _react2.default.createElement(
      'div',
      null,
      reviewFields
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'yellow darken-3 white-text btn-flat',
        onClick: onCancel
      },
      'Back'
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'green white-text btn-flat right',
        onClick: function onClick() {
          return submitSurvey(formValues, history);
        }
      },
      'Send Survey',
      _react2.default.createElement(
        'i',
        { className: 'material-icons right' },
        'email'
      )
    )
  );
};

// withRouter is helper provided by react-router
// to pass the hisotry object to a component through props
// history object is used to change route => history.push(newRoute)
// SurveyFormReview shows users their form inputs for review


var mapStateToProps = function mapStateToProps(_ref3) {
  var form = _ref3.form;
  return { formValues: form.surveyForm.values };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)((0, _reactRouterDom.withRouter)(SurveyFormReview));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(29);

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(30);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(5);

var _Routes = __webpack_require__(7);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  // use renderToString to create HTML and pass to client
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter
      // location is used to tell react router
      // which route the client is trying to access
      // BrowserRouter can directly read the url in the browser
      // BUT StaticRouter cannot, so we have to pass in location
      ,
      { location: req.path,
        context: context
      },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  // the helmet instance is pulling all tags we loaded into Helmet
  // within react components
  // we can insert all the tags into the head tag manually below
  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n      </head>\n      <body>\n        <div id=\'root\'>' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src=\'bundle.js\'></script>\n      </body>\n    </html>\n  ';
};
// serialize is to handle cross-site-script attack

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxThunk = __webpack_require__(32);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(33);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(34);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
  // create a custom axios instance, so we get different behaviors
  // from the same action creators in browser and client
  // different from client side, we want to include the cookie value in all request
  var axiosInstance = _axios2.default.create({
    // baseURL: 'http://react-ssr-api.herokuapp.com',
    baseURL: 'http://localhost:5000',
    headers: { cookie: req.get('cookie') || '' }
  });

  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

  return store;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(9);

var _reduxForm = __webpack_require__(6);

var _authReducer = __webpack_require__(35);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _surveysReducer = __webpack_require__(36);

var _surveysReducer2 = _interopRequireDefault(_surveysReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  form: _reduxForm.reducer,
  surveys: _surveysReducer2.default
});

exports.default = rootReducer;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {

    case _actions.FETCH_USER:
      return action.payload || false;

    default:
      return state;

  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {

    case _actions.FETCH_SURVEYS:
      return action.payload.reverse();

    default:
      return state;

  }
};

/***/ })
/******/ ]);