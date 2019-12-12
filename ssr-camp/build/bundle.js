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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! exports provided: ReactReduxContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReactReduxContext\", function() { return ReactReduxContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nvar ReactReduxContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactReduxContext);\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Context.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\n/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\");\n\n\n\n\n\nfunction Provider(_ref) {\n  var store = _ref.store,\n      context = _ref.context,\n      children = _ref.children;\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__[\"default\"](store);\n    subscription.onStateChange = subscription.notifyNestedSubs;\n    return {\n      store: store,\n      subscription: subscription\n    };\n  }, [store]);\n  var previousState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return store.getState();\n  }, [store]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var subscription = contextValue.subscription;\n    subscription.trySubscribe();\n\n    if (previousState !== store.getState()) {\n      subscription.notifyNestedSubs();\n    }\n\n    return function () {\n      subscription.tryUnsubscribe();\n      subscription.onStateChange = null;\n    };\n  }, [contextValue, previousState]);\n  var Context = context || _Context__WEBPACK_IMPORTED_MODULE_2__[\"ReactReduxContext\"];\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {\n    value: contextValue\n  }, children);\n}\n\nProvider.propTypes = {\n  store: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    subscribe: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n    dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n    getState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n  }),\n  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Provider);\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Provider.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return connectAdvanced; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-is */ \"react-is\");\n/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\");\n/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\n/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\n\n\n\n\n\n\n\n // Define some constant arrays just to avoid re-creating these\n\nvar EMPTY_ARRAY = [];\nvar NO_SUBSCRIPTION_ARRAY = [null, null];\n\nvar stringifyComponent = function stringifyComponent(Comp) {\n  try {\n    return JSON.stringify(Comp);\n  } catch (err) {\n    return String(Comp);\n  }\n};\n\nfunction storeStateUpdatesReducer(state, action) {\n  var updateCount = state[1];\n  return [action.payload, updateCount + 1];\n}\n\nvar initStateUpdates = function initStateUpdates() {\n  return [null, 0];\n};\n\nfunction connectAdvanced(\n/*\r\n  selectorFactory is a func that is responsible for returning the selector function used to\r\n  compute new props from state, props, and dispatch. For example:\r\n      export default connectAdvanced((dispatch, options) => (state, props) => ({\r\n      thing: state.things[props.thingId],\r\n      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),\r\n    }))(YourComponent)\r\n    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators\r\n  outside of their selector as an optimization. Options passed to connectAdvanced are passed to\r\n  the selectorFactory, along with displayName and WrappedComponent, as the second argument.\r\n    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound\r\n  props. Do not use connectAdvanced directly without memoizing results between calls to your\r\n  selector, otherwise the Connect component will re-render on every state or props change.\r\n*/\nselectorFactory, // options object:\n_ref) {\n  if (_ref === void 0) {\n    _ref = {};\n  }\n\n  var _ref2 = _ref,\n      _ref2$getDisplayName = _ref2.getDisplayName,\n      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {\n    return \"ConnectAdvanced(\" + name + \")\";\n  } : _ref2$getDisplayName,\n      _ref2$methodName = _ref2.methodName,\n      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,\n      _ref2$renderCountProp = _ref2.renderCountProp,\n      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,\n      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,\n      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,\n      _ref2$storeKey = _ref2.storeKey,\n      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,\n      _ref2$withRef = _ref2.withRef,\n      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,\n      _ref2$forwardRef = _ref2.forwardRef,\n      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,\n      _ref2$context = _ref2.context,\n      context = _ref2$context === void 0 ? _Context__WEBPACK_IMPORTED_MODULE_8__[\"ReactReduxContext\"] : _ref2$context,\n      connectOptions = _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, [\"getDisplayName\", \"methodName\", \"renderCountProp\", \"shouldHandleStateChanges\", \"storeKey\", \"withRef\", \"forwardRef\", \"context\"]);\n\n  invariant__WEBPACK_IMPORTED_MODULE_3___default()(renderCountProp === undefined, \"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension\");\n  invariant__WEBPACK_IMPORTED_MODULE_3___default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');\n  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + \"React.createContext(), and pass the context object to React Redux's Provider and specific components\" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';\n  invariant__WEBPACK_IMPORTED_MODULE_3___default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);\n  var Context = context;\n  return function wrapWithConnect(WrappedComponent) {\n    if (true) {\n      invariant__WEBPACK_IMPORTED_MODULE_3___default()(Object(react_is__WEBPACK_IMPORTED_MODULE_5__[\"isValidElementType\"])(WrappedComponent), \"You must pass a component to the function returned by \" + (methodName + \". Instead received \" + stringifyComponent(WrappedComponent)));\n    }\n\n    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\n    var displayName = getDisplayName(wrappedComponentName);\n\n    var selectorFactoryOptions = _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, connectOptions, {\n      getDisplayName: getDisplayName,\n      methodName: methodName,\n      renderCountProp: renderCountProp,\n      shouldHandleStateChanges: shouldHandleStateChanges,\n      storeKey: storeKey,\n      displayName: displayName,\n      wrappedComponentName: wrappedComponentName,\n      WrappedComponent: WrappedComponent\n    });\n\n    var pure = connectOptions.pure;\n\n    function createChildSelector(store) {\n      return selectorFactory(store.dispatch, selectorFactoryOptions);\n    } // If we aren't running in \"pure\" mode, we don't want to memoize values.\n    // To avoid conditionally calling hooks, we fall back to a tiny wrapper\n    // that just executes the given callback immediately.\n\n\n    var usePureOnlyMemo = pure ? react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"] : function (callback) {\n      return callback();\n    };\n\n    function ConnectFunction(props) {\n      var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        // Distinguish between actual \"data\" props that were passed to the wrapper component,\n        // and values needed to control behavior (forwarded refs, alternate context instances).\n        // To maintain the wrapperProps object reference, memoize this destructuring.\n        var forwardedRef = props.forwardedRef,\n            wrapperProps = _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"forwardedRef\"]);\n\n        return [props.context, forwardedRef, wrapperProps];\n      }, [props]),\n          propsContext = _useMemo[0],\n          forwardedRef = _useMemo[1],\n          wrapperProps = _useMemo[2];\n\n      var ContextToUse = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.\n        // Memoize the check that determines which context instance we should use.\n        return propsContext && propsContext.Consumer && Object(react_is__WEBPACK_IMPORTED_MODULE_5__[\"isContextConsumer\"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;\n      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available\n\n      var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(ContextToUse); // The store _must_ exist as either a prop or in context.\n      // We'll check to see if it _looks_ like a Redux store first.\n      // This allows us to pass through a `store` prop that is just a plain value.\n\n      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);\n      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);\n      invariant__WEBPACK_IMPORTED_MODULE_3___default()(didStoreComeFromProps || didStoreComeFromContext, \"Could not find \\\"store\\\" in the context of \" + (\"\\\"\" + displayName + \"\\\". Either wrap the root component in a <Provider>, \") + \"or pass a custom React context provider to <Provider> and the corresponding \" + (\"React context consumer to \" + displayName + \" in connect options.\")); // Based on the previous check, one of these must be true\n\n      var store = didStoreComeFromProps ? props.store : contextValue.store;\n      var childPropsSelector = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        // The child props selector needs the store reference as an input.\n        // Re-create this selector whenever the store changes.\n        return createChildSelector(store);\n      }, [store]);\n\n      var _useMemo2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component\n        // connected to the store via props shouldn't use subscription from context, or vice versa.\n\n        var subscription = new _utils_Subscription__WEBPACK_IMPORTED_MODULE_6__[\"default\"](store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in\n        // the middle of the notification loop, where `subscription` will then be null. This can\n        // probably be avoided if Subscription's listeners logic is changed to not call listeners\n        // that have been unsubscribed in the  middle of the notification loop.\n\n        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);\n        return [subscription, notifyNestedSubs];\n      }, [store, didStoreComeFromProps, contextValue]),\n          subscription = _useMemo2[0],\n          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,\n      // and memoize that value to avoid unnecessary context updates.\n\n\n      var overriddenContextValue = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        if (didStoreComeFromProps) {\n          // This component is directly subscribed to a store from props.\n          // We don't want descendants reading from this store - pass down whatever\n          // the existing context value is from the nearest connected ancestor.\n          return contextValue;\n        } // Otherwise, put this component's subscription instance into context, so that\n        // connected descendants won't update until after this component is done\n\n\n        return _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, contextValue, {\n          subscription: subscription\n        });\n      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update\n      // causes a change to the calculated child component props (or we caught an error in mapState)\n\n      var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useReducer\"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),\n          _useReducer$ = _useReducer[0],\n          previousStateUpdateResult = _useReducer$[0],\n          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards\n\n\n      if (previousStateUpdateResult && previousStateUpdateResult.error) {\n        throw previousStateUpdateResult.error;\n      } // Set up refs to coordinate values between the subscription effect and the render logic\n\n\n      var lastChildProps = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n      var lastWrapperProps = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(wrapperProps);\n      var childPropsFromStoreUpdate = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n      var renderIsScheduled = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(false);\n      var actualChildProps = usePureOnlyMemo(function () {\n        // Tricky logic here:\n        // - This render may have been triggered by a Redux store update that produced new child props\n        // - However, we may have gotten new wrapper props after that\n        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.\n        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.\n        // So, we'll use the child props from store update only if the wrapper props are the same as last time.\n        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {\n          return childPropsFromStoreUpdate.current;\n        } // TODO We're reading the store directly in render() here. Bad idea?\n        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.\n        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state\n        // to determine what the child props should be.\n\n\n        return childPropsSelector(store.getState(), wrapperProps);\n      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns\n      // about useLayoutEffect in SSR, so we try to detect environment and fall back to\n      // just useEffect instead to avoid the warning, since neither will run anyway.\n\n      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__[\"useIsomorphicLayoutEffect\"])(function () {\n        // We want to capture the wrapper props and child props we used for later comparisons\n        lastWrapperProps.current = wrapperProps;\n        lastChildProps.current = actualChildProps;\n        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update\n\n        if (childPropsFromStoreUpdate.current) {\n          childPropsFromStoreUpdate.current = null;\n          notifyNestedSubs();\n        }\n      }); // Our re-subscribe logic only runs when the store/subscription setup changes\n\n      Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_7__[\"useIsomorphicLayoutEffect\"])(function () {\n        // If we're not subscribed to the store, nothing to do here\n        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts\n\n        var didUnsubscribe = false;\n        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component\n\n        var checkForUpdates = function checkForUpdates() {\n          if (didUnsubscribe) {\n            // Don't run stale listeners.\n            // Redux doesn't guarantee unsubscriptions happen until next dispatch.\n            return;\n          }\n\n          var latestStoreState = store.getState();\n          var newChildProps, error;\n\n          try {\n            // Actually run the selector with the most recent store state and wrapper props\n            // to determine what the child props should be\n            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);\n          } catch (e) {\n            error = e;\n            lastThrownError = e;\n          }\n\n          if (!error) {\n            lastThrownError = null;\n          } // If the child props haven't changed, nothing to do here - cascade the subscription update\n\n\n          if (newChildProps === lastChildProps.current) {\n            if (!renderIsScheduled.current) {\n              notifyNestedSubs();\n            }\n          } else {\n            // Save references to the new child props.  Note that we track the \"child props from store update\"\n            // as a ref instead of a useState/useReducer because we need a way to determine if that value has\n            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without\n            // forcing another re-render, which we don't want.\n            lastChildProps.current = newChildProps;\n            childPropsFromStoreUpdate.current = newChildProps;\n            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render\n\n            forceComponentUpdateDispatch({\n              type: 'STORE_UPDATED',\n              payload: {\n                error: error\n              }\n            });\n          }\n        }; // Actually subscribe to the nearest connected ancestor (or store)\n\n\n        subscription.onStateChange = checkForUpdates;\n        subscription.trySubscribe(); // Pull data from the store after first render in case the store has\n        // changed since we began.\n\n        checkForUpdates();\n\n        var unsubscribeWrapper = function unsubscribeWrapper() {\n          didUnsubscribe = true;\n          subscription.tryUnsubscribe();\n          subscription.onStateChange = null;\n\n          if (lastThrownError) {\n            // It's possible that we caught an error due to a bad mapState function, but the\n            // parent re-rendered without this component and we're about to unmount.\n            // This shouldn't happen as long as we do top-down subscriptions correctly, but\n            // if we ever do those wrong, this throw will surface the error in our tests.\n            // In that case, throw the error from here so it doesn't get lost.\n            throw lastThrownError;\n          }\n        };\n\n        return unsubscribeWrapper;\n      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.\n      // We memoize the elements for the rendered child component as an optimization.\n\n      var renderedWrappedComponent = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedComponent, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, actualChildProps, {\n          ref: forwardedRef\n        }));\n      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering\n      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.\n\n      var renderedChild = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useMemo\"])(function () {\n        if (shouldHandleStateChanges) {\n          // If this component is subscribed to store updates, we need to pass its own\n          // subscription instance down to our descendants. That means rendering the same\n          // Context instance, and putting a different value into the context.\n          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ContextToUse.Provider, {\n            value: overriddenContextValue\n          }, renderedWrappedComponent);\n        }\n\n        return renderedWrappedComponent;\n      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);\n      return renderedChild;\n    } // If we're in \"pure\" mode, ensure our wrapper component only re-renders when incoming props have changed.\n\n\n    var Connect = pure ? react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(ConnectFunction) : ConnectFunction;\n    Connect.WrappedComponent = WrappedComponent;\n    Connect.displayName = displayName;\n\n    if (forwardRef) {\n      var forwarded = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function forwardConnectRef(props, ref) {\n        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Connect, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {\n          forwardedRef: ref\n        }));\n      });\n      forwarded.displayName = displayName;\n      forwarded.WrappedComponent = WrappedComponent;\n      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(forwarded, WrappedComponent);\n    }\n\n    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(Connect, WrappedComponent);\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/connectAdvanced.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! exports provided: createConnect, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createConnect\", function() { return createConnect; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\");\n/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\");\n/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapDispatchToProps */ \"./node_modules/react-redux/es/connect/mapDispatchToProps.js\");\n/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapStateToProps */ \"./node_modules/react-redux/es/connect/mapStateToProps.js\");\n/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mergeProps */ \"./node_modules/react-redux/es/connect/mergeProps.js\");\n/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectorFactory */ \"./node_modules/react-redux/es/connect/selectorFactory.js\");\n\n\n\n\n\n\n\n\n/*\r\n  connect is a facade over connectAdvanced. It turns its args into a compatible\r\n  selectorFactory, which has the signature:\r\n\r\n    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps\r\n  \r\n  connect passes its args to connectAdvanced as options, which will in turn pass them to\r\n  selectorFactory each time a Connect component instance is instantiated or hot reloaded.\r\n\r\n  selectorFactory returns a final props selector from its mapStateToProps,\r\n  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,\r\n  mergePropsFactories, and pure args.\r\n\r\n  The resulting final props selector is called by the Connect component instance whenever\r\n  it receives new props or store state.\r\n */\n\nfunction match(arg, factories, name) {\n  for (var i = factories.length - 1; i >= 0; i--) {\n    var result = factories[i](arg);\n    if (result) return result;\n  }\n\n  return function (dispatch, options) {\n    throw new Error(\"Invalid value of type \" + typeof arg + \" for \" + name + \" argument when connecting component \" + options.wrappedComponentName + \".\");\n  };\n}\n\nfunction strictEqual(a, b) {\n  return a === b;\n} // createConnect with default args builds the 'official' connect behavior. Calling it with\n// different options opens up some testing and extensibility scenarios\n\n\nfunction createConnect(_temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$connectHOC = _ref.connectHOC,\n      connectHOC = _ref$connectHOC === void 0 ? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _ref$connectHOC,\n      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,\n      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__[\"default\"] : _ref$mapStateToPropsF,\n      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,\n      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _ref$mapDispatchToPro,\n      _ref$mergePropsFactor = _ref.mergePropsFactories,\n      mergePropsFactories = _ref$mergePropsFactor === void 0 ? _mergeProps__WEBPACK_IMPORTED_MODULE_6__[\"default\"] : _ref$mergePropsFactor,\n      _ref$selectorFactory = _ref.selectorFactory,\n      selectorFactory = _ref$selectorFactory === void 0 ? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__[\"default\"] : _ref$selectorFactory;\n\n  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {\n    if (_ref2 === void 0) {\n      _ref2 = {};\n    }\n\n    var _ref3 = _ref2,\n        _ref3$pure = _ref3.pure,\n        pure = _ref3$pure === void 0 ? true : _ref3$pure,\n        _ref3$areStatesEqual = _ref3.areStatesEqual,\n        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,\n        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,\n        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _ref3$areOwnPropsEqua,\n        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,\n        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _ref3$areStatePropsEq,\n        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,\n        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _ref3$areMergedPropsE,\n        extraOptions = _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, [\"pure\", \"areStatesEqual\", \"areOwnPropsEqual\", \"areStatePropsEqual\", \"areMergedPropsEqual\"]);\n\n    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');\n    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');\n    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');\n    return connectHOC(selectorFactory, _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({\n      // used in error messages\n      methodName: 'connect',\n      // used to compute Connect's displayName from the wrapped component's displayName.\n      getDisplayName: function getDisplayName(name) {\n        return \"Connect(\" + name + \")\";\n      },\n      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes\n      shouldHandleStateChanges: Boolean(mapStateToProps),\n      // passed through to selectorFactory\n      initMapStateToProps: initMapStateToProps,\n      initMapDispatchToProps: initMapDispatchToProps,\n      initMergeProps: initMergeProps,\n      pure: pure,\n      areStatesEqual: areStatesEqual,\n      areOwnPropsEqual: areOwnPropsEqual,\n      areStatePropsEqual: areStatePropsEqual,\n      areMergedPropsEqual: areMergedPropsEqual\n    }, extraOptions));\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (createConnect());\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/connect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! exports provided: whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMapDispatchToPropsIsFunction\", function() { return whenMapDispatchToPropsIsFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMapDispatchToPropsIsMissing\", function() { return whenMapDispatchToPropsIsMissing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMapDispatchToPropsIsObject\", function() { return whenMapDispatchToPropsIsObject; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\n\n\nfunction whenMapDispatchToPropsIsFunction(mapDispatchToProps) {\n  return typeof mapDispatchToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__[\"wrapMapToPropsFunc\"])(mapDispatchToProps, 'mapDispatchToProps') : undefined;\n}\nfunction whenMapDispatchToPropsIsMissing(mapDispatchToProps) {\n  return !mapDispatchToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__[\"wrapMapToPropsConstant\"])(function (dispatch) {\n    return {\n      dispatch: dispatch\n    };\n  }) : undefined;\n}\nfunction whenMapDispatchToPropsIsObject(mapDispatchToProps) {\n  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__[\"wrapMapToPropsConstant\"])(function (dispatch) {\n    return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"bindActionCreators\"])(mapDispatchToProps, dispatch);\n  }) : undefined;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapDispatchToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! exports provided: whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMapStateToPropsIsFunction\", function() { return whenMapStateToPropsIsFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMapStateToPropsIsMissing\", function() { return whenMapStateToPropsIsMissing; });\n/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\n\nfunction whenMapStateToPropsIsFunction(mapStateToProps) {\n  return typeof mapStateToProps === 'function' ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__[\"wrapMapToPropsFunc\"])(mapStateToProps, 'mapStateToProps') : undefined;\n}\nfunction whenMapStateToPropsIsMissing(mapStateToProps) {\n  return !mapStateToProps ? Object(_wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__[\"wrapMapToPropsConstant\"])(function () {\n    return {};\n  }) : undefined;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapStateToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! exports provided: defaultMergeProps, wrapMergePropsFunc, whenMergePropsIsFunction, whenMergePropsIsOmitted, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultMergeProps\", function() { return defaultMergeProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapMergePropsFunc\", function() { return wrapMergePropsFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMergePropsIsFunction\", function() { return whenMergePropsIsFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whenMergePropsIsOmitted\", function() { return whenMergePropsIsOmitted; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\");\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\");\n\n\nfunction defaultMergeProps(stateProps, dispatchProps, ownProps) {\n  return _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, ownProps, {}, stateProps, {}, dispatchProps);\n}\nfunction wrapMergePropsFunc(mergeProps) {\n  return function initMergePropsProxy(dispatch, _ref) {\n    var displayName = _ref.displayName,\n        pure = _ref.pure,\n        areMergedPropsEqual = _ref.areMergedPropsEqual;\n    var hasRunOnce = false;\n    var mergedProps;\n    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {\n      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n\n      if (hasRunOnce) {\n        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;\n      } else {\n        hasRunOnce = true;\n        mergedProps = nextMergedProps;\n        if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mergedProps, displayName, 'mergeProps');\n      }\n\n      return mergedProps;\n    };\n  };\n}\nfunction whenMergePropsIsFunction(mergeProps) {\n  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;\n}\nfunction whenMergePropsIsOmitted(mergeProps) {\n  return !mergeProps ? function () {\n    return defaultMergeProps;\n  } : undefined;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mergeProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! exports provided: impureFinalPropsSelectorFactory, pureFinalPropsSelectorFactory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"impureFinalPropsSelectorFactory\", function() { return impureFinalPropsSelectorFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pureFinalPropsSelectorFactory\", function() { return pureFinalPropsSelectorFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return finalPropsSelectorFactory; });\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verifySubselectors */ \"./node_modules/react-redux/es/connect/verifySubselectors.js\");\n\n\nfunction impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {\n  return function impureFinalPropsSelector(state, ownProps) {\n    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);\n  };\n}\nfunction pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {\n  var areStatesEqual = _ref.areStatesEqual,\n      areOwnPropsEqual = _ref.areOwnPropsEqual,\n      areStatePropsEqual = _ref.areStatePropsEqual;\n  var hasRunAtLeastOnce = false;\n  var state;\n  var ownProps;\n  var stateProps;\n  var dispatchProps;\n  var mergedProps;\n\n  function handleFirstCall(firstState, firstOwnProps) {\n    state = firstState;\n    ownProps = firstOwnProps;\n    stateProps = mapStateToProps(state, ownProps);\n    dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    hasRunAtLeastOnce = true;\n    return mergedProps;\n  }\n\n  function handleNewPropsAndNewState() {\n    stateProps = mapStateToProps(state, ownProps);\n    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleNewProps() {\n    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);\n    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);\n    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleNewState() {\n    var nextStateProps = mapStateToProps(state, ownProps);\n    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);\n    stateProps = nextStateProps;\n    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\n    return mergedProps;\n  }\n\n  function handleSubsequentCalls(nextState, nextOwnProps) {\n    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);\n    var stateChanged = !areStatesEqual(nextState, state);\n    state = nextState;\n    ownProps = nextOwnProps;\n    if (propsChanged && stateChanged) return handleNewPropsAndNewState();\n    if (propsChanged) return handleNewProps();\n    if (stateChanged) return handleNewState();\n    return mergedProps;\n  }\n\n  return function pureFinalPropsSelector(nextState, nextOwnProps) {\n    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);\n  };\n} // TODO: Add more comments\n// If pure is true, the selector returned by selectorFactory will memoize its results,\n// allowing connectAdvanced's shouldComponentUpdate to return false if final\n// props have not changed. If false, the selector will always return a new\n// object and shouldComponentUpdate will always return true.\n\nfunction finalPropsSelectorFactory(dispatch, _ref2) {\n  var initMapStateToProps = _ref2.initMapStateToProps,\n      initMapDispatchToProps = _ref2.initMapDispatchToProps,\n      initMergeProps = _ref2.initMergeProps,\n      options = _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, [\"initMapStateToProps\", \"initMapDispatchToProps\", \"initMergeProps\"]);\n\n  var mapStateToProps = initMapStateToProps(dispatch, options);\n  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);\n  var mergeProps = initMergeProps(dispatch, options);\n\n  if (true) {\n    Object(_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);\n  }\n\n  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;\n  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/selectorFactory.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return verifySubselectors; });\n/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/warning */ \"./node_modules/react-redux/es/utils/warning.js\");\n\n\nfunction verify(selector, methodName, displayName) {\n  if (!selector) {\n    throw new Error(\"Unexpected value for \" + methodName + \" in \" + displayName + \".\");\n  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {\n    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {\n      Object(_utils_warning__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"The selector for \" + methodName + \" of \" + displayName + \" did not specify a value for dependsOnOwnProps.\");\n    }\n  }\n}\n\nfunction verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {\n  verify(mapStateToProps, 'mapStateToProps', displayName);\n  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);\n  verify(mergeProps, 'mergeProps', displayName);\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/verifySubselectors.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! exports provided: wrapMapToPropsConstant, getDependsOnOwnProps, wrapMapToPropsFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapMapToPropsConstant\", function() { return wrapMapToPropsConstant; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDependsOnOwnProps\", function() { return getDependsOnOwnProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wrapMapToPropsFunc\", function() { return wrapMapToPropsFunc; });\n/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\");\n\nfunction wrapMapToPropsConstant(getConstant) {\n  return function initConstantSelector(dispatch, options) {\n    var constant = getConstant(dispatch, options);\n\n    function constantSelector() {\n      return constant;\n    }\n\n    constantSelector.dependsOnOwnProps = false;\n    return constantSelector;\n  };\n} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args\n// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine\n// whether mapToProps needs to be invoked when props have changed.\n//\n// A length of one signals that mapToProps does not depend on props from the parent component.\n// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and\n// therefore not reporting its length accurately..\n\nfunction getDependsOnOwnProps(mapToProps) {\n  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;\n} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,\n// this function wraps mapToProps in a proxy function which does several things:\n//\n//  * Detects whether the mapToProps function being called depends on props, which\n//    is used by selectorFactory to decide if it should reinvoke on props changes.\n//\n//  * On first call, handles mapToProps if returns another function, and treats that\n//    new function as the true mapToProps for subsequent calls.\n//\n//  * On first call, verifies the first result is a plain object, in order to warn\n//    the developer that their mapToProps function is not returning a valid result.\n//\n\nfunction wrapMapToPropsFunc(mapToProps, methodName) {\n  return function initProxySelector(dispatch, _ref) {\n    var displayName = _ref.displayName;\n\n    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {\n      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);\n    }; // allow detectFactoryAndVerify to get ownProps\n\n\n    proxy.dependsOnOwnProps = true;\n\n    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {\n      proxy.mapToProps = mapToProps;\n      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);\n      var props = proxy(stateOrDispatch, ownProps);\n\n      if (typeof props === 'function') {\n        proxy.mapToProps = props;\n        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);\n        props = proxy(stateOrDispatch, ownProps);\n      }\n\n      if (true) Object(_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(props, displayName, methodName);\n      return props;\n    };\n\n    return proxy;\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/wrapMapToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! exports provided: createDispatchHook, useDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDispatchHook\", function() { return createDispatchHook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDispatch\", function() { return useDispatch; });\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\n\n\n/**\r\n * Hook factory, which creates a `useDispatch` hook bound to a given context.\r\n *\r\n * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useDispatch` hook bound to the specified context.\r\n */\n\nfunction createDispatchHook(context) {\n  if (context === void 0) {\n    context = _components_Context__WEBPACK_IMPORTED_MODULE_0__[\"ReactReduxContext\"];\n  }\n\n  var useStore = context === _components_Context__WEBPACK_IMPORTED_MODULE_0__[\"ReactReduxContext\"] ? _useStore__WEBPACK_IMPORTED_MODULE_1__[\"useStore\"] : Object(_useStore__WEBPACK_IMPORTED_MODULE_1__[\"createStoreHook\"])(context);\n  return function useDispatch() {\n    var store = useStore();\n    return store.dispatch;\n  };\n}\n/**\r\n * A hook to access the redux `dispatch` function.\r\n *\r\n * @returns {any|function} redux store's `dispatch` function\r\n *\r\n * @example\r\n *\r\n * import React, { useCallback } from 'react'\r\n * import { useDispatch } from 'react-redux'\r\n *\r\n * export const CounterComponent = ({ value }) => {\r\n *   const dispatch = useDispatch()\r\n *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])\r\n *   return (\r\n *     <div>\r\n *       <span>{value}</span>\r\n *       <button onClick={increaseCounter}>Increase counter</button>\r\n *     </div>\r\n *   )\r\n * }\r\n */\n\nvar useDispatch = createDispatchHook();\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useDispatch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! exports provided: useReduxContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useReduxContext\", function() { return useReduxContext; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\n\n\n/**\r\n * A hook to access the value of the `ReactReduxContext`. This is a low-level\r\n * hook that you should usually not need to call directly.\r\n *\r\n * @returns {any} the value of the `ReactReduxContext`\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useReduxContext } from 'react-redux'\r\n *\r\n * export const CounterComponent = ({ value }) => {\r\n *   const { store } = useReduxContext()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\n\nfunction useReduxContext() {\n  var contextValue = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_components_Context__WEBPACK_IMPORTED_MODULE_2__[\"ReactReduxContext\"]);\n  invariant__WEBPACK_IMPORTED_MODULE_1___default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');\n  return contextValue;\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useReduxContext.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! exports provided: createSelectorHook, useSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSelectorHook\", function() { return createSelectorHook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useSelector\", function() { return useSelector; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! invariant */ \"invariant\");\n/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\n/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\");\n/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n\n\n\n\n\n\n\nvar refEquality = function refEquality(a, b) {\n  return a === b;\n};\n\nfunction useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {\n  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useReducer\"])(function (s) {\n    return s + 1;\n  }, 0),\n      forceRender = _useReducer[1];\n\n  var subscription = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return new _utils_Subscription__WEBPACK_IMPORTED_MODULE_3__[\"default\"](store, contextSub);\n  }, [store, contextSub]);\n  var latestSubscriptionCallbackError = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var latestSelector = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var latestSelectedState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var selectedState;\n\n  try {\n    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {\n      selectedState = selector(store.getState());\n    } else {\n      selectedState = latestSelectedState.current;\n    }\n  } catch (err) {\n    var errorMessage = \"An error occurred while selecting the store state: \" + err.message + \".\";\n\n    if (latestSubscriptionCallbackError.current) {\n      errorMessage += \"\\nThe error may be correlated with this previous error:\\n\" + latestSubscriptionCallbackError.current.stack + \"\\n\\nOriginal stack trace:\";\n    }\n\n    throw new Error(errorMessage);\n  }\n\n  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__[\"useIsomorphicLayoutEffect\"])(function () {\n    latestSelector.current = selector;\n    latestSelectedState.current = selectedState;\n    latestSubscriptionCallbackError.current = undefined;\n  });\n  Object(_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_4__[\"useIsomorphicLayoutEffect\"])(function () {\n    function checkForUpdates() {\n      try {\n        var newSelectedState = latestSelector.current(store.getState());\n\n        if (equalityFn(newSelectedState, latestSelectedState.current)) {\n          return;\n        }\n\n        latestSelectedState.current = newSelectedState;\n      } catch (err) {\n        // we ignore all errors here, since when the component\n        // is re-rendered, the selectors are called again, and\n        // will throw again, if neither props nor store state\n        // changed\n        latestSubscriptionCallbackError.current = err;\n      }\n\n      forceRender({});\n    }\n\n    subscription.onStateChange = checkForUpdates;\n    subscription.trySubscribe();\n    checkForUpdates();\n    return function () {\n      return subscription.tryUnsubscribe();\n    };\n  }, [store, subscription]);\n  return selectedState;\n}\n/**\r\n * Hook factory, which creates a `useSelector` hook bound to a given context.\r\n *\r\n * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useSelector` hook bound to the specified context.\r\n */\n\n\nfunction createSelectorHook(context) {\n  if (context === void 0) {\n    context = _components_Context__WEBPACK_IMPORTED_MODULE_5__[\"ReactReduxContext\"];\n  }\n\n  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_5__[\"ReactReduxContext\"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__[\"useReduxContext\"] : function () {\n    return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(context);\n  };\n  return function useSelector(selector, equalityFn) {\n    if (equalityFn === void 0) {\n      equalityFn = refEquality;\n    }\n\n    invariant__WEBPACK_IMPORTED_MODULE_1___default()(selector, \"You must pass a selector to useSelectors\");\n\n    var _useReduxContext = useReduxContext(),\n        store = _useReduxContext.store,\n        contextSub = _useReduxContext.subscription;\n\n    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);\n  };\n}\n/**\r\n * A hook to access the redux store's state. This hook takes a selector function\r\n * as an argument. The selector is called with the store state.\r\n *\r\n * This hook takes an optional equality comparison function as the second parameter\r\n * that allows you to customize the way the selected state is compared to determine\r\n * whether the component needs to be re-rendered.\r\n *\r\n * @param {Function} selector the selector function\r\n * @param {Function=} equalityFn the function that will be used to determine equality\r\n *\r\n * @returns {any} the selected state\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useSelector } from 'react-redux'\r\n *\r\n * export const CounterComponent = () => {\r\n *   const counter = useSelector(state => state.counter)\r\n *   return <div>{counter}</div>\r\n * }\r\n */\n\nvar useSelector = createSelectorHook();\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useSelector.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! exports provided: createStoreHook, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStoreHook\", function() { return createStoreHook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\n\n\n\n/**\r\n * Hook factory, which creates a `useStore` hook bound to a given context.\r\n *\r\n * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useStore` hook bound to the specified context.\r\n */\n\nfunction createStoreHook(context) {\n  if (context === void 0) {\n    context = _components_Context__WEBPACK_IMPORTED_MODULE_1__[\"ReactReduxContext\"];\n  }\n\n  var useReduxContext = context === _components_Context__WEBPACK_IMPORTED_MODULE_1__[\"ReactReduxContext\"] ? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__[\"useReduxContext\"] : function () {\n    return Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(context);\n  };\n  return function useStore() {\n    var _useReduxContext = useReduxContext(),\n        store = _useReduxContext.store;\n\n    return store;\n  };\n}\n/**\r\n * A hook to access the redux store.\r\n *\r\n * @returns {any} the redux store\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useStore } from 'react-redux'\r\n *\r\n * export const ExampleComponent = () => {\r\n *   const store = useStore()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\n\nvar useStore = createStoreHook();\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useStore.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, connectAdvanced, ReactReduxContext, connect, batch, useDispatch, createDispatchHook, useSelector, createSelectorHook, useStore, createStoreHook, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Provider */ \"./node_modules/react-redux/es/components/Provider.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Provider\", function() { return _components_Provider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connectAdvanced\", function() { return _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ReactReduxContext\", function() { return _components_Context__WEBPACK_IMPORTED_MODULE_2__[\"ReactReduxContext\"]; });\n\n/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connect/connect */ \"./node_modules/react-redux/es/connect/connect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connect\", function() { return _connect_connect__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hooks/useDispatch */ \"./node_modules/react-redux/es/hooks/useDispatch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useDispatch\", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createDispatchHook\", function() { return _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__[\"createDispatchHook\"]; });\n\n/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/useSelector */ \"./node_modules/react-redux/es/hooks/useSelector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useSelector\", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createSelectorHook\", function() { return _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__[\"createSelectorHook\"]; });\n\n/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__[\"useStore\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createStoreHook\", function() { return _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__[\"createStoreHook\"]; });\n\n/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/batch */ \"./node_modules/react-redux/es/utils/batch.js\");\n/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/reactBatchedUpdates */ \"./node_modules/react-redux/es/utils/reactBatchedUpdates.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"batch\", function() { return _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__[\"unstable_batchedUpdates\"]; });\n\n/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shallowEqual\", function() { return _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\nObject(_utils_batch__WEBPACK_IMPORTED_MODULE_7__[\"setBatch\"])(_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_8__[\"unstable_batchedUpdates\"]);\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Subscription; });\n/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch */ \"./node_modules/react-redux/es/utils/batch.js\");\n // encapsulates the subscription logic for connecting a component to the redux store, as\n// well as nesting subscriptions of descendant components, so that we can ensure the\n// ancestor components re-render before descendants\n\nvar CLEARED = null;\nvar nullListeners = {\n  notify: function notify() {}\n};\n\nfunction createListenerCollection() {\n  var batch = Object(_batch__WEBPACK_IMPORTED_MODULE_0__[\"getBatch\"])(); // the current/next pattern is copied from redux's createStore code.\n  // TODO: refactor+expose that code to be reusable here?\n\n  var current = [];\n  var next = [];\n  return {\n    clear: function clear() {\n      next = CLEARED;\n      current = CLEARED;\n    },\n    notify: function notify() {\n      var listeners = current = next;\n      batch(function () {\n        for (var i = 0; i < listeners.length; i++) {\n          listeners[i]();\n        }\n      });\n    },\n    get: function get() {\n      return next;\n    },\n    subscribe: function subscribe(listener) {\n      var isSubscribed = true;\n      if (next === current) next = current.slice();\n      next.push(listener);\n      return function unsubscribe() {\n        if (!isSubscribed || current === CLEARED) return;\n        isSubscribed = false;\n        if (next === current) next = current.slice();\n        next.splice(next.indexOf(listener), 1);\n      };\n    }\n  };\n}\n\nvar Subscription =\n/*#__PURE__*/\nfunction () {\n  function Subscription(store, parentSub) {\n    this.store = store;\n    this.parentSub = parentSub;\n    this.unsubscribe = null;\n    this.listeners = nullListeners;\n    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);\n  }\n\n  var _proto = Subscription.prototype;\n\n  _proto.addNestedSub = function addNestedSub(listener) {\n    this.trySubscribe();\n    return this.listeners.subscribe(listener);\n  };\n\n  _proto.notifyNestedSubs = function notifyNestedSubs() {\n    this.listeners.notify();\n  };\n\n  _proto.handleChangeWrapper = function handleChangeWrapper() {\n    if (this.onStateChange) {\n      this.onStateChange();\n    }\n  };\n\n  _proto.isSubscribed = function isSubscribed() {\n    return Boolean(this.unsubscribe);\n  };\n\n  _proto.trySubscribe = function trySubscribe() {\n    if (!this.unsubscribe) {\n      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);\n      this.listeners = createListenerCollection();\n    }\n  };\n\n  _proto.tryUnsubscribe = function tryUnsubscribe() {\n    if (this.unsubscribe) {\n      this.unsubscribe();\n      this.unsubscribe = null;\n      this.listeners.clear();\n      this.listeners = nullListeners;\n    }\n  };\n\n  return Subscription;\n}();\n\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/Subscription.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! exports provided: setBatch, getBatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setBatch\", function() { return setBatch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBatch\", function() { return getBatch; });\n// Default to a dummy \"batch\" implementation that just runs the callback\nfunction defaultNoopBatch(callback) {\n  callback();\n}\n\nvar batch = defaultNoopBatch; // Allow injecting another batching function later\n\nvar setBatch = function setBatch(newBatch) {\n  return batch = newBatch;\n}; // Supply a getter just to skip dealing with ESM bindings\n\nvar getBatch = function getBatch() {\n  return batch;\n};\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/batch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! exports provided: unstable_batchedUpdates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"unstable_batchedUpdates\", function() { return react_dom__WEBPACK_IMPORTED_MODULE_0__[\"unstable_batchedUpdates\"]; });\n\n/* eslint-disable import/no-unresolved */\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/reactBatchedUpdates.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shallowEqual; });\nvar hasOwn = Object.prototype.hasOwnProperty;\n\nfunction is(x, y) {\n  if (x === y) {\n    return x !== 0 || y !== 0 || 1 / x === 1 / y;\n  } else {\n    return x !== x && y !== y;\n  }\n}\n\nfunction shallowEqual(objA, objB) {\n  if (is(objA, objB)) return true;\n\n  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\n    return false;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n  if (keysA.length !== keysB.length) return false;\n\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/shallowEqual.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! exports provided: useIsomorphicLayoutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useIsomorphicLayoutEffect\", function() { return useIsomorphicLayoutEffect; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // React currently throws a warning when using useLayoutEffect on the server.\n// To get around it, we can conditionally useEffect on the server (no-op) and\n// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store\n// subscription callback always has the selector from the latest render commit\n// available, otherwise a store update may happen between render and the effect,\n// which may cause missed updates; we also must ensure the store subscription\n// is created synchronously, otherwise a store update may occur before the\n// subscription is created and an inconsistent state may be observed\n\nvar isHopefullyDomEnvironment = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';\nvar useIsomorphicLayoutEffect = isHopefullyDomEnvironment ? react__WEBPACK_IMPORTED_MODULE_0__[\"useLayoutEffect\"] : react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"];\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'E:\\\\开课吧\\\\react-ssr\\\\ssr-camp\\\\node_modules\\\\react-redux\\\\es\\\\utils\\\\verifyPlainObject.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/verifyPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'E:\\\\开课吧\\\\react-ssr\\\\ssr-camp\\\\node_modules\\\\react-redux\\\\es\\\\utils\\\\warning.js'\");\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/warning.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _src_store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/store/store */ \"./src/store/store.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n//这里的node代码，会用babel处理\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_2___default.a[\"static\"]('public'));\napp.get('*', function (req, res) {\n  // const Page=<App title=\"开课吧\"></App>\n  //把react组件，解析成html\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_1__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"Provider\"], {\n    store: _src_store_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.url\n  }, _src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"]))); //字符串模板\n\n  res.send(\"\\n    <html>\\n        <head>\\n            <meta charset=\\\"utf-8\\\"/>\\n            <title>react ssr</title>\\n        </head>\\n        <body>\\n            <div id=\\\"root\\\">\".concat(content, \"</div>\\n            <script src=\\\"/bundle.js\\\"></script>\\n        </body>\\n    </html>\\n    \"));\n});\napp.listen(9093, function () {\n  console.log('监听完毕');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Index */ \"./src/container/Index.js\");\n/* harmony import */ var _container_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/About */ \"./src/container/About.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/\",\n  exact: true,\n  component: _container_Index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n  path: \"/about\",\n  exact: true,\n  component: _container_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n})));\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/container/About.js":
/*!********************************!*\
  !*** ./src/container/About.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction About(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u5173\\u4E8E\\u9875\\u9762\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\n\n//# sourceURL=webpack:///./src/container/About.js?");

/***/ }),

