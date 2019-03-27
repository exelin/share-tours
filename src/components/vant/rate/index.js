'use strict';

var _component = require('./../common/component.js');

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

(0, _component.VantComponent)({
  field: true,
  classes: ['icon-class'],
  props: {
    readonly: Boolean,
    disabled: Boolean,
    size: {
      type: Number,
      value: 20
    },
    icon: {
      type: String,
      value: 'star'
    },
    voidIcon: {
      type: String,
      value: 'star-o'
    },
    color: {
      type: String,
      value: '#ffd21e'
    },
    voidColor: {
      type: String,
      value: '#c7c7c7'
    },
    disabledColor: {
      type: String,
      value: '#bdbdbd'
    },
    count: {
      type: Number,
      value: 5
    },
    value: {
      type: Number,
      value: 0
    }
  },
  data: {
    innerValue: 0
  },
  watch: {
    value: function value(_value) {
      if (_value !== this.data.innerValue) {
        this.set({
          innerValue: _value
        });
      }
    }
  },
  computed: {
    list: function list() {
      var _this$data = this.data,
          count = _this$data.count,
          innerValue = _this$data.innerValue;
      return Array.from({
        length: count
      }, function (_, index) {
        return index < innerValue;
      });
    }
  },
  methods: {
    onSelect: function onSelect(event) {
      var data = this.data;
      var index = event.currentTarget.dataset.index;

      if (!data.disabled && !data.readonly) {
        this.set({
          innerValue: index + 1
        });
        this.$emit('input', index + 1);
        this.$emit('change', index + 1);
      }
    },
    onTouchMove: function onTouchMove(event) {
      var _this = this;

      var _event$touches$ = event.touches[0],
          clientX = _event$touches$.clientX,
          clientY = _event$touches$.clientY;
      this.getRect('.van-rate__item', true).then(function (list) {
        var target = list.find(function (item) {
          return clientX >= item.left && clientX <= item.right && clientY >= item.top && clientY <= item.bottom;
        });

        if (target != null) {
          _this.onSelect(_extends({}, event, {
            currentTarget: target
          }));
        }
      });
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9leHRlbmRzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFyZ2V0IiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwiZmllbGQiLCJjbGFzc2VzIiwicHJvcHMiLCJyZWFkb25seSIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsInNpemUiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJpY29uIiwiU3RyaW5nIiwidm9pZEljb24iLCJjb2xvciIsInZvaWRDb2xvciIsImRpc2FibGVkQ29sb3IiLCJjb3VudCIsImRhdGEiLCJpbm5lclZhbHVlIiwid2F0Y2giLCJfdmFsdWUiLCJzZXQiLCJjb21wdXRlZCIsImxpc3QiLCJfdGhpcyRkYXRhIiwiQXJyYXkiLCJmcm9tIiwiXyIsImluZGV4IiwibWV0aG9kcyIsIm9uU2VsZWN0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJfdGhpcyIsIl9ldmVudCR0b3VjaGVzJCIsInRvdWNoZXMiLCJjbGllbnRYIiwiY2xpZW50WSIsImdldFJlY3QiLCJ0aGVuIiwiZmluZCIsIml0ZW0iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iXSwibWFwcGluZ3MiOiI7O0FBRUE7O0FBRkEsU0FBU0EsUUFBVCxHQUFvQjtBQUFFQSxhQUFXQyxPQUFPQyxNQUFQLElBQWlCLFVBQVVDLE1BQVYsRUFBa0I7QUFBRSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsVUFBVUMsTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDO0FBQUUsVUFBSUcsU0FBU0YsVUFBVUQsQ0FBVixDQUFiLENBQTJCLEtBQUssSUFBSUksR0FBVCxJQUFnQkQsTUFBaEIsRUFBd0I7QUFBRSxZQUFJTixPQUFPUSxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFB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Z0I7QUFDckMsaUJBQU9MLFdBQVdLLEtBQUtDLElBQWhCLElBQXdCTixXQUFXSyxLQUFLRSxLQUF4QyxJQUFpRE4sV0FBV0ksS0FBS0csR0FBakUsSUFBd0VQLFdBQVdJLEtBQUtJLE1BQS9GO0FBQ0QsU0FGWSxDQUFiOztBQUlBLFlBQUkxRCxVQUFVLElBQWQsRUFBb0I7QUFDbEI4QyxnQkFBTU4sUUFBTixDQUFlM0MsU0FBUyxFQUFULEVBQWE0QyxLQUFiLEVBQW9CO0FBQ2pDQywyQkFBZTFDO0FBRGtCLFdBQXBCLENBQWY7QUFHRDtBQUNGLE9BVkQ7QUFXRDtBQTlCTTtBQS9ERyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICByZWFkb25seTogQm9vbGVhbixcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICBzaXplOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMjBcbiAgICB9LFxuICAgIGljb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnc3RhcidcbiAgICB9LFxuICAgIHZvaWRJY29uOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ3N0YXItbydcbiAgICB9LFxuICAgIGNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZmQyMWUnXG4gICAgfSxcbiAgICB2b2lkQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2M3YzdjNydcbiAgICB9LFxuICAgIGRpc2FibGVkQ29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2JkYmRiZCdcbiAgICB9LFxuICAgIGNvdW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogNVxuICAgIH0sXG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwXG4gICAgfVxuICB9LFxuICBkYXRhOiB7XG4gICAgaW5uZXJWYWx1ZTogMFxuICB9LFxuICB3YXRjaDoge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcbiAgICAgIGlmIChfdmFsdWUgIT09IHRoaXMuZGF0YS5pbm5lclZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0KHtcbiAgICAgICAgICBpbm5lclZhbHVlOiBfdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGxpc3Q6IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcbiAgICAgICAgICBjb3VudCA9IF90aGlzJGRhdGEuY291bnQsXG4gICAgICAgICAgaW5uZXJWYWx1ZSA9IF90aGlzJGRhdGEuaW5uZXJWYWx1ZTtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKHtcbiAgICAgICAgbGVuZ3RoOiBjb3VudFxuICAgICAgfSwgZnVuY3Rpb24gKF8sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleCA8IGlubmVyVmFsdWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZXZlbnQpIHtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuXG4gICAgICBpZiAoIWRhdGEuZGlzYWJsZWQgJiYgIWRhdGEucmVhZG9ubHkpIHtcbiAgICAgICAgdGhpcy5zZXQoe1xuICAgICAgICAgIGlubmVyVmFsdWU6IGluZGV4ICsgMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBpbmRleCArIDEpO1xuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBpbmRleCArIDEpO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICB2YXIgX2V2ZW50JHRvdWNoZXMkID0gZXZlbnQudG91Y2hlc1swXSxcbiAgICAgICAgICBjbGllbnRYID0gX2V2ZW50JHRvdWNoZXMkLmNsaWVudFgsXG4gICAgICAgICAgY2xpZW50WSA9IF9ldmVudCR0b3VjaGVzJC5jbGllbnRZO1xuICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXJhdGVfX2l0ZW0nLCB0cnVlKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBsaXN0LmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gY2xpZW50WCA+PSBpdGVtLmxlZnQgJiYgY2xpZW50WCA8PSBpdGVtLnJpZ2h0ICYmIGNsaWVudFkgPj0gaXRlbS50b3AgJiYgY2xpZW50WSA8PSBpdGVtLmJvdHRvbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldCAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMub25TZWxlY3QoX2V4dGVuZHMoe30sIGV2ZW50LCB7XG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufSk7Il19