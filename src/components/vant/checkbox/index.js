'use strict';

var _component = require('./../common/component.js');

(0, _component.VantComponent)({
  field: true,
  relation: {
    name: 'checkbox-group',
    type: 'ancestor'
  },
  classes: ['icon-class', 'label-class'],
  props: {
    value: null,
    disabled: Boolean,
    useIconSlot: Boolean,
    checkedColor: String,
    labelPosition: String,
    labelDisabled: Boolean,
    shape: {
      type: String,
      value: 'round'
    }
  },
  methods: {
    emitChange: function emitChange(value) {
      var parent = this.getRelationNodes('../checkbox-group/index')[0];

      if (parent) {
        this.setParentValue(parent, value);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    toggle: function toggle() {
      if (!this.data.disabled) {
        this.emitChange(!this.data.value);
      }
    },
    onClickLabel: function onClickLabel() {
      if (!this.data.disabled && !this.data.labelDisabled) {
        this.emitChange(!this.data.value);
      }
    },
    setParentValue: function setParentValue(parent, value) {
      var parentValue = parent.data.value.slice();
      var name = this.data.name;

      if (value) {
        if (parent.data.max && parentValue.length >= parent.data.max) {
          return;
        }
        /* istanbul ignore else */

        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name);
          parent.$emit('input', parentValue);
          parent.$emit('change', parentValue);
        }
      } else {
        var index = parentValue.indexOf(name);
        /* istanbul ignore else */

        if (index !== -1) {
          parentValue.splice(index, 1);
          parent.$emit('input', parentValue);
          parent.$emit('change', parentValue);
        }
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwidXNlSWNvblNsb3QiLCJjaGVja2VkQ29sb3IiLCJTdHJpbmciLCJsYWJlbFBvc2l0aW9uIiwibGFiZWxEaXNhYmxlZCIsInNoYXBlIiwibWV0aG9kcyIsImVtaXRDaGFuZ2UiLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0UGFyZW50VmFsdWUiLCIkZW1pdCIsInRvZ2dsZSIsImRhdGEiLCJvbkNsaWNrTGFiZWwiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCJpbmRleCIsInNwbGljZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLGdCQURFO0FBRVJDLFVBQU07QUFGRSxHQUZFO0FBTVpDLFdBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQU5HO0FBT1pDLFNBQU87QUFDTEMsV0FBTyxJQURGO0FBRUxDLGNBQVVDLE9BRkw7QUFHTEMsaUJBQWFELE9BSFI7QUFJTEUsa0JBQWNDLE1BSlQ7QUFLTEMsbUJBQWVELE1BTFY7QUFNTEUsbUJBQWVMLE9BTlY7QUFPTE0sV0FBTztBQUNMWCxZQUFNUSxNQUREO0FBRUxMLGFBQU87QUFGRjtBQVBGLEdBUEs7QUFtQlpTLFdBQVM7QUFDUEMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQlYsS0FBcEIsRUFBMkI7QUFDckMsVUFBSVcsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQix5QkFBdEIsRUFBaUQsQ0FBakQsQ0FBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixhQUFLRSxjQUFMLENBQW9CRixNQUFwQixFQUE0QlgsS0FBNUI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLYyxLQUFMLENBQVcsT0FBWCxFQUFvQmQsS0FBcEI7QUFDQSxhQUFLYyxLQUFMLENBQVcsUUFBWCxFQUFxQmQsS0FBckI7QUFDRDtBQUNGLEtBVk07QUFXUGUsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUksQ0FBQyxLQUFLQyxJQUFMLENBQVVmLFFBQWYsRUFBeUI7QUFDdkIsYUFBS1MsVUFBTCxDQUFnQixDQUFDLEtBQUtNLElBQUwsQ0FBVWhCLEtBQTNCO0FBQ0Q7QUFDRixLQWZNO0FBZ0JQaUIsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJLENBQUMsS0FBS0QsSUFBTCxDQUFVZixRQUFYLElBQXVCLENBQUMsS0FBS2UsSUFBTCxDQUFVVCxhQUF0QyxFQUFxRDtBQUNuRCxhQUFLRyxVQUFMLENBQWdCLENBQUMsS0FBS00sSUFBTCxDQUFVaEIsS0FBM0I7QUFDRDtBQUNGLEtBcEJNO0FBcUJQYSxvQkFBZ0IsU0FBU0EsY0FBVCxDQUF3QkYsTUFBeEIsRUFBZ0NYLEtBQWhDLEVBQXVDO0FBQ3JELFVBQUlrQixjQUFjUCxPQUFPSyxJQUFQLENBQVloQixLQUFaLENBQWtCbUIsS0FBbEIsRUFBbEI7QUFDQSxVQUFJdkIsT0FBTyxLQUFLb0IsSUFBTCxDQUFVcEIsSUFBckI7O0FBRUEsVUFBSUksS0FBSixFQUFXO0FBQ1QsWUFBSVcsT0FBT0ssSUFBUCxDQUFZSSxHQUFaLElBQW1CRixZQUFZRyxNQUFaLElBQXNCVixPQUFPSyxJQUFQLENBQVlJLEdBQXpELEVBQThEO0FBQzVEO0FBQ0Q7QUFDRDs7QUFHQSxZQUFJRixZQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQ3NCLHNCQUFZSyxJQUFaLENBQWlCM0IsSUFBakI7QUFDQWUsaUJBQU9HLEtBQVAsQ0FBYSxPQUFiLEVBQXNCSSxXQUF0QjtBQUNBUCxpQkFBT0csS0FBUCxDQUFhLFFBQWIsRUFBdUJJLFdBQXZCO0FBQ0Q7QUFDRixPQVpELE1BWU87QUFDTCxZQUFJTSxRQUFRTixZQUFZSSxPQUFaLENBQW9CMUIsSUFBcEIsQ0FBWjtBQUNBOztBQUVBLFlBQUk0QixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQk4sc0JBQVlPLE1BQVosQ0FBbUJELEtBQW5CLEVBQTBCLENBQTFCO0FBQ0FiLGlCQUFPRyxLQUFQLENBQWEsT0FBYixFQUFzQkksV0FBdEI7QUFDQVAsaUJBQU9HLEtBQVAsQ0FBYSxRQUFiLEVBQXVCSSxXQUF2QjtBQUNEO0FBQ0Y7QUFDRjtBQS9DTTtBQW5CRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICByZWxhdGlvbjoge1xuICAgIG5hbWU6ICdjaGVja2JveC1ncm91cCcsXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xuICB9LFxuICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnLCAnbGFiZWwtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcbiAgICBjaGVja2VkQ29sb3I6IFN0cmluZyxcbiAgICBsYWJlbFBvc2l0aW9uOiBTdHJpbmcsXG4gICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICBzaGFwZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgdmFsdWU6ICdyb3VuZCdcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKHZhbHVlKSB7XG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xuXG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuc2V0UGFyZW50VmFsdWUocGFyZW50LCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uIG9uQ2xpY2tMYWJlbCgpIHtcbiAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubGFiZWxEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzZXRQYXJlbnRWYWx1ZTogZnVuY3Rpb24gc2V0UGFyZW50VmFsdWUocGFyZW50LCB2YWx1ZSkge1xuICAgICAgdmFyIHBhcmVudFZhbHVlID0gcGFyZW50LmRhdGEudmFsdWUuc2xpY2UoKTtcbiAgICAgIHZhciBuYW1lID0gdGhpcy5kYXRhLm5hbWU7XG5cbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBpZiAocGFyZW50LmRhdGEubWF4ICYmIHBhcmVudFZhbHVlLmxlbmd0aCA+PSBwYXJlbnQuZGF0YS5tYXgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuXG4gICAgICAgIGlmIChwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpID09PSAtMSkge1xuICAgICAgICAgIHBhcmVudFZhbHVlLnB1c2gobmFtZSk7XG4gICAgICAgICAgcGFyZW50LiRlbWl0KCdpbnB1dCcsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2NoYW5nZScsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50VmFsdWUuaW5kZXhPZihuYW1lKTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgcGFyZW50VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBwYXJlbnQuJGVtaXQoJ2lucHV0JywgcGFyZW50VmFsdWUpO1xuICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59KTsiXX0=