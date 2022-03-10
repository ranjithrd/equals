// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"786KC":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"cky5a":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "817159a79700d952";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"eSij7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cashDom = require("cash-dom");
var _cashDomDefault = parcelHelpers.interopDefault(_cashDom);
var _logicJs = require("./logic.js");
function card(caption, cardValue, onClick) {
    let colour = "Unknown";
    switch(cardValue[0]){
        case 0:
            colour = "Gold";
            break;
        case -1:
            colour = "Red";
            break;
        case 1:
            colour = "Blue";
            break;
    }
    return `
    <button class="card" onclick="${onClick}">
        <p>${caption}</p>
        <h3>${colour} ${cardValue[1]}</h3>
    </button>
    `;
}
function render(Game) {
    let html = ``;
    for (const [player1, cards] of Object.entries(Game.CARDS_STATE)){
        html += `<h3>${player1}</h3>`;
        const output = Game.output(player1);
        console.log(output);
        window.stack = (player, data)=>{
            Game.interact(player, "stack", data);
        };
        window.deck = (player, data)=>{
            Game.interact(player, "deck", data);
        };
        switch(output[0]){
            case "not_turn_prompt":
                html += "<h2>Not your turn yet.</h2>";
                break;
            case "round_prompt":
                html += "<h2>Your turn!</h2>";
                break;
            case "start_prompt":
                html += "<h2>Start the game!</h2>";
                html += `<div id="choice">
                    ${card("Stack", output[3][0], `stack('${player1}', ${output[3][0]})`)}
                    ${card("Deck", output[3][1], `deck('${player1}', ${output[3][0]})`)}
                </div>`;
                break;
            case "end_prompt":
                html += "<h2>This round ended!</h2>";
                break;
            case "spectate_prompt":
                html += "<h2>You're spectating.</h2>";
                break;
        }
        for (let c of cards)html += card("", c);
    }
    _cashDomDefault.default("#app").html(html);
}
function main() {
    let Game = new _logicJs.Equals([
        "Player One",
        "Player Two"
    ]);
    Game.initialize();
    render(Game);
    Game.listen(()=>{
        console.log("Change detected.");
        // console.log(Game.message())
        render(Game);
    });
}
_cashDomDefault.default(main());

},{"cash-dom":"1st5g","./logic.js":"5VQZs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1st5g":[function(require,module,exports) {
/* MIT https://github.com/fabiospampinato/cash */ (function() {
    var propMap = {
        /* GENERAL */ "class": 'className',
        contenteditable: 'contentEditable',
        /* LABEL */ "for": 'htmlFor',
        /* INPUT */ readonly: 'readOnly',
        maxlength: 'maxLength',
        tabindex: 'tabIndex',
        /* TABLE */ colspan: 'colSpan',
        rowspan: 'rowSpan',
        /* IMAGE */ usemap: 'useMap'
    };
    function attempt(fn, arg) {
        try {
            return fn(arg);
        } catch (_a) {
            return arg;
        }
    }
    var doc1 = document, win = window, docEle1 = doc1.documentElement, createElement = doc1.createElement.bind(doc1), div = createElement('div'), table = createElement('table'), tbody = createElement('tbody'), tr = createElement('tr'), isArray = Array.isArray, ArrayPrototype = Array.prototype, concat = ArrayPrototype.concat, filter = ArrayPrototype.filter, indexOf = ArrayPrototype.indexOf, map = ArrayPrototype.map, push = ArrayPrototype.push, slice = ArrayPrototype.slice, some = ArrayPrototype.some, splice = ArrayPrototype.splice;
    var idRe = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, classRe = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, htmlRe = /<.+>/, tagRe = /^\w+$/; // @require ./variables.ts
    function find(selector, context) {
        var isFragment = isDocumentFragment(context);
        return !selector || !isFragment && !isDocument(context) && !isElement(context) ? [] : !isFragment && classRe.test(selector) ? context.getElementsByClassName(selector.slice(1)) : !isFragment && tagRe.test(selector) ? context.getElementsByTagName(selector) : context.querySelectorAll(selector);
    } // @require ./find.ts
    // @require ./variables.ts
    var Cash1 = /** @class */ function() {
        function Cash(selector, context) {
            if (!selector) return;
            if (isCash(selector)) return selector;
            var eles = selector;
            if (isString(selector)) {
                var ctx = (isCash(context) ? context[0] : context) || doc1;
                eles = idRe.test(selector) && 'getElementById' in ctx ? ctx.getElementById(selector.slice(1)) : htmlRe.test(selector) ? parseHTML(selector) : find(selector, ctx);
                if (!eles) return;
            } else if (isFunction(selector)) return this.ready(selector); //FIXME: `fn.ready` is not included in `core`, but it's actually a core functionality
            if (eles.nodeType || eles === win) eles = [
                eles
            ];
            this.length = eles.length;
            for(var i = 0, l = this.length; i < l; i++)this[i] = eles[i];
        }
        Cash.prototype.init = function(selector, context) {
            return new Cash(selector, context);
        };
        return Cash;
    }();
    var fn1 = Cash1.prototype, cash = fn1.init;
    cash.fn = cash.prototype = fn1; // Ensuring that `cash () instanceof cash`
    fn1.length = 0;
    fn1.splice = splice; // Ensuring a cash collection gets printed as array-like in Chrome's devtools
    if (typeof Symbol === 'function') // Ensuring a cash collection is iterable
    fn1[Symbol['iterator']] = ArrayPrototype[Symbol['iterator']];
    fn1.map = function(callback) {
        return cash(concat.apply([], map.call(this, function(ele, i) {
            return callback.call(ele, i, ele);
        })));
    };
    fn1.slice = function(start, end) {
        return cash(slice.call(this, start, end));
    }; // @require ./cash.ts
    var dashAlphaRe = /-([a-z])/g;
    function camelCase(str) {
        return str.replace(dashAlphaRe, function(match, letter) {
            return letter.toUpperCase();
        });
    }
    cash.guid = 1; // @require ./cash.ts
    function matches1(ele, selector) {
        var matches = ele && (ele['matches'] || ele['webkitMatchesSelector'] || ele['msMatchesSelector']);
        return !!matches && !!selector && matches.call(ele, selector);
    }
    function isCash(x) {
        return x instanceof Cash1;
    }
    function isWindow(x) {
        return !!x && x === x.window;
    }
    function isDocument(x) {
        return !!x && x.nodeType === 9;
    }
    function isDocumentFragment(x) {
        return !!x && x.nodeType === 11;
    }
    function isElement(x) {
        return !!x && x.nodeType === 1;
    }
    function isBoolean(x) {
        return typeof x === 'boolean';
    }
    function isFunction(x) {
        return typeof x === 'function';
    }
    function isString(x) {
        return typeof x === 'string';
    }
    function isUndefined(x) {
        return x === undefined;
    }
    function isNull(x) {
        return x === null;
    }
    function isNumeric(x) {
        return !isNaN(parseFloat(x)) && isFinite(x);
    }
    function isPlainObject(x) {
        if (typeof x !== 'object' || x === null) return false;
        var proto = Object.getPrototypeOf(x);
        return proto === null || proto === Object.prototype;
    }
    cash.isWindow = isWindow;
    cash.isFunction = isFunction;
    cash.isArray = isArray;
    cash.isNumeric = isNumeric;
    cash.isPlainObject = isPlainObject;
    fn1.get = function(index) {
        if (isUndefined(index)) return slice.call(this);
        index = Number(index);
        return this[index < 0 ? index + this.length : index];
    };
    fn1.eq = function(index) {
        return cash(this.get(index));
    };
    fn1.first = function() {
        return this.eq(0);
    };
    fn1.last = function() {
        return this.eq(-1);
    };
    function each(arr, callback, _reverse) {
        if (_reverse) {
            var i = arr.length;
            while(i--){
                if (callback.call(arr[i], i, arr[i]) === false) return arr;
            }
        } else if (isPlainObject(arr)) {
            var keys = Object.keys(arr);
            for(var i = 0, l = keys.length; i < l; i++){
                var key = keys[i];
                if (callback.call(arr[key], key, arr[key]) === false) return arr;
            }
        } else for(var i = 0, l = arr.length; i < l; i++){
            if (callback.call(arr[i], i, arr[i]) === false) return arr;
        }
        return arr;
    }
    cash.each = each;
    fn1.each = function(callback) {
        return each(this, callback);
    };
    fn1.prop = function(prop, value) {
        if (!prop) return;
        if (isString(prop)) {
            prop = propMap[prop] || prop;
            if (arguments.length < 2) return this[0] && this[0][prop];
            return this.each(function(i, ele) {
                ele[prop] = value;
            });
        }
        for(var key in prop)this.prop(key, prop[key]);
        return this;
    };
    fn1.removeProp = function(prop) {
        return this.each(function(i, ele) {
            delete ele[propMap[prop] || prop];
        });
    };
    function extend() {
        var sources = [];
        for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
        var deep = isBoolean(sources[0]) ? sources.shift() : false, target = sources.shift(), length = sources.length;
        if (!target) return {
        };
        if (!length) return extend(deep, cash, target);
        for(var i = 0; i < length; i++){
            var source = sources[i];
            for(var key in source)if (deep && (isArray(source[key]) || isPlainObject(source[key]))) {
                if (!target[key] || target[key].constructor !== source[key].constructor) target[key] = new source[key].constructor();
                extend(deep, target[key], source[key]);
            } else target[key] = source[key];
        }
        return target;
    }
    cash.extend = extend;
    fn1.extend = function(plugins) {
        return extend(fn1, plugins);
    }; // @require ./matches.ts
    // @require ./type_checking.ts
    function getCompareFunction(comparator) {
        return isString(comparator) ? function(i, ele) {
            return matches1(ele, comparator);
        } : isFunction(comparator) ? comparator : isCash(comparator) ? function(i, ele) {
            return comparator.is(ele);
        } : !comparator ? function() {
            return false;
        } : function(i, ele) {
            return ele === comparator;
        };
    }
    fn1.filter = function(comparator) {
        var compare = getCompareFunction(comparator);
        return cash(filter.call(this, function(ele, i) {
            return compare.call(ele, i, ele);
        }));
    }; // @require collection/filter.ts
    function filtered1(collection, comparator) {
        return !comparator ? collection : collection.filter(comparator);
    } // @require ./type_checking.ts
    var splitValuesRe = /\S+/g;
    function getSplitValues(str) {
        return isString(str) ? str.match(splitValuesRe) || [] : [];
    }
    fn1.hasClass = function(cls) {
        return !!cls && some.call(this, function(ele) {
            return isElement(ele) && ele.classList.contains(cls);
        });
    };
    fn1.removeAttr = function(attr) {
        var attrs = getSplitValues(attr);
        return this.each(function(i, ele) {
            if (!isElement(ele)) return;
            each(attrs, function(i, a) {
                ele.removeAttribute(a);
            });
        });
    };
    function attr1(attr, value) {
        if (!attr) return;
        if (isString(attr)) {
            if (arguments.length < 2) {
                if (!this[0] || !isElement(this[0])) return;
                var value_1 = this[0].getAttribute(attr);
                return isNull(value_1) ? undefined : value_1;
            }
            if (isUndefined(value)) return this;
            if (isNull(value)) return this.removeAttr(attr);
            return this.each(function(i, ele) {
                if (!isElement(ele)) return;
                ele.setAttribute(attr, value);
            });
        }
        for(var key in attr)this.attr(key, attr[key]);
        return this;
    }
    fn1.attr = attr1;
    fn1.toggleClass = function(cls, force) {
        var classes = getSplitValues(cls), isForce = !isUndefined(force);
        return this.each(function(i, ele) {
            if (!isElement(ele)) return;
            each(classes, function(i, c) {
                if (isForce) force ? ele.classList.add(c) : ele.classList.remove(c);
                else ele.classList.toggle(c);
            });
        });
    };
    fn1.addClass = function(cls) {
        return this.toggleClass(cls, true);
    };
    fn1.removeClass = function(cls) {
        if (arguments.length) return this.toggleClass(cls, false);
        return this.attr('class', '');
    };
    function pluck(arr, prop, deep, until) {
        var plucked = [], isCallback = isFunction(prop), compare = until && getCompareFunction(until);
        for(var i = 0, l = arr.length; i < l; i++)if (isCallback) {
            var val_1 = prop(arr[i]);
            if (val_1.length) push.apply(plucked, val_1);
        } else {
            var val_2 = arr[i][prop];
            while(val_2 != null){
                if (until && compare(-1, val_2)) break;
                plucked.push(val_2);
                val_2 = deep ? val_2[prop] : null;
            }
        }
        return plucked;
    }
    function unique(arr) {
        return arr.length > 1 ? filter.call(arr, function(item, index, self) {
            return indexOf.call(self, item) === index;
        }) : arr;
    }
    cash.unique = unique;
    fn1.add = function(selector, context) {
        return cash(unique(this.get().concat(cash(selector, context).get())));
    }; // @require core/type_checking.ts
    // @require core/variables.ts
    function computeStyle(ele, prop, isVariable) {
        if (!isElement(ele)) return;
        var style = win.getComputedStyle(ele, null);
        return isVariable ? style.getPropertyValue(prop) || undefined : style[prop] || ele.style[prop];
    } // @require ./compute_style.ts
    function computeStyleInt(ele, prop) {
        return parseInt(computeStyle(ele, prop), 10) || 0;
    }
    var cssVariableRe = /^--/; // @require ./variables.ts
    function isCSSVariable(prop) {
        return cssVariableRe.test(prop);
    } // @require core/camel_case.ts
    // @require core/cash.ts
    // @require core/each.ts
    // @require core/variables.ts
    // @require ./is_css_variable.ts
    var prefixedProps = {
    }, style1 = div.style, vendorsPrefixes = [
        'webkit',
        'moz',
        'ms'
    ];
    function getPrefixedProp(prop, isVariable) {
        if (isVariable === void 0) isVariable = isCSSVariable(prop);
        if (isVariable) return prop;
        if (!prefixedProps[prop]) {
            var propCC = camelCase(prop), propUC = "" + propCC[0].toUpperCase() + propCC.slice(1), props = (propCC + " " + vendorsPrefixes.join(propUC + " ") + propUC).split(' ');
            each(props, function(i, p) {
                if (p in style1) {
                    prefixedProps[prop] = p;
                    return false;
                }
            });
        }
        return prefixedProps[prop];
    }
    // @require ./is_css_variable.ts
    var numericProps = {
        animationIterationCount: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        widows: true,
        zIndex: true
    };
    function getSuffixedValue(prop, value, isVariable) {
        if (isVariable === void 0) isVariable = isCSSVariable(prop);
        return !isVariable && !numericProps[prop] && isNumeric(value) ? value + "px" : value;
    }
    function css(prop, value) {
        if (isString(prop)) {
            var isVariable_1 = isCSSVariable(prop);
            prop = getPrefixedProp(prop, isVariable_1);
            if (arguments.length < 2) return this[0] && computeStyle(this[0], prop, isVariable_1);
            if (!prop) return this;
            value = getSuffixedValue(prop, value, isVariable_1);
            return this.each(function(i, ele) {
                if (!isElement(ele)) return;
                if (isVariable_1) ele.style.setProperty(prop, value);
                else ele.style[prop] = value;
            });
        }
        for(var key in prop)this.css(key, prop[key]);
        return this;
    }
    fn1.css = css; // @optional ./css.ts
    // @require core/attempt.ts
    // @require core/camel_case.ts
    var JSONStringRe = /^\s+|\s+$/;
    function getData(ele, key) {
        var value = ele.dataset[key] || ele.dataset[camelCase(key)];
        if (JSONStringRe.test(value)) return value;
        return attempt(JSON.parse, value);
    } // @require core/attempt.ts
    // @require core/camel_case.ts
    function setData(ele, key, value) {
        value = attempt(JSON.stringify, value);
        ele.dataset[camelCase(key)] = value;
    }
    function data1(name, value) {
        if (!name) {
            if (!this[0]) return;
            var datas = {
            };
            for(var key in this[0].dataset)datas[key] = getData(this[0], key);
            return datas;
        }
        if (isString(name)) {
            if (arguments.length < 2) return this[0] && getData(this[0], name);
            if (isUndefined(value)) return this;
            return this.each(function(i, ele) {
                setData(ele, name, value);
            });
        }
        for(var key in name)this.data(key, name[key]);
        return this;
    }
    fn1.data = data1; // @optional ./data.ts
    function getDocumentDimension(doc, dimension) {
        var docEle = doc.documentElement;
        return Math.max(doc.body["scroll" + dimension], docEle["scroll" + dimension], doc.body["offset" + dimension], docEle["offset" + dimension], docEle["client" + dimension]);
    } // @require css/helpers/compute_style_int.ts
    function getExtraSpace(ele, xAxis) {
        return computeStyleInt(ele, "border" + (xAxis ? 'Left' : 'Top') + "Width") + computeStyleInt(ele, "padding" + (xAxis ? 'Left' : 'Top')) + computeStyleInt(ele, "padding" + (xAxis ? 'Right' : 'Bottom')) + computeStyleInt(ele, "border" + (xAxis ? 'Right' : 'Bottom') + "Width");
    }
    each([
        true,
        false
    ], function(i1, outer) {
        each([
            'Width',
            'Height'
        ], function(i, prop) {
            var name = "" + (outer ? 'outer' : 'inner') + prop;
            fn1[name] = function(includeMargins) {
                if (!this[0]) return;
                if (isWindow(this[0])) return outer ? this[0]["inner" + prop] : this[0].document.documentElement["client" + prop];
                if (isDocument(this[0])) return getDocumentDimension(this[0], prop);
                return this[0]["" + (outer ? 'offset' : 'client') + prop] + (includeMargins && outer ? computeStyleInt(this[0], "margin" + (i ? 'Top' : 'Left')) + computeStyleInt(this[0], "margin" + (i ? 'Bottom' : 'Right')) : 0);
            };
        });
    });
    each([
        'Width',
        'Height'
    ], function(index, prop) {
        var propLC = prop.toLowerCase();
        fn1[propLC] = function(value) {
            if (!this[0]) return isUndefined(value) ? undefined : this;
            if (!arguments.length) {
                if (isWindow(this[0])) return this[0].document.documentElement["client" + prop];
                if (isDocument(this[0])) return getDocumentDimension(this[0], prop);
                return this[0].getBoundingClientRect()[propLC] - getExtraSpace(this[0], !index);
            }
            var valueNumber = parseInt(value, 10);
            return this.each(function(i, ele) {
                if (!isElement(ele)) return;
                var boxSizing = computeStyle(ele, 'boxSizing');
                ele.style[propLC] = getSuffixedValue(propLC, valueNumber + (boxSizing === 'border-box' ? getExtraSpace(ele, !index) : 0));
            });
        };
    }); // @optional ./inner_outer.ts
    // @optional ./normal.ts
    // @require css/helpers/compute_style.ts
    var defaultDisplay = {
    };
    function getDefaultDisplay(tagName) {
        if (defaultDisplay[tagName]) return defaultDisplay[tagName];
        var ele = createElement(tagName);
        doc1.body.insertBefore(ele, null);
        var display = computeStyle(ele, 'display');
        doc1.body.removeChild(ele);
        return defaultDisplay[tagName] = display !== 'none' ? display : 'block';
    } // @require css/helpers/compute_style.ts
    function isHidden(ele) {
        return computeStyle(ele, 'display') === 'none';
    }
    var displayProperty = '___cd';
    fn1.toggle = function(force) {
        return this.each(function(i, ele) {
            if (!isElement(ele)) return;
            var show = isUndefined(force) ? isHidden(ele) : force;
            if (show) {
                ele.style.display = ele[displayProperty] || '';
                if (isHidden(ele)) ele.style.display = getDefaultDisplay(ele.tagName);
            } else {
                ele[displayProperty] = computeStyle(ele, 'display');
                ele.style.display = 'none';
            }
        });
    };
    fn1.hide = function() {
        return this.toggle(false);
    };
    fn1.show = function() {
        return this.toggle(true);
    }; // @optional ./hide.ts
    // @optional ./show.ts
    // @optional ./toggle.ts
    function hasNamespaces(ns1, ns2) {
        return !ns2 || !some.call(ns2, function(ns) {
            return ns1.indexOf(ns) < 0;
        });
    }
    var eventsNamespace = '___ce', eventsNamespacesSeparator = '.', eventsFocus = {
        focus: 'focusin',
        blur: 'focusout'
    }, eventsHover = {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout'
    }, eventsMouseRe = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i; // @require ./variables.ts
    function getEventNameBubbling(name) {
        return eventsHover[name] || eventsFocus[name] || name;
    } // @require ./variables.ts
    function getEventsCache(ele) {
        return ele[eventsNamespace] = ele[eventsNamespace] || {
        };
    } // @require core/guid.ts
    // @require events/helpers/get_events_cache.ts
    function addEvent(ele, name, namespaces, selector, callback) {
        var eventCache = getEventsCache(ele);
        eventCache[name] = eventCache[name] || [];
        eventCache[name].push([
            namespaces,
            selector,
            callback
        ]);
        ele.addEventListener(name, callback);
    } // @require ./variables.ts
    function parseEventName(eventName) {
        var parts = eventName.split(eventsNamespacesSeparator);
        return [
            parts[0],
            parts.slice(1).sort()
        ]; // [name, namespace[]]
    } // @require ./get_events_cache.ts
    // @require ./has_namespaces.ts
    // @require ./parse_event_name.ts
    function removeEvent(ele, name, namespaces, selector, callback) {
        var cache = getEventsCache(ele);
        if (!name) for(name in cache)removeEvent(ele, name, namespaces, selector, callback);
        else if (cache[name]) cache[name] = cache[name].filter(function(_a) {
            var ns = _a[0], sel = _a[1], cb = _a[2];
            if (callback && cb.guid !== callback.guid || !hasNamespaces(ns, namespaces) || selector && selector !== sel) return true;
            ele.removeEventListener(name, cb);
        });
    }
    fn1.off = function(eventFullName1, selector, callback) {
        var _this = this;
        if (isUndefined(eventFullName1)) this.each(function(i, ele) {
            if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
            removeEvent(ele);
        });
        else if (!isString(eventFullName1)) for(var key in eventFullName1)this.off(key, eventFullName1[key]);
        else {
            if (isFunction(selector)) {
                callback = selector;
                selector = '';
            }
            each(getSplitValues(eventFullName1), function(i, eventFullName) {
                var _a = parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1], name = getEventNameBubbling(nameOriginal);
                _this.each(function(i, ele) {
                    if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
                    removeEvent(ele, name, namespaces, selector, callback);
                });
            });
        }
        return this;
    };
    function on(eventFullName2, selector, data, callback, _one) {
        var _this = this;
        if (!isString(eventFullName2)) {
            for(var key in eventFullName2)this.on(key, selector, data, eventFullName2[key], _one);
            return this;
        }
        if (!isString(selector)) {
            if (isUndefined(selector) || isNull(selector)) selector = '';
            else if (isUndefined(data)) {
                data = selector;
                selector = '';
            } else {
                callback = data;
                data = selector;
                selector = '';
            }
        }
        if (!isFunction(callback)) {
            callback = data;
            data = undefined;
        }
        if (!callback) return this;
        each(getSplitValues(eventFullName2), function(i, eventFullName) {
            var _a = parseEventName(eventFullName), nameOriginal = _a[0], namespaces = _a[1], name = getEventNameBubbling(nameOriginal), isEventHover = nameOriginal in eventsHover, isEventFocus = nameOriginal in eventsFocus;
            if (!name) return;
            _this.each(function(i, ele) {
                if (!isElement(ele) && !isDocument(ele) && !isWindow(ele)) return;
                var finalCallback1 = function finalCallback(event) {
                    if (event.target["___i" + event.type]) return event.stopImmediatePropagation(); // Ignoring native event in favor of the upcoming custom one
                    if (event.namespace && !hasNamespaces(namespaces, event.namespace.split(eventsNamespacesSeparator))) return;
                    if (!selector && (isEventFocus && (event.target !== ele || event.___ot === name) || isEventHover && event.relatedTarget && ele.contains(event.relatedTarget))) return;
                    var thisArg = ele;
                    if (selector) {
                        var target = event.target;
                        while(!matches1(target, selector)){
                            if (target === ele) return;
                            target = target.parentNode;
                            if (!target) return;
                        }
                        thisArg = target;
                    }
                    Object.defineProperty(event, 'currentTarget', {
                        configurable: true,
                        get: function get() {
                            return thisArg;
                        }
                    });
                    Object.defineProperty(event, 'delegateTarget', {
                        configurable: true,
                        get: function get() {
                            return ele;
                        }
                    });
                    Object.defineProperty(event, 'data', {
                        configurable: true,
                        get: function get() {
                            return data;
                        }
                    });
                    var returnValue = callback.call(thisArg, event, event.___td);
                    if (_one) removeEvent(ele, name, namespaces, selector, finalCallback);
                    if (returnValue === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                };
                finalCallback1.guid = callback.guid = callback.guid || cash.guid++;
                addEvent(ele, name, namespaces, selector, finalCallback1);
            });
        });
        return this;
    }
    fn1.on = on;
    function one(eventFullName, selector, data, callback) {
        return this.on(eventFullName, selector, data, callback, true);
    }
    fn1.one = one;
    fn1.ready = function(callback) {
        var cb = function cb() {
            return setTimeout(callback, 0, cash);
        };
        if (doc1.readyState !== 'loading') cb();
        else doc1.addEventListener('DOMContentLoaded', cb);
        return this;
    };
    fn1.trigger = function(event, data) {
        if (isString(event)) {
            var _a = parseEventName(event), nameOriginal = _a[0], namespaces = _a[1], name_1 = getEventNameBubbling(nameOriginal);
            if (!name_1) return this;
            var type = eventsMouseRe.test(name_1) ? 'MouseEvents' : 'HTMLEvents';
            event = doc1.createEvent(type);
            event.initEvent(name_1, true, true);
            event.namespace = namespaces.join(eventsNamespacesSeparator);
            event.___ot = nameOriginal;
        }
        event.___td = data;
        var isEventFocus = event.___ot in eventsFocus;
        return this.each(function(i, ele) {
            if (isEventFocus && isFunction(ele[event.___ot])) {
                ele["___i" + event.type] = true; // Ensuring the native event is ignored
                ele[event.___ot]();
                ele["___i" + event.type] = false; // Ensuring the custom event is not ignored
            }
            ele.dispatchEvent(event);
        });
    }; // @optional ./off.ts
    // @optional ./on.ts
    // @optional ./one.ts
    // @optional ./ready.ts
    // @optional ./trigger.ts
    // @require core/pluck.ts
    // @require core/variables.ts
    function getValue(ele) {
        if (ele.multiple && ele.options) return pluck(filter.call(ele.options, function(option) {
            return option.selected && !option.disabled && !option.parentNode.disabled;
        }), 'value');
        return ele.value || '';
    }
    var queryEncodeSpaceRe = /%20/g, queryEncodeCRLFRe = /\r?\n/g;
    function queryEncode(prop, value) {
        return "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(value.replace(queryEncodeCRLFRe, '\r\n')).replace(queryEncodeSpaceRe, '+');
    }
    var skippableRe = /file|reset|submit|button|image/i, checkableRe = /radio|checkbox/i;
    fn1.serialize = function() {
        var query = '';
        this.each(function(i, ele1) {
            each(ele1.elements || [
                ele1
            ], function(i, ele) {
                if (ele.disabled || !ele.name || ele.tagName === 'FIELDSET' || skippableRe.test(ele.type) || checkableRe.test(ele.type) && !ele.checked) return;
                var value1 = getValue(ele);
                if (!isUndefined(value1)) {
                    var values = isArray(value1) ? value1 : [
                        value1
                    ];
                    each(values, function(i, value) {
                        query += queryEncode(ele.name, value);
                    });
                }
            });
        });
        return query.slice(1);
    };
    function val(value) {
        if (!arguments.length) return this[0] && getValue(this[0]);
        return this.each(function(i, ele) {
            var isSelect = ele.multiple && ele.options;
            if (isSelect || checkableRe.test(ele.type)) {
                var eleValue_1 = isArray(value) ? map.call(value, String) : isNull(value) ? [] : [
                    String(value)
                ];
                if (isSelect) each(ele.options, function(i, option) {
                    option.selected = eleValue_1.indexOf(option.value) >= 0;
                }, true);
                else ele.checked = eleValue_1.indexOf(ele.value) >= 0;
            } else ele.value = isUndefined(value) || isNull(value) ? '' : value;
        });
    }
    fn1.val = val;
    fn1.clone = function() {
        return this.map(function(i, ele) {
            return ele.cloneNode(true);
        });
    };
    fn1.detach = function(comparator) {
        filtered1(this, comparator).each(function(i, ele) {
            if (ele.parentNode) ele.parentNode.removeChild(ele);
        });
        return this;
    };
    var fragmentRe = /^\s*<(\w+)[^>]*>/, singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
    var containers = {
        '*': div,
        tr: tbody,
        td: tr,
        th: tr,
        thead: table,
        tbody: table,
        tfoot: table
    }; //TODO: Create elements inside a document fragment, in order to prevent inline event handlers from firing
    //TODO: Ensure the created elements have the fragment as their parent instead of null, this also ensures we can deal with detatched nodes more reliably
    function parseHTML(html) {
        if (!isString(html)) return [];
        if (singleTagRe.test(html)) return [
            createElement(RegExp.$1)
        ];
        var fragment = fragmentRe.test(html) && RegExp.$1, container = containers[fragment] || containers['*'];
        container.innerHTML = html;
        return cash(container.childNodes).detach().get();
    }
    cash.parseHTML = parseHTML;
    fn1.empty = function() {
        return this.each(function(i, ele) {
            while(ele.firstChild)ele.removeChild(ele.firstChild);
        });
    };
    function html1(html) {
        if (!arguments.length) return this[0] && this[0].innerHTML;
        if (isUndefined(html)) return this;
        return this.each(function(i, ele) {
            if (!isElement(ele)) return;
            ele.innerHTML = html;
        });
    }
    fn1.html = html1;
    fn1.remove = function(comparator) {
        filtered1(this, comparator).detach().off();
        return this;
    };
    function text1(text) {
        if (isUndefined(text)) return this[0] ? this[0].textContent : '';
        return this.each(function(i, ele) {
            if (!isElement(ele)) return;
            ele.textContent = text;
        });
    }
    fn1.text = text1;
    fn1.unwrap = function() {
        this.parent().each(function(i, ele) {
            if (ele.tagName === 'BODY') return;
            var $ele = cash(ele);
            $ele.replaceWith($ele.children());
        });
        return this;
    };
    fn1.offset = function() {
        var ele = this[0];
        if (!ele) return;
        var rect = ele.getBoundingClientRect();
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    };
    fn1.offsetParent = function() {
        return this.map(function(i, ele) {
            var offsetParent = ele.offsetParent;
            while(offsetParent && computeStyle(offsetParent, 'position') === 'static')offsetParent = offsetParent.offsetParent;
            return offsetParent || docEle1;
        });
    };
    fn1.position = function() {
        var ele = this[0];
        if (!ele) return;
        var isFixed = computeStyle(ele, 'position') === 'fixed', offset = isFixed ? ele.getBoundingClientRect() : this.offset();
        if (!isFixed) {
            var doc_1 = ele.ownerDocument;
            var offsetParent = ele.offsetParent || doc_1.documentElement;
            while((offsetParent === doc_1.body || offsetParent === doc_1.documentElement) && computeStyle(offsetParent, 'position') === 'static')offsetParent = offsetParent.parentNode;
            if (offsetParent !== ele && isElement(offsetParent)) {
                var parentOffset = cash(offsetParent).offset();
                offset.top -= parentOffset.top + computeStyleInt(offsetParent, 'borderTopWidth');
                offset.left -= parentOffset.left + computeStyleInt(offsetParent, 'borderLeftWidth');
            }
        }
        return {
            top: offset.top - computeStyleInt(ele, 'marginTop'),
            left: offset.left - computeStyleInt(ele, 'marginLeft')
        };
    };
    fn1.children = function(comparator) {
        return filtered1(cash(unique(pluck(this, function(ele) {
            return ele.children;
        }))), comparator);
    };
    fn1.contents = function() {
        return cash(unique(pluck(this, function(ele) {
            return ele.tagName === 'IFRAME' ? [
                ele.contentDocument
            ] : ele.tagName === 'TEMPLATE' ? ele.content.childNodes : ele.childNodes;
        })));
    };
    fn1.find = function(selector) {
        return cash(unique(pluck(this, function(ele) {
            return find(selector, ele);
        })));
    }; // @require core/variables.ts
    // @require collection/filter.ts
    // @require traversal/find.ts
    var HTMLCDATARe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, scriptTypeRe = /^$|^module$|\/(java|ecma)script/i, scriptAttributes = [
        'type',
        'src',
        'nonce',
        'noModule'
    ];
    function evalScripts(node, doc) {
        var collection = cash(node);
        collection.filter('script').add(collection.find('script')).each(function(i, ele) {
            if (scriptTypeRe.test(ele.type) && docEle1.contains(ele)) {
                // The script type is supported // The element is attached to the DOM // Using `documentElement` for broader browser support
                var script_1 = createElement('script');
                script_1.text = ele.textContent.replace(HTMLCDATARe, '');
                each(scriptAttributes, function(i, attr) {
                    if (ele[attr]) script_1[attr] = ele[attr];
                });
                doc.head.insertBefore(script_1, null);
                doc.head.removeChild(script_1);
            }
        });
    } // @require ./eval_scripts.ts
    function insertElement(anchor, target, left, inside, evaluate) {
        if (inside) // prepend/append
        anchor.insertBefore(target, left ? anchor.firstChild : null);
        else // before/after
        if (anchor.nodeName === 'HTML') anchor.parentNode.replaceChild(target, anchor);
        else anchor.parentNode.insertBefore(target, left ? anchor : anchor.nextSibling);
        if (evaluate) evalScripts(target, anchor.ownerDocument);
    } // @require ./insert_element.ts
    function insertSelectors(selectors, anchors, inverse, left, inside, reverseLoop1, reverseLoop2, reverseLoop3) {
        each(selectors, function(si, selector) {
            each(cash(selector), function(ti, target) {
                each(cash(anchors), function(ai, anchor) {
                    var anchorFinal = inverse ? target : anchor, targetFinal = inverse ? anchor : target, indexFinal = inverse ? ti : ai;
                    insertElement(anchorFinal, !indexFinal ? targetFinal : targetFinal.cloneNode(true), left, inside, !indexFinal);
                }, reverseLoop3);
            }, reverseLoop2);
        }, reverseLoop1);
        return anchors;
    }
    fn1.after = function() {
        return insertSelectors(arguments, this, false, false, false, true, true);
    };
    fn1.append = function() {
        return insertSelectors(arguments, this, false, false, true);
    };
    fn1.appendTo = function(selector) {
        return insertSelectors(arguments, this, true, false, true);
    };
    fn1.before = function() {
        return insertSelectors(arguments, this, false, true);
    };
    fn1.insertAfter = function(selector) {
        return insertSelectors(arguments, this, true, false, false, false, false, true);
    };
    fn1.insertBefore = function(selector) {
        return insertSelectors(arguments, this, true, true);
    };
    fn1.prepend = function() {
        return insertSelectors(arguments, this, false, true, true, true, true);
    };
    fn1.prependTo = function(selector) {
        return insertSelectors(arguments, this, true, true, true, false, false, true);
    };
    fn1.replaceWith = function(selector) {
        return this.before(selector).remove();
    };
    fn1.replaceAll = function(selector) {
        cash(selector).replaceWith(this);
        return this;
    };
    fn1.wrapAll = function(selector) {
        var structure = cash(selector), wrapper = structure[0];
        while(wrapper.children.length)wrapper = wrapper.firstElementChild;
        this.first().before(structure);
        return this.appendTo(wrapper);
    };
    fn1.wrap = function(selector) {
        return this.each(function(i, ele) {
            var wrapper = cash(selector)[0];
            cash(ele).wrapAll(!i ? wrapper : wrapper.cloneNode(true));
        });
    };
    fn1.wrapInner = function(selector) {
        return this.each(function(i, ele) {
            var $ele = cash(ele), contents = $ele.contents();
            contents.length ? contents.wrapAll(selector) : $ele.append(selector);
        });
    };
    fn1.has = function(selector) {
        var comparator = isString(selector) ? function(i, ele) {
            return find(selector, ele).length;
        } : function(i, ele) {
            return ele.contains(selector);
        };
        return this.filter(comparator);
    };
    fn1.is = function(comparator) {
        var compare = getCompareFunction(comparator);
        return some.call(this, function(ele, i) {
            return compare.call(ele, i, ele);
        });
    };
    fn1.next = function(comparator, _all, _until) {
        return filtered1(cash(unique(pluck(this, 'nextElementSibling', _all, _until))), comparator);
    };
    fn1.nextAll = function(comparator) {
        return this.next(comparator, true);
    };
    fn1.nextUntil = function(until, comparator) {
        return this.next(comparator, true, until);
    };
    fn1.not = function(comparator) {
        var compare = getCompareFunction(comparator);
        return this.filter(function(i, ele) {
            return (!isString(comparator) || isElement(ele)) && !compare.call(ele, i, ele);
        });
    };
    fn1.parent = function(comparator) {
        return filtered1(cash(unique(pluck(this, 'parentNode'))), comparator);
    };
    fn1.index = function(selector) {
        var child = selector ? cash(selector)[0] : this[0], collection = selector ? this : cash(child).parent().children();
        return indexOf.call(collection, child);
    };
    fn1.closest = function(comparator) {
        var filtered = this.filter(comparator);
        if (filtered.length) return filtered;
        var $parent = this.parent();
        if (!$parent.length) return filtered;
        return $parent.closest(comparator);
    };
    fn1.parents = function(comparator, _until) {
        return filtered1(cash(unique(pluck(this, 'parentElement', true, _until))), comparator);
    };
    fn1.parentsUntil = function(until, comparator) {
        return this.parents(comparator, until);
    };
    fn1.prev = function(comparator, _all, _until) {
        return filtered1(cash(unique(pluck(this, 'previousElementSibling', _all, _until))), comparator);
    };
    fn1.prevAll = function(comparator) {
        return this.prev(comparator, true);
    };
    fn1.prevUntil = function(until, comparator) {
        return this.prev(comparator, true, until);
    };
    fn1.siblings = function(comparator) {
        return filtered1(cash(unique(pluck(this, function(ele) {
            return cash(ele).parent().children().not(ele);
        }))), comparator);
    }; // @optional ./children.ts
    // @optional ./closest.ts
    // @optional ./contents.ts
    // @optional ./find.ts
    // @optional ./has.ts
    // @optional ./is.ts
    // @optional ./next.ts
    // @optional ./next_all.ts
    // @optional ./next_until.ts
    // @optional ./not.ts
    // @optional ./parent.ts
    // @optional ./parents.ts
    // @optional ./parents_until.ts
    // @optional ./prev.ts
    // @optional ./prev_all.ts
    // @optional ./prev_until.ts
    // @optional ./siblings.ts
    // @optional attributes/index.ts
    // @optional collection/index.ts
    // @optional css/index.ts
    // @optional data/index.ts
    // @optional dimensions/index.ts
    // @optional effects/index.ts
    // @optional events/index.ts
    // @optional forms/index.ts
    // @optional manipulation/index.ts
    // @optional offset/index.ts
    // @optional traversal/index.ts
    // @require core/index.ts
    // @priority -100
    // @require ./cash.ts
    // @require ./variables.ts
    if (typeof exports !== 'undefined') // Node.js
    module.exports = cash;
    else // Browser
    win['cash'] = win['$'] = cash;
})();

},{}],"5VQZs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Equals", ()=>Equals
);
var _onChange = require("on-change");
var _onChangeDefault = parcelHelpers.interopDefault(_onChange);
var _utilJs = require("./util.js");
const PLAYERS = [
    "Player One",
    "Player Two"
];
const CARDS_PER_PLAYER = PLAYERS.length < 4 ? 5 : 3;
const ACTIONS = {
    out: [],
    play: [
        "stack",
        "deck",
        "gold",
        "pass"
    ],
    start: [
        "stack",
        "deck",
        "pass"
    ],
    // TODO
    end: [
        "restart",
        "final"
    ],
    spectate: [],
    default: []
};
const RED = -1;
const GOLD = 0;
const BLUE = 1;
class Equals {
    PLAYERS = [];
    DECK = [];
    STACK = [];
    CARDS_STATE = [];
    MODES = {
    };
    CARDS_PER_PLAYER = PLAYERS.length < 4 ? 5 : 3;
    POINTS = {
    };
    ON_CHANGE = ()=>{
    };
    GAME_STATE = {
        startPlayer: "",
        gamesPlayed: 0,
        order: []
    };
    constructor(players){
        this.PLAYERS = players;
        const randomized = this.#randomizeDeck([
            ...players
        ]);
        this.GAME_STATE = {
            gamesPlayed: 0,
            order: randomized,
            startPlayer: randomized[0]
        };
        console.log(randomized);
        console.log(this);
    }
    // INITIALIZE DECK
     #randomizeDeck(deck) {
        let nd = [];
        for(let i = deck.length; i > 0; i--){
            const ri = _utilJs.randomBetween(0, i - 1);
            nd.push(deck[ri]);
            deck.splice(ri, 1);
        }
        return nd;
    }
     #initializeDeck() {
        let DECK = [];
        _utilJs.repeat(()=>DECK.push([
                RED,
                1
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                RED,
                2
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                RED,
                3
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                BLUE,
                1
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                BLUE,
                2
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                BLUE,
                3
            ])
        , 6);
        _utilJs.repeat(()=>DECK.push([
                GOLD,
                0
            ])
        , 8 - PLAYERS.length);
        const nd = this.#randomizeDeck(DECK);
        DECK = [
            ...nd
        ];
        const i = _utilJs.randomBetween(0, DECK.length);
        this.STACK.push(DECK[i]);
        DECK.splice(i, 1);
        this.DECK = DECK;
    }
    // DISTRIBUTE PLAYER CARDS
     #initializeCardsState() {
        let cardsState = [];
        for (let player of this.PLAYERS){
            cardsState[player] = [];
            for(let i = CARDS_PER_PLAYER; i > 0; i--)if (i == 1) cardsState[player].push([
                GOLD,
                0
            ]);
            else {
                let randomIndex = _utilJs.randomBetween(0, this.DECK.length - 1);
                while(randomIndex >= this.DECK.length || this.DECK[randomIndex][0] === GOLD)randomIndex = _utilJs.randomBetween(0, this.DECK.length);
                const card = [
                    ...this.DECK[randomIndex]
                ];
                cardsState[player].push(card);
                this.DECK.splice(randomIndex, 1);
            }
        }
        this.CARDS_STATE = cardsState;
    }
    // INITIALIZE MODES
     #initializeModes() {
        let mode = {
        };
        for (let player of this.PLAYERS){
            mode[player] = "out";
            if (player === this.GAME_STATE.startPlayer) mode[player] = "start";
        }
        this.MODES = mode;
    }
    // INITIALIZE POINTS
     #initializePoints() {
        for (let player of this.PLAYERS)this.POINTS[player] = 0;
    }
    // ON CHANGE LISTENER CALL METHODS
     #onChange() {
        this.ON_CHANGE?.();
    }
    // UTILITY CHANGE METHODS
     #setMode(player, mode, all) {
        if (all) for (let k of this.PLAYERS)this.MODES[k] = "end";
        this.MODES[player] = mode;
    }
     #setPoints(player1, points) {
        this.PLAYERS[player1] += Math.abs(points);
    }
    // CALCULATE PLAYER VALUE
     #calculatePlayerValue(player2) {
        return this.CARDS_STATE[player2].reduce((p, c)=>p + c[0] * c[1]
        , 0);
    }
    // P U B L I C   M E T H O D S
    // ADD CALLBACK
    listen(callback) {
        this.ON_CHANGE = callback;
    }
    // INITIALIZE ALL
    initialize() {
        this.#initializeDeck();
        this.#initializeCardsState();
        this.#initializeModes();
        this.#initializePoints();
        this.logPlayerValues();
    }
    // LOG RANKED PLAYER VALUES
    logPlayerValues() {
        let table = [];
        for (let player3 of Object.entries(this.CARDS_STATE)){
            const val = this.#calculatePlayerValue(player3[0]);
            table.push([
                player3[0],
                val
            ]);
        }
        table.sort((a, b)=>b[1] - a[1]
        );
        const newTable = Object.fromEntries(table);
        console.table(newTable);
        return newTable;
    }
    // CHANGE STATE
    interact(player4, action, data) {
        console.log("Interaction from", player4);
        console.log(action);
        console.log(data);
        const playerStatus = this.MODES[player4];
        const playerData = this.CARDS_STATE[player4];
        const stackCard = this.STACK.slice(-1)[0];
        const deckCard = this.DECK.slice(-1)[0];
        // VALIDATE THE ACTION
        const isValid = ACTIONS[playerStatus].includes(action);
        if (!isValid) throw new Error("Wrong action sent.");
        switch(action){
            case "stack":
                // take previous card dropped
                // take card from player
                if (!data) throw new Error("Card not dropped.");
                // remove the previous card
                this.STACK.splice(-1, 1);
                // push player's card
                this.STACK.push(data);
                // reshuffle deck
                this.DECK = this.#randomizeDeck(this.DECK);
                break;
            case "deck":
                // take top card from deck
                // take card from player
                if (!data) throw new Error("Card not dropped.");
                // remove the previous card
                this.DECK.splice(-1, 1);
                // push player's card
                this.STACK.push(data);
                // reshuffle deck
                this.DECK = this.#randomizeDeck(this.DECK);
                break;
            case "gold":
                // act the gold card
                const score = this.#calculatePlayerValue(player4);
                this.#setPoints(player4, score);
                if (PLAYERS.length > 2) this.#setMode(player4, "spectate");
                else this.#setMode(player4, "end", true);
                break;
            case "pass":
                // pass on turn
                this.#setMode(player4, "out");
                break;
            case "restart":
                break;
            case "final":
                break;
        }
        this.#onChange();
    }
    // STATE TO DISPLAY
    // returns: [promptType, promptText, actions, data]
    output(player) {
        const modeOfPlayer = this.MODES[player];
        const playerData = this.CARDS_STATE[player];
        const stackCard = this.STACK.slice(-1)[0];
        const deckCard = this.DECK.slice(-1)[0];
        switch(modeOfPlayer){
            case "out":
                return [
                    "not_turn_prompt",
                    "Not your turn yet!",
                    ACTIONS.out,
                    null, 
                ];
            case "play":
                return [
                    "round_prompt",
                    "Choose either the card at the top of the deck or draw a card from the deck.",
                    ACTIONS.play,
                    [
                        stackCard,
                        deckCard,
                        playerData
                    ], 
                ];
            case "start":
                return [
                    "start_prompt",
                    "Start the game by choosing either the card at the top of the stack or the deck.",
                    ACTIONS.start,
                    [
                        stackCard,
                        deckCard,
                        playerData
                    ], 
                ];
            case "end":
                return [
                    "end_prompt",
                    "The game has ended!",
                    ACTIONS.end,
                    this.POINTS, 
                ];
            case "spectate":
                return [
                    "spectate_prompt",
                    "You have to spectate, the game is continuing for others.",
                    ACTIONS.spectate,
                    this.CARDS_STATE, 
                ];
            default:
                return [
                    "error",
                    "Error: Unknown or unsupported status found!",
                    ACTIONS.default,
                    null, 
                ];
        }
    }
}

},{"on-change":"dzmLG","./util.js":"cgcsT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dzmLG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint-disable unicorn/prefer-spread */ var _constantsJs = require("./lib/constants.js");
var _isBuiltinJs = require("./lib/is-builtin.js");
var _pathJs = require("./lib/path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isSymbolJs = require("./lib/is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
var _isIteratorJs = require("./lib/is-iterator.js");
var _isIteratorJsDefault = parcelHelpers.interopDefault(_isIteratorJs);
var _wrapIteratorJs = require("./lib/wrap-iterator.js");
var _wrapIteratorJsDefault = parcelHelpers.interopDefault(_wrapIteratorJs);
var _ignorePropertyJs = require("./lib/ignore-property.js");
var _ignorePropertyJsDefault = parcelHelpers.interopDefault(_ignorePropertyJs);
var _cacheJs = require("./lib/cache.js");
var _cacheJsDefault = parcelHelpers.interopDefault(_cacheJs);
var _smartCloneJs = require("./lib/smart-clone/smart-clone.js");
var _smartCloneJsDefault = parcelHelpers.interopDefault(_smartCloneJs);
const defaultOptions = {
    equals: Object.is,
    isShallow: false,
    pathAsArray: false,
    ignoreSymbols: false,
    ignoreUnderscores: false,
    ignoreDetached: false,
    details: false
};
const onChange = (object, onChange1, options = {
})=>{
    options = {
        ...defaultOptions,
        ...options
    };
    const proxyTarget = Symbol('ProxyTarget');
    const { equals , isShallow , ignoreDetached , details  } = options;
    const cache = new _cacheJsDefault.default(equals);
    const hasOnValidate = typeof options.onValidate === 'function';
    const smartClone = new _smartCloneJsDefault.default(hasOnValidate);
    // eslint-disable-next-line max-params
    const validate = (target, property, value, previous, applyData)=>!hasOnValidate || smartClone.isCloning || options.onValidate(_pathJsDefault.default.concat(cache.getPath(target), property), value, previous, applyData) === true
    ;
    const handleChangeOnTarget = (target, property, value, previous)=>{
        if (!_ignorePropertyJsDefault.default(cache, options, property) && !(ignoreDetached && cache.isDetached(target, object))) handleChange(cache.getPath(target), property, value, previous);
    };
    // eslint-disable-next-line max-params
    const handleChange = (changePath, property, value, previous, applyData)=>{
        if (smartClone.isCloning) smartClone.update(changePath, property, previous);
        else onChange1(_pathJsDefault.default.concat(changePath, property), value, previous, applyData);
    };
    const getProxyTarget = (value)=>value ? value[proxyTarget] || value : value
    ;
    const prepareValue = (value, target, property, basePath)=>{
        if (_isBuiltinJs.isBuiltinWithoutMutableMethods(value) || property === 'constructor' || isShallow && !_smartCloneJsDefault.default.isHandledMethod(target, property) || _ignorePropertyJsDefault.default(cache, options, property) || cache.isGetInvariant(target, property) || ignoreDetached && cache.isDetached(target, object)) return value;
        if (basePath === undefined) basePath = cache.getPath(target);
        return cache.getProxy(value, _pathJsDefault.default.concat(basePath, property), handler, proxyTarget);
    };
    const handler = {
        get (target, property, receiver) {
            if (_isSymbolJsDefault.default(property)) {
                if (property === proxyTarget || property === _constantsJs.TARGET) return target;
                if (property === _constantsJs.UNSUBSCRIBE && !cache.isUnsubscribed && cache.getPath(target).length === 0) {
                    cache.unsubscribe();
                    return target;
                }
            }
            const value = _isBuiltinJs.isBuiltinWithMutableMethods(target) ? Reflect.get(target, property) : Reflect.get(target, property, receiver);
            return prepareValue(value, target, property);
        },
        set (target, property, value, receiver) {
            value = getProxyTarget(value);
            const reflectTarget = target[proxyTarget] || target;
            const previous = reflectTarget[property];
            if (equals(previous, value) && property in target) return true;
            const isValid = validate(target, property, value, previous);
            if (isValid && cache.setProperty(reflectTarget, property, value, receiver, previous)) {
                handleChangeOnTarget(target, property, target[property], previous);
                return true;
            }
            return !isValid;
        },
        defineProperty (target, property, descriptor) {
            if (!cache.isSameDescriptor(descriptor, target, property)) {
                const previous = target[property];
                if (validate(target, property, descriptor.value, previous) && cache.defineProperty(target, property, descriptor, previous)) handleChangeOnTarget(target, property, descriptor.value, previous);
            }
            return true;
        },
        deleteProperty (target, property) {
            if (!Reflect.has(target, property)) return true;
            const previous = Reflect.get(target, property);
            const isValid = validate(target, property, undefined, previous);
            if (isValid && cache.deleteProperty(target, property, previous)) {
                handleChangeOnTarget(target, property, undefined, previous);
                return true;
            }
            return !isValid;
        },
        apply (target, thisArg, argumentsList) {
            const thisProxyTarget = thisArg[proxyTarget] || thisArg;
            if (cache.isUnsubscribed) return Reflect.apply(target, thisProxyTarget, argumentsList);
            if ((details === false || details !== true && !details.includes(target.name)) && _smartCloneJsDefault.default.isHandledType(thisProxyTarget)) {
                let applyPath = _pathJsDefault.default.initial(cache.getPath(target));
                const isHandledMethod = _smartCloneJsDefault.default.isHandledMethod(thisProxyTarget, target.name);
                smartClone.start(thisProxyTarget, applyPath, argumentsList);
                let result = Reflect.apply(target, smartClone.preferredThisArg(target, thisArg, thisProxyTarget), isHandledMethod ? argumentsList.map((argument)=>getProxyTarget(argument)
                ) : argumentsList);
                const isChanged = smartClone.isChanged(thisProxyTarget, equals);
                const previous = smartClone.stop();
                if (_smartCloneJsDefault.default.isHandledType(result) && isHandledMethod) {
                    if (thisArg instanceof Map && target.name === 'get') applyPath = _pathJsDefault.default.concat(applyPath, argumentsList[0]);
                    result = cache.getProxy(result, applyPath, handler);
                }
                if (isChanged) {
                    const applyData = {
                        name: target.name,
                        args: argumentsList,
                        result
                    };
                    const changePath = smartClone.isCloning ? _pathJsDefault.default.initial(applyPath) : applyPath;
                    const property = smartClone.isCloning ? _pathJsDefault.default.last(applyPath) : '';
                    if (validate(_pathJsDefault.default.get(object, changePath), property, thisProxyTarget, previous, applyData)) handleChange(changePath, property, thisProxyTarget, previous, applyData);
                    else smartClone.undo(thisProxyTarget);
                }
                if ((thisArg instanceof Map || thisArg instanceof Set) && _isIteratorJsDefault.default(result)) return _wrapIteratorJsDefault.default(result, target, thisArg, applyPath, prepareValue);
                return result;
            }
            return Reflect.apply(target, thisArg, argumentsList);
        }
    };
    const proxy = cache.getProxy(object, options.pathAsArray ? [] : '', handler);
    onChange1 = onChange1.bind(proxy);
    if (hasOnValidate) options.onValidate = options.onValidate.bind(proxy); // eslint-disable-line unicorn/prefer-prototype-methods
    return proxy;
};
onChange.target = (proxy)=>proxy && proxy[_constantsJs.TARGET] || proxy
;
onChange.unsubscribe = (proxy)=>proxy[_constantsJs.UNSUBSCRIBE] || proxy
;
exports.default = onChange;

},{"./lib/constants.js":"1Uoep","./lib/is-builtin.js":"aCszl","./lib/path.js":"iEtjY","./lib/is-symbol.js":"1kB5C","./lib/is-iterator.js":"92Ixh","./lib/wrap-iterator.js":"8qfrh","./lib/ignore-property.js":"4ug92","./lib/cache.js":"d037F","./lib/smart-clone/smart-clone.js":"4nHqz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Uoep":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PATH_SEPARATOR", ()=>PATH_SEPARATOR
);
parcelHelpers.export(exports, "TARGET", ()=>TARGET
);
parcelHelpers.export(exports, "UNSUBSCRIBE", ()=>UNSUBSCRIBE
);
const PATH_SEPARATOR = '.';
const TARGET = Symbol('target');
const UNSUBSCRIBE = Symbol('unsubscribe');

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"aCszl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBuiltinWithMutableMethods", ()=>isBuiltinWithMutableMethods
);
parcelHelpers.export(exports, "isBuiltinWithoutMutableMethods", ()=>isBuiltinWithoutMutableMethods
);
function isBuiltinWithMutableMethods(value) {
    return value instanceof Date || value instanceof Set || value instanceof Map || value instanceof WeakSet || value instanceof WeakMap || ArrayBuffer.isView(value);
}
function isBuiltinWithoutMutableMethods(value) {
    return (typeof value === 'object' ? value === null : typeof value !== 'function') || value instanceof RegExp;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iEtjY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
var _isArrayJs = require("./is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
const path = {
    after: (path1, subPath)=>{
        if (_isArrayJsDefault.default(path1)) return path1.slice(subPath.length);
        if (subPath === '') return path1;
        return path1.slice(subPath.length + 1);
    },
    concat: (path2, key)=>{
        if (_isArrayJsDefault.default(path2)) {
            path2 = [
                ...path2
            ];
            if (key) path2.push(key);
            return path2;
        }
        if (key && key.toString !== undefined) {
            if (path2 !== '') path2 += _constantsJs.PATH_SEPARATOR;
            if (_isSymbolJsDefault.default(key)) return path2 + key.toString();
            return path2 + key;
        }
        return path2;
    },
    initial: (path3)=>{
        if (_isArrayJsDefault.default(path3)) return path3.slice(0, -1);
        if (path3 === '') return path3;
        const index = path3.lastIndexOf(_constantsJs.PATH_SEPARATOR);
        if (index === -1) return '';
        return path3.slice(0, index);
    },
    last: (path4)=>{
        if (_isArrayJsDefault.default(path4)) return path4[path4.length - 1] || '';
        if (path4 === '') return path4;
        const index = path4.lastIndexOf(_constantsJs.PATH_SEPARATOR);
        if (index === -1) return path4;
        return path4.slice(index + 1);
    },
    walk: (path5, callback)=>{
        if (_isArrayJsDefault.default(path5)) for (const key of path5)callback(key);
        else if (path5 !== '') {
            let position = 0;
            let index = path5.indexOf(_constantsJs.PATH_SEPARATOR);
            if (index === -1) callback(path5);
            else while(position < path5.length){
                if (index === -1) index = path5.length;
                callback(path5.slice(position, index));
                position = index + 1;
                index = path5.indexOf(_constantsJs.PATH_SEPARATOR, position);
            }
        }
    },
    get (object, path6) {
        this.walk(path6, (key)=>{
            if (object) object = object[key];
        });
        return object;
    }
};
exports.default = path;

},{"./constants.js":"1Uoep","./is-array.js":"gDBsB","./is-symbol.js":"1kB5C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDBsB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = Array.isArray;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kB5C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isSymbol(value) {
    return typeof value === 'symbol';
}
exports.default = isSymbol;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"92Ixh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isIterator(value) {
    return typeof value === 'object' && typeof value.next === 'function';
}
exports.default = isIterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qfrh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./constants.js");
function wrapIterator(iterator, target, thisArg, applyPath, prepareValue) {
    const originalNext = iterator.next;
    if (target.name === 'entries') iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) {
            result.value[0] = prepareValue(result.value[0], target, result.value[0], applyPath);
            result.value[1] = prepareValue(result.value[1], target, result.value[0], applyPath);
        }
        return result;
    };
    else if (target.name === 'values') {
        const keyIterator = thisArg[_constantsJs.TARGET].keys();
        iterator.next = function() {
            const result = originalNext.call(this);
            if (result.done === false) result.value = prepareValue(result.value, target, keyIterator.next().value, applyPath);
            return result;
        };
    } else iterator.next = function() {
        const result = originalNext.call(this);
        if (result.done === false) result.value = prepareValue(result.value, target, result.value, applyPath);
        return result;
    };
    return iterator;
}
exports.default = wrapIterator;

},{"./constants.js":"1Uoep","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4ug92":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isSymbolJs = require("./is-symbol.js");
var _isSymbolJsDefault = parcelHelpers.interopDefault(_isSymbolJs);
function ignoreProperty(cache, options, property) {
    return cache.isUnsubscribed || options.ignoreSymbols && _isSymbolJsDefault.default(property) || options.ignoreUnderscores && property.charAt(0) === '_' || 'ignoreKeys' in options && options.ignoreKeys.includes(property);
}
exports.default = ignoreProperty;

},{"./is-symbol.js":"1kB5C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d037F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("./path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
class Cache {
    constructor(equals){
        this._equals = equals;
        this._proxyCache = new WeakMap();
        this._pathCache = new WeakMap();
        this.isUnsubscribed = false;
    }
    _getDescriptorCache() {
        if (this._descriptorCache === undefined) this._descriptorCache = new WeakMap();
        return this._descriptorCache;
    }
    _getProperties(target) {
        const descriptorCache = this._getDescriptorCache();
        let properties = descriptorCache.get(target);
        if (properties === undefined) {
            properties = {
            };
            descriptorCache.set(target, properties);
        }
        return properties;
    }
    _getOwnPropertyDescriptor(target, property) {
        if (this.isUnsubscribed) return Reflect.getOwnPropertyDescriptor(target, property);
        const properties = this._getProperties(target);
        let descriptor = properties[property];
        if (descriptor === undefined) {
            descriptor = Reflect.getOwnPropertyDescriptor(target, property);
            properties[property] = descriptor;
        }
        return descriptor;
    }
    getProxy(target, path, handler, proxyTarget) {
        if (this.isUnsubscribed) return target;
        const reflectTarget = target[proxyTarget];
        const source = reflectTarget || target;
        this._pathCache.set(source, path);
        let proxy = this._proxyCache.get(source);
        if (proxy === undefined) {
            proxy = reflectTarget === undefined ? new Proxy(target, handler) : target;
            this._proxyCache.set(source, proxy);
        }
        return proxy;
    }
    getPath(target) {
        return this.isUnsubscribed ? undefined : this._pathCache.get(target);
    }
    isDetached(target, object) {
        return !Object.is(target, _pathJsDefault.default.get(object, this.getPath(target)));
    }
    defineProperty(target, property, descriptor) {
        if (!Reflect.defineProperty(target, property, descriptor)) return false;
        if (!this.isUnsubscribed) this._getProperties(target)[property] = descriptor;
        return true;
    }
    setProperty(target, property, value, receiver, previous) {
        if (!this._equals(previous, value) || !(property in target)) {
            const descriptor = this._getOwnPropertyDescriptor(target, property);
            if (descriptor !== undefined && 'set' in descriptor) return Reflect.set(target, property, value, receiver);
            return Reflect.set(target, property, value);
        }
        return true;
    }
    deleteProperty(target, property, previous) {
        if (Reflect.deleteProperty(target, property)) {
            if (!this.isUnsubscribed) {
                const properties = this._getDescriptorCache().get(target);
                if (properties) {
                    delete properties[property];
                    this._pathCache.delete(previous);
                }
            }
            return true;
        }
        return false;
    }
    isSameDescriptor(a, target, property) {
        const b = this._getOwnPropertyDescriptor(target, property);
        return a !== undefined && b !== undefined && Object.is(a.value, b.value) && (a.writable || false) === (b.writable || false) && (a.enumerable || false) === (b.enumerable || false) && (a.configurable || false) === (b.configurable || false) && a.get === b.get && a.set === b.set;
    }
    isGetInvariant(target, property) {
        const descriptor = this._getOwnPropertyDescriptor(target, property);
        return descriptor !== undefined && descriptor.configurable !== true && descriptor.writable !== true;
    }
    unsubscribe() {
        this._descriptorCache = null;
        this._pathCache = null;
        this._proxyCache = null;
        this.isUnsubscribed = true;
    }
}
exports.default = Cache;

},{"./path.js":"iEtjY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4nHqz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isArrayJs = require("../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isBuiltinJs = require("../is-builtin.js");
var _isObjectJs = require("../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _cloneObjectJs = require("./clone/clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
var _cloneArrayJs = require("./clone/clone-array.js");
var _cloneArrayJsDefault = parcelHelpers.interopDefault(_cloneArrayJs);
var _cloneDateJs = require("./clone/clone-date.js");
var _cloneDateJsDefault = parcelHelpers.interopDefault(_cloneDateJs);
var _cloneSetJs = require("./clone/clone-set.js");
var _cloneSetJsDefault = parcelHelpers.interopDefault(_cloneSetJs);
var _cloneMapJs = require("./clone/clone-map.js");
var _cloneMapJsDefault = parcelHelpers.interopDefault(_cloneMapJs);
var _cloneWeaksetJs = require("./clone/clone-weakset.js");
var _cloneWeaksetJsDefault = parcelHelpers.interopDefault(_cloneWeaksetJs);
var _cloneWeakmapJs = require("./clone/clone-weakmap.js");
var _cloneWeakmapJsDefault = parcelHelpers.interopDefault(_cloneWeakmapJs);
class SmartClone {
    constructor(hasOnValidate){
        this._stack = [];
        this._hasOnValidate = hasOnValidate;
    }
    static isHandledType(value) {
        return _isObjectJsDefault.default(value) || _isArrayJsDefault.default(value) || _isBuiltinJs.isBuiltinWithMutableMethods(value);
    }
    static isHandledMethod(target, name) {
        if (_isObjectJsDefault.default(target)) return _cloneObjectJsDefault.default.isHandledMethod(name);
        if (_isArrayJsDefault.default(target)) return _cloneArrayJsDefault.default.isHandledMethod(name);
        if (target instanceof Set) return _cloneSetJsDefault.default.isHandledMethod(name);
        if (target instanceof Map) return _cloneMapJsDefault.default.isHandledMethod(name);
        return _isBuiltinJs.isBuiltinWithMutableMethods(target);
    }
    get isCloning() {
        return this._stack.length > 0;
    }
    start(value, path, argumentsList) {
        let CloneClass = _cloneObjectJsDefault.default;
        if (_isArrayJsDefault.default(value)) CloneClass = _cloneArrayJsDefault.default;
        else if (value instanceof Date) CloneClass = _cloneDateJsDefault.default;
        else if (value instanceof Set) CloneClass = _cloneSetJsDefault.default;
        else if (value instanceof Map) CloneClass = _cloneMapJsDefault.default;
        else if (value instanceof WeakSet) CloneClass = _cloneWeaksetJsDefault.default;
        else if (value instanceof WeakMap) CloneClass = _cloneWeakmapJsDefault.default;
        this._stack.push(new CloneClass(value, path, argumentsList, this._hasOnValidate));
    }
    update(fullPath, property, value) {
        this._stack[this._stack.length - 1].update(fullPath, property, value);
    }
    preferredThisArg(target, thisArg, thisProxyTarget) {
        const { name  } = target;
        const isHandledMethod = SmartClone.isHandledMethod(thisProxyTarget, name);
        return this._stack[this._stack.length - 1].preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget);
    }
    isChanged(isMutable, value, equals) {
        return this._stack[this._stack.length - 1].isChanged(isMutable, value, equals);
    }
    undo(object) {
        if (this._previousClone !== undefined) this._previousClone.undo(object);
    }
    stop() {
        this._previousClone = this._stack.pop();
        return this._previousClone.clone;
    }
}
exports.default = SmartClone;

},{"../is-array.js":"gDBsB","../is-builtin.js":"aCszl","../is-object.js":"ftVyq","./clone/clone-object.js":"9qeRV","./clone/clone-array.js":"bBNzZ","./clone/clone-date.js":"j9TOv","./clone/clone-set.js":"fgNCY","./clone/clone-map.js":"6ho0u","./clone/clone-weakset.js":"fYqiz","./clone/clone-weakmap.js":"5vqZf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftVyq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isObject(value) {
    return toString.call(value) === '[object Object]';
}
exports.default = isObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9qeRV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _pathJs = require("../../path.js");
var _pathJsDefault = parcelHelpers.interopDefault(_pathJs);
var _isArrayJs = require("../../is-array.js");
var _isArrayJsDefault = parcelHelpers.interopDefault(_isArrayJs);
var _isObjectJs = require("../../is-object.js");
var _isObjectJsDefault = parcelHelpers.interopDefault(_isObjectJs);
var _arrayJs = require("../methods/array.js");
var _setJs = require("../methods/set.js");
var _mapJs = require("../methods/map.js");
var _objectJs = require("../methods/object.js");
class CloneObject {
    constructor(value, path, argumentsList, hasOnValidate){
        this._path = path;
        this._isChanged = false;
        this._clonedCache = new Set();
        this._hasOnValidate = hasOnValidate;
        this._changes = hasOnValidate ? [] : null;
        this.clone = path === undefined ? value : this._shallowClone(value);
    }
    static isHandledMethod(name) {
        return _objectJs.IMMUTABLE_OBJECT_METHODS.has(name);
    }
    _shallowClone(value) {
        let clone = value;
        if (_isObjectJsDefault.default(value)) clone = {
            ...value
        };
        else if (_isArrayJsDefault.default(value)) clone = [
            ...value
        ];
        else if (value instanceof Date) clone = new Date(value);
        else if (value instanceof Set) clone = new Set([
            ...value
        ].map((item)=>this._shallowClone(item)
        ));
        else if (value instanceof Map) {
            clone = new Map();
            for (const [key, item] of value.entries())clone.set(key, this._shallowClone(item));
        }
        this._clonedCache.add(clone);
        return clone;
    }
    preferredThisArg(isHandledMethod, name, thisArg, thisProxyTarget) {
        if (isHandledMethod) {
            if (_isArrayJsDefault.default(thisProxyTarget)) this._onIsChanged = _arrayJs.MUTABLE_ARRAY_METHODS[name];
            else if (thisProxyTarget instanceof Set) this._onIsChanged = _setJs.MUTABLE_SET_METHODS[name];
            else if (thisProxyTarget instanceof Map) this._onIsChanged = _mapJs.MUTABLE_MAP_METHODS[name];
            return thisProxyTarget;
        }
        return thisArg;
    }
    update(fullPath, property, value) {
        const changePath = _pathJsDefault.default.after(fullPath, this._path);
        if (property !== 'length') {
            let object = this.clone;
            _pathJsDefault.default.walk(changePath, (key)=>{
                if (object && object[key]) {
                    if (!this._clonedCache.has(object[key])) object[key] = this._shallowClone(object[key]);
                    object = object[key];
                }
            });
            if (this._hasOnValidate) this._changes.push({
                path: changePath,
                property,
                previous: value
            });
            if (object && object[property]) object[property] = value;
        }
        this._isChanged = true;
    }
    undo(object) {
        let change;
        for(let index = this._changes.length - 1; index !== -1; index--){
            change = this._changes[index];
            _pathJsDefault.default.get(object, change.path)[change.property] = change.previous;
        }
    }
    isChanged(value) {
        return this._onIsChanged === undefined ? this._isChanged : this._onIsChanged(this.clone, value);
    }
}
exports.default = CloneObject;

},{"../../path.js":"iEtjY","../../is-array.js":"gDBsB","../../is-object.js":"ftVyq","../methods/array.js":"4tBgH","../methods/set.js":"46LPZ","../methods/map.js":"jZpKy","../methods/object.js":"7GRup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4tBgH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_ARRAY_METHODS", ()=>MUTABLE_ARRAY_METHODS
);
parcelHelpers.export(exports, "HANDLED_ARRAY_METHODS", ()=>HANDLED_ARRAY_METHODS
);
var _isDiffCertainJs = require("../diff/is-diff-certain.js");
var _isDiffCertainJsDefault = parcelHelpers.interopDefault(_isDiffCertainJs);
var _isDiffArraysJs = require("../diff/is-diff-arrays.js");
var _isDiffArraysJsDefault = parcelHelpers.interopDefault(_isDiffArraysJs);
var _objectJs = require("./object.js");
const IMMUTABLE_ARRAY_METHODS = new Set([
    'concat',
    'includes',
    'indexOf',
    'join',
    'keys',
    'lastIndexOf', 
]);
const MUTABLE_ARRAY_METHODS = {
    push: _isDiffCertainJsDefault.default,
    pop: _isDiffCertainJsDefault.default,
    shift: _isDiffCertainJsDefault.default,
    unshift: _isDiffCertainJsDefault.default,
    copyWithin: _isDiffArraysJsDefault.default,
    reverse: _isDiffArraysJsDefault.default,
    sort: _isDiffArraysJsDefault.default,
    splice: _isDiffArraysJsDefault.default,
    flat: _isDiffArraysJsDefault.default,
    fill: _isDiffArraysJsDefault.default
};
const HANDLED_ARRAY_METHODS = new Set([
    ..._objectJs.IMMUTABLE_OBJECT_METHODS,
    ...IMMUTABLE_ARRAY_METHODS,
    ...Object.keys(MUTABLE_ARRAY_METHODS), 
]);

},{"../diff/is-diff-certain.js":"ebvvd","../diff/is-diff-arrays.js":"9w3oa","./object.js":"7GRup","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebvvd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffCertain() {
    return true;
}
exports.default = isDiffCertain;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9w3oa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffArrays(clone, value) {
    return clone.length !== value.length || clone.some((item, index)=>value[index] !== item
    );
}
exports.default = isDiffArrays;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7GRup":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IMMUTABLE_OBJECT_METHODS", ()=>IMMUTABLE_OBJECT_METHODS
);
const IMMUTABLE_OBJECT_METHODS = new Set([
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf', 
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"46LPZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "COLLECTION_ITERATOR_METHODS", ()=>COLLECTION_ITERATOR_METHODS
);
parcelHelpers.export(exports, "IMMUTABLE_SET_METHODS", ()=>IMMUTABLE_SET_METHODS
);
parcelHelpers.export(exports, "MUTABLE_SET_METHODS", ()=>MUTABLE_SET_METHODS
);
parcelHelpers.export(exports, "HANDLED_SET_METHODS", ()=>HANDLED_SET_METHODS
);
var _isDiffSetsJs = require("../diff/is-diff-sets.js");
var _isDiffSetsJsDefault = parcelHelpers.interopDefault(_isDiffSetsJs);
const COLLECTION_ITERATOR_METHODS = [
    'keys',
    'values',
    'entries', 
];
const IMMUTABLE_SET_METHODS = new Set([
    'has',
    'toString', 
]);
const MUTABLE_SET_METHODS = {
    add: _isDiffSetsJsDefault.default,
    clear: _isDiffSetsJsDefault.default,
    delete: _isDiffSetsJsDefault.default,
    forEach: _isDiffSetsJsDefault.default
};
const HANDLED_SET_METHODS = new Set([
    ...IMMUTABLE_SET_METHODS,
    ...Object.keys(MUTABLE_SET_METHODS),
    ...COLLECTION_ITERATOR_METHODS, 
]);

},{"../diff/is-diff-sets.js":"k2NHL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k2NHL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffSets(clone, value) {
    if (clone.size !== value.size) return true;
    for (const element of clone){
        if (!value.has(element)) return true;
    }
    return false;
}
exports.default = isDiffSets;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jZpKy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MUTABLE_MAP_METHODS", ()=>MUTABLE_MAP_METHODS
);
parcelHelpers.export(exports, "HANDLED_MAP_METHODS", ()=>HANDLED_MAP_METHODS
);
var _isDiffMapsJs = require("../diff/is-diff-maps.js");
var _isDiffMapsJsDefault = parcelHelpers.interopDefault(_isDiffMapsJs);
var _setJs = require("./set.js");
const IMMUTABLE_MAP_METHODS = new Set([
    ..._setJs.IMMUTABLE_SET_METHODS,
    'get'
]);
const MUTABLE_MAP_METHODS = {
    set: _isDiffMapsJsDefault.default,
    clear: _isDiffMapsJsDefault.default,
    delete: _isDiffMapsJsDefault.default,
    forEach: _isDiffMapsJsDefault.default
};
const HANDLED_MAP_METHODS = new Set([
    ...IMMUTABLE_MAP_METHODS,
    ...Object.keys(MUTABLE_MAP_METHODS),
    ..._setJs.COLLECTION_ITERATOR_METHODS, 
]);

},{"../diff/is-diff-maps.js":"m0SsD","./set.js":"46LPZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"m0SsD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDiffMaps(clone, value) {
    if (clone.size !== value.size) return true;
    let bValue;
    for (const [key, aValue] of clone){
        bValue = value.get(key);
        if (bValue !== aValue || bValue === undefined && !value.has(key)) return true;
    }
    return false;
}
exports.default = isDiffMaps;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBNzZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _arrayJs = require("../methods/array.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneArray extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _arrayJs.HANDLED_ARRAY_METHODS.has(name);
    }
}
exports.default = CloneArray;

},{"../methods/array.js":"4tBgH","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j9TOv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneDate extends _cloneObjectJsDefault.default {
    undo(object) {
        object.setTime(this.clone.getTime());
    }
    isChanged(value, equals) {
        return !equals(this.clone.valueOf(), value.valueOf());
    }
}
exports.default = CloneDate;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgNCY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setJs = require("../methods/set.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneSet extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _setJs.HANDLED_SET_METHODS.has(name);
    }
    undo(object) {
        for (const value of this.clone)object.add(value);
        for (const value1 of object)if (!this.clone.has(value1)) object.delete(value1);
    }
}
exports.default = CloneSet;

},{"../methods/set.js":"46LPZ","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ho0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mapJs = require("../methods/map.js");
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneMap extends _cloneObjectJsDefault.default {
    static isHandledMethod(name) {
        return _mapJs.HANDLED_MAP_METHODS.has(name);
    }
    undo(object) {
        for (const [key, value] of this.clone.entries())object.set(key, value);
        for (const key1 of object.keys())if (!this.clone.has(key1)) object.delete(key1);
    }
}
exports.default = CloneMap;

},{"../methods/map.js":"jZpKy","./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fYqiz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakSet extends _cloneObjectJsDefault.default {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._arg1 = argumentsList[0];
        this._weakValue = value.has(this._arg1);
    }
    isChanged(value) {
        return this._weakValue !== value.has(this._arg1);
    }
    undo(object) {
        if (this._weakValue && !object.has(this._arg1)) object.add(this._arg1);
        else object.delete(this._arg1);
    }
}
exports.default = CloneWeakSet;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vqZf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cloneObjectJs = require("./clone-object.js");
var _cloneObjectJsDefault = parcelHelpers.interopDefault(_cloneObjectJs);
class CloneWeakMap extends _cloneObjectJsDefault.default {
    constructor(value, path, argumentsList, hasOnValidate){
        super(undefined, path, argumentsList, hasOnValidate);
        this._weakKey = argumentsList[0];
        this._weakHas = value.has(this._weakKey);
        this._weakValue = value.get(this._weakKey);
    }
    isChanged(value) {
        return this._weakValue !== value.get(this._weakKey);
    }
    undo(object) {
        const weakHas = object.has(this._weakKey);
        if (this._weakHas && !weakHas) object.set(this._weakKey, this._weakValue);
        else if (!this._weakHas && weakHas) object.delete(this._weakKey);
        else if (this._weakValue !== object.get(this._weakKey)) object.set(this._weakKey, this._weakValue);
    }
}
exports.default = CloneWeakMap;

},{"./clone-object.js":"9qeRV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cgcsT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
parcelHelpers.export(exports, "randomBetween", ()=>randomBetween
);
const repeat = (callback, times)=>{
    if (times == 0) callback();
    else {
        callback();
        repeat(callback, times - 1);
    }
};
const randomBetween = (min, max)=>{
    return Math.round(min + Math.random() * (max - min));
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["kn9T2","cky5a","eSij7"], "eSij7", "parcelRequire86ed")

//# sourceMappingURL=index.9700d952.js.map