/***/ "./src/container/Index.js":
/*!********************************!*\
  !*** ./src/container/Index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ \"./src/store/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Index(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(1),\n      _useState2 = _slicedToArray(_useState, 2),\n      count = _useState2[0],\n      setCount = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    props.getIndexList();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u54C8\\u55BD \", props.title, \" ! \", count), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    }\n  }, \"\\u7D2F\\u52A0\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, props.list.map(function (item) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(function (state) {\n  return {\n    list: state.index.list\n  };\n}, {\n  getIndexList: _store_index__WEBPACK_IMPORTED_MODULE_2__[\"getIndexList\"]\n})(Index));\n\n//# sourceURL=webpack:///./src/container/Index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: getIndexList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIndexList\", function() { return getIndexList; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//首页的逻辑\n //actionType\n\nvar GET_LIST = \"INDEX/GET_LIST\"; //actionCreator\n\nvar changeList = function changeList(list) {\n  return {\n    type: GET_LIST,\n    list: list\n  };\n};\n\nvar getIndexList = function getIndexList(server) {\n  return function (dispatch, getState, axiosInstance) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('http://localhost:9091/api/course/list').then(function (res) {\n      var list = res.data.list;\n      dispatch(changeList(list));\n    });\n  };\n};\nvar defaultState = {\n  list: []\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case GET_LIST:\n      var newState = _objectSpread({}, state, {\n        list: action.list\n      });\n\n      return newState;\n\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./src/store/index.js\");\n//存储的入口\n\n\n\nvar reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  index: _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}); //创建store\n\nvar store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(reducer, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);\n\n//# sourceURL=webpack:///./src/store/store.js?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/extends":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/esm/extends" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":
/*!**************************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/objectWithoutPropertiesLoose%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"invariant\");\n\n//# sourceURL=webpack:///external_%22invariant%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");\n\n//# sourceURL=webpack:///external_%22react-is%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });