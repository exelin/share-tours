'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./../common/utils.js');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  show: true,
  zIndex: 1000,
  duration: 3000,
  position: 'middle',
  forbidClick: false,
  loadingType: 'circular',
  selector: '#van-toast'
};
var queue = [];

var currentOptions = _extends({}, defaultOptions);

function parseOptions(message) {
  return (0, _utils.isObj)(message) ? message : {
    message: message
  };
}

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

var Toast = function Toast(options) {
  if (options === void 0) {
    options = {};
  }

  options = _extends({}, currentOptions, parseOptions(options));
  var context = options.context || getContext();
  var toast = context.selectComponent(options.selector);

  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }

  delete options.context;
  delete options.selector;
  queue.push(toast);
  toast.set(options);
  clearTimeout(toast.timer);

  if (options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
};

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_extends({
      type: type
    }, parseOptions(options)));
  };
};

['loading', 'success', 'fail'].forEach(function (method) {
  Toast[method] = createMethod(method);
});

Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _extends({}, defaultOptions);
};

exports.default = Toast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiZGVmYXVsdE9wdGlvbnMiLCJ0eXBlIiwibWFzayIsIm1lc3NhZ2UiLCJzaG93IiwiekluZGV4IiwiZHVyYXRpb24iLCJwb3NpdGlvbiIsImZvcmJpZENsaWNrIiwibG9hZGluZ1R5cGUiLCJzZWxlY3RvciIsInF1ZXVlIiwiY3VycmVudE9wdGlvbnMiLCJwYXJzZU9wdGlvbnMiLCJnZXRDb250ZXh0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJUb2FzdCIsIm9wdGlvbnMiLCJjb250ZXh0IiwidG9hc3QiLCJzZWxlY3RDb21wb25lbnQiLCJjb25zb2xlIiwid2FybiIsInB1c2giLCJzZXQiLCJjbGVhclRpbWVvdXQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhciIsImZpbHRlciIsIml0ZW0iLCJjcmVhdGVNZXRob2QiLCJmb3JFYWNoIiwibWV0aG9kIiwic2V0RGVmYXVsdE9wdGlvbnMiLCJyZXNldERlZmF1bHRPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTs7QUFGQSxTQUFTQSxRQUFULEdBQW9CO0FBQUVBLGFBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBVUMsTUFBVixFQUFrQjtBQUFFLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFBRSxVQUFJRyxTQUFTRixVQUFVRCxDQUFWLENBQWIsQ0FBMkIsS0FBSyxJQUFJSSxHQUFULElBQWdCRCxNQUFoQixFQUF3QjtBQUFFLFlBQUlOLE9BQU9RLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0osTUFBckMsRUFBNkNDLEdBQTdDLENBQUos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TUFBUCxDQUFjdUIsY0FBZCxFQUE4Qk0sT0FBOUI7QUFDRCxDQUZEOztBQUlBRCxNQUFNbUIsbUJBQU4sR0FBNEIsWUFBWTtBQUN0Q3hCLG1CQUFpQnpCLFNBQVMsRUFBVCxFQUFhYSxjQUFiLENBQWpCO0FBQ0QsQ0FGRDs7a0JBSWVpQixLIiwiZmlsZSI6InRvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IHsgaXNPYmogfSBmcm9tICcuLi9jb21tb24vdXRpbHMnO1xudmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICB0eXBlOiAndGV4dCcsXG4gIG1hc2s6IGZhbHNlLFxuICBtZXNzYWdlOiAnJyxcbiAgc2hvdzogdHJ1ZSxcbiAgekluZGV4OiAxMDAwLFxuICBkdXJhdGlvbjogMzAwMCxcbiAgcG9zaXRpb246ICdtaWRkbGUnLFxuICBmb3JiaWRDbGljazogZmFsc2UsXG4gIGxvYWRpbmdUeXBlOiAnY2lyY3VsYXInLFxuICBzZWxlY3RvcjogJyN2YW4tdG9hc3QnXG59O1xudmFyIHF1ZXVlID0gW107XG5cbnZhciBjdXJyZW50T3B0aW9ucyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucyk7XG5cbmZ1bmN0aW9uIHBhcnNlT3B0aW9ucyhtZXNzYWdlKSB7XG4gIHJldHVybiBpc09iaihtZXNzYWdlKSA/IG1lc3NhZ2UgOiB7XG4gICAgbWVzc2FnZTogbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcbiAgcmV0dXJuIHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xufVxuXG52YXIgVG9hc3QgPSBmdW5jdGlvbiBUb2FzdChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBvcHRpb25zID0gX2V4dGVuZHMoe30sIGN1cnJlbnRPcHRpb25zLCBwYXJzZU9wdGlvbnMob3B0aW9ucykpO1xuICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCB8fCBnZXRDb250ZXh0KCk7XG4gIHZhciB0b2FzdCA9IGNvbnRleHQuc2VsZWN0Q29tcG9uZW50KG9wdGlvbnMuc2VsZWN0b3IpO1xuXG4gIGlmICghdG9hc3QpIHtcbiAgICBjb25zb2xlLndhcm4oJ+acquaJvuWIsCB2YW4tdG9hc3Qg6IqC54K577yM6K+356Gu6K6kIHNlbGVjdG9yIOWPiiBjb250ZXh0IOaYr+WQpuato+ehricpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGRlbGV0ZSBvcHRpb25zLmNvbnRleHQ7XG4gIGRlbGV0ZSBvcHRpb25zLnNlbGVjdG9yO1xuICBxdWV1ZS5wdXNoKHRvYXN0KTtcbiAgdG9hc3Quc2V0KG9wdGlvbnMpO1xuICBjbGVhclRpbWVvdXQodG9hc3QudGltZXIpO1xuXG4gIGlmIChvcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgIHRvYXN0LnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0b2FzdC5jbGVhcigpO1xuICAgICAgcXVldWUgPSBxdWV1ZS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHRvYXN0O1xuICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucy5kdXJhdGlvbik7XG4gIH1cblxuICByZXR1cm4gdG9hc3Q7XG59O1xuXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gY3JlYXRlTWV0aG9kKHR5cGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgcmV0dXJuIFRvYXN0KF9leHRlbmRzKHtcbiAgICAgIHR5cGU6IHR5cGVcbiAgICB9LCBwYXJzZU9wdGlvbnMob3B0aW9ucykpKTtcbiAgfTtcbn07XG5cblsnbG9hZGluZycsICdzdWNjZXNzJywgJ2ZhaWwnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgVG9hc3RbbWV0aG9kXSA9IGNyZWF0ZU1ldGhvZChtZXRob2QpO1xufSk7XG5cblRvYXN0LmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICBxdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uICh0b2FzdCkge1xuICAgIHRvYXN0LmNsZWFyKCk7XG4gIH0pO1xuICBxdWV1ZSA9IFtdO1xufTtcblxuVG9hc3Quc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICBPYmplY3QuYXNzaWduKGN1cnJlbnRPcHRpb25zLCBvcHRpb25zKTtcbn07XG5cblRvYXN0LnJlc2V0RGVmYXVsdE9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gIGN1cnJlbnRPcHRpb25zID0gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvYXN0OyJdfQ==