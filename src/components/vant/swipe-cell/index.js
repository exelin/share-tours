'use strict';

var _component = require('./../common/component.js');

var _touch = require('./../mixins/touch.js');

var THRESHOLD = 0.15;
(0, _component.VantComponent)({
  props: {
    disabled: Boolean,
    leftWidth: {
      type: Number,
      value: 0
    },
    rightWidth: {
      type: Number,
      value: 0
    },
    asyncClose: Boolean
  },
  mixins: [_touch.touch],
  data: {
    offset: 0,
    draging: false
  },
  computed: {
    wrapperStyle: function wrapperStyle() {
      var _this$data = this.data,
          offset = _this$data.offset,
          draging = _this$data.draging;
      var transform = "translate3d(" + offset + "px, 0, 0)";
      var transition = draging ? 'none' : '.6s cubic-bezier(0.18, 0.89, 0.32, 1)';
      return "\n        -webkit-transform: " + transform + ";\n        -webkit-transition: " + transition + ";\n        transform: " + transform + ";\n        transition: " + transition + ";\n      ";
    }
  },
  methods: {
    onTransitionend: function onTransitionend() {
      this.swipe = false;
    },
    open: function open(position) {
      var _this$data2 = this.data,
          leftWidth = _this$data2.leftWidth,
          rightWidth = _this$data2.rightWidth;
      var offset = position === 'left' ? leftWidth : -rightWidth;
      this.swipeMove(offset);
      this.resetSwipeStatus();
    },
    close: function close() {
      this.set({
        offset: 0
      });
    },
    resetSwipeStatus: function resetSwipeStatus() {
      this.swiping = false;
      this.opened = true;
    },
    swipeMove: function swipeMove(offset) {
      if (offset === void 0) {
        offset = 0;
      }

      this.set({
        offset: offset
      });
      offset && (this.swiping = true);
      !offset && (this.opened = false);
    },
    swipeLeaveTransition: function swipeLeaveTransition(direction) {
      var _this$data3 = this.data,
          offset = _this$data3.offset,
          leftWidth = _this$data3.leftWidth,
          rightWidth = _this$data3.rightWidth;
      var threshold = this.opened ? 1 - THRESHOLD : THRESHOLD; // right

      if (direction > 0 && -offset > rightWidth * threshold && rightWidth > 0) {
        this.open('right'); // left
      } else if (direction < 0 && offset > leftWidth * threshold && leftWidth > 0) {
        this.open('left');
      } else {
        this.swipeMove();
      }
    },
    startDrag: function startDrag(event) {
      if (this.data.disabled) {
        return;
      }

      this.set({
        draging: true
      });
      this.touchStart(event);

      if (this.opened) {
        this.startX -= this.data.offset;
      }
    },
    onDrag: function onDrag(event) {
      if (this.data.disabled) {
        return;
      }

      this.touchMove(event);
      var deltaX = this.deltaX;
      var _this$data4 = this.data,
          leftWidth = _this$data4.leftWidth,
          rightWidth = _this$data4.rightWidth;

      if (deltaX < 0 && (-deltaX > rightWidth || !rightWidth) || deltaX > 0 && (deltaX > leftWidth || deltaX > 0 && !leftWidth)) {
        return;
      }

      if (this.direction === 'horizontal') {
        this.swipeMove(deltaX);
      }
    },
    endDrag: function endDrag() {
      if (this.data.disabled) {
        return;
      }

      this.set({
        draging: false
      });

      if (this.swiping) {
        this.swipeLeaveTransition(this.data.offset > 0 ? -1 : 1);
      }
    },
    onClick: function onClick(event) {
      var _event$currentTarget$ = event.currentTarget.dataset.key,
          position = _event$currentTarget$ === void 0 ? 'outside' : _event$currentTarget$;
      this.$emit('click', position);

      if (!this.data.offset) {
        return;
      }

      if (this.data.asyncClose) {
        this.$emit('close', {
          position: position,
          instance: this
        });
      } else {
        this.swipeMove(0);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlRIUkVTSE9MRCIsInByb3BzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGVmdFdpZHRoIiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwicmlnaHRXaWR0aCIsImFzeW5jQ2xvc2UiLCJtaXhpbnMiLCJ0b3VjaCIsImRhdGEiLCJvZmZzZXQiLCJkcmFnaW5nIiwiY29tcHV0ZWQiLCJ3cmFwcGVyU3R5bGUiLCJfdGhpcyRkYXRhIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIm1ldGhvZHMiLCJvblRyYW5zaXRpb25lbmQiLCJzd2lwZSIsIm9wZW4iLCJwb3NpdGlvbiIsIl90aGlzJGRhdGEyIiwic3dpcGVNb3ZlIiwicmVzZXRTd2lwZVN0YXR1cyIsImNsb3NlIiwic2V0Iiwic3dpcGluZyIsIm9wZW5lZCIsInN3aXBlTGVhdmVUcmFuc2l0aW9uIiwiZGlyZWN0aW9uIiwiX3RoaXMkZGF0YTMiLCJ0aHJlc2hvbGQiLCJzdGFydERyYWciLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFgiLCJvbkRyYWciLCJ0b3VjaE1vdmUiLCJkZWx0YVgiLCJfdGhpcyRkYXRhNCIsImVuZERyYWciLCJvbkNsaWNrIiwiX2V2ZW50JGN1cnJlbnRUYXJnZXQkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJrZXkiLCIkZW1pdCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUNBLElBQUlBLFlBQVksSUFBaEI7QUFDQSw4QkFBYztBQUNaQyxTQUFPO0FBQ0xDLGNBQVVDLE9BREw7QUFFTEMsZUFBVztBQUNUQyxZQUFNQyxNQURHO0FBRVRDLGFBQU87QUFGRSxLQUZOO0FBTUxDLGdCQUFZO0FBQ1ZILFlBQU1DLE1BREk7QUFFVkMsYUFBTztBQUZHLEtBTlA7QUFVTEUsZ0JBQVlOO0FBVlAsR0FESztBQWFaTyxVQUFRLENBQUNDLFlBQUQsQ0FiSTtBQWNaQyxRQUFNO0FBQ0pDLFlBQVEsQ0FESjtBQUVKQyxh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b0JDLE9BQXBCLENBQTRCQyxHQUF4RDtBQUFBLFVBQ0l6QixXQUFXc0IsMEJBQTBCLEtBQUssQ0FBL0IsR0FBbUMsU0FBbkMsR0FBK0NBLHFCQUQ5RDtBQUVBLFdBQUtJLEtBQUwsQ0FBVyxPQUFYLEVBQW9CMUIsUUFBcEI7O0FBRUEsVUFBSSxDQUFDLEtBQUtaLElBQUwsQ0FBVUMsTUFBZixFQUF1QjtBQUNyQjtBQUNEOztBQUVELFVBQUksS0FBS0QsSUFBTCxDQUFVSCxVQUFkLEVBQTBCO0FBQ3hCLGFBQUt5QyxLQUFMLENBQVcsT0FBWCxFQUFvQjtBQUNsQjFCLG9CQUFVQSxRQURRO0FBRWxCMkIsb0JBQVU7QUFGUSxTQUFwQjtBQUlELE9BTEQsTUFLTztBQUNMLGFBQUt6QixTQUFMLENBQWUsQ0FBZjtBQUNEO0FBQ0Y7QUE5R007QUE1QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcbmltcG9ydCB7IHRvdWNoIH0gZnJvbSAnLi4vbWl4aW5zL3RvdWNoJztcbnZhciBUSFJFU0hPTEQgPSAwLjE1O1xuVmFudENvbXBvbmVudCh7XG4gIHByb3BzOiB7XG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgbGVmdFdpZHRoOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMFxuICAgIH0sXG4gICAgcmlnaHRXaWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDBcbiAgICB9LFxuICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW5cbiAgfSxcbiAgbWl4aW5zOiBbdG91Y2hdLFxuICBkYXRhOiB7XG4gICAgb2Zmc2V0OiAwLFxuICAgIGRyYWdpbmc6IGZhbHNlXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgd3JhcHBlclN0eWxlOiBmdW5jdGlvbiB3cmFwcGVyU3R5bGUoKSB7XG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcbiAgICAgICAgICBvZmZzZXQgPSBfdGhpcyRkYXRhLm9mZnNldCxcbiAgICAgICAgICBkcmFnaW5nID0gX3RoaXMkZGF0YS5kcmFnaW5nO1xuICAgICAgdmFyIHRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoXCIgKyBvZmZzZXQgKyBcInB4LCAwLCAwKVwiO1xuICAgICAgdmFyIHRyYW5zaXRpb24gPSBkcmFnaW5nID8gJ25vbmUnIDogJy42cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMSknO1xuICAgICAgcmV0dXJuIFwiXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogXCIgKyB0cmFuc2Zvcm0gKyBcIjtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogXCIgKyB0cmFuc2l0aW9uICsgXCI7XFxuICAgICAgICB0cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtICsgXCI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBcIiArIHRyYW5zaXRpb24gKyBcIjtcXG4gICAgICBcIjtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvblRyYW5zaXRpb25lbmQ6IGZ1bmN0aW9uIG9uVHJhbnNpdGlvbmVuZCgpIHtcbiAgICAgIHRoaXMuc3dpcGUgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9wZW46IGZ1bmN0aW9uIG9wZW4ocG9zaXRpb24pIHtcbiAgICAgIHZhciBfdGhpcyRkYXRhMiA9IHRoaXMuZGF0YSxcbiAgICAgICAgICBsZWZ0V2lkdGggPSBfdGhpcyRkYXRhMi5sZWZ0V2lkdGgsXG4gICAgICAgICAgcmlnaHRXaWR0aCA9IF90aGlzJGRhdGEyLnJpZ2h0V2lkdGg7XG4gICAgICB2YXIgb2Zmc2V0ID0gcG9zaXRpb24gPT09ICdsZWZ0JyA/IGxlZnRXaWR0aCA6IC1yaWdodFdpZHRoO1xuICAgICAgdGhpcy5zd2lwZU1vdmUob2Zmc2V0KTtcbiAgICAgIHRoaXMucmVzZXRTd2lwZVN0YXR1cygpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBvZmZzZXQ6IDBcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgcmVzZXRTd2lwZVN0YXR1czogZnVuY3Rpb24gcmVzZXRTd2lwZVN0YXR1cygpIHtcbiAgICAgIHRoaXMuc3dpcGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgc3dpcGVNb3ZlOiBmdW5jdGlvbiBzd2lwZU1vdmUob2Zmc2V0KSB7XG4gICAgICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHtcbiAgICAgICAgb2Zmc2V0ID0gMDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgfSk7XG4gICAgICBvZmZzZXQgJiYgKHRoaXMuc3dpcGluZyA9IHRydWUpO1xuICAgICAgIW9mZnNldCAmJiAodGhpcy5vcGVuZWQgPSBmYWxzZSk7XG4gICAgfSxcbiAgICBzd2lwZUxlYXZlVHJhbnNpdGlvbjogZnVuY3Rpb24gc3dpcGVMZWF2ZVRyYW5zaXRpb24oZGlyZWN0aW9uKSB7XG4gICAgICB2YXIgX3RoaXMkZGF0YTMgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgb2Zmc2V0ID0gX3RoaXMkZGF0YTMub2Zmc2V0LFxuICAgICAgICAgIGxlZnRXaWR0aCA9IF90aGlzJGRhdGEzLmxlZnRXaWR0aCxcbiAgICAgICAgICByaWdodFdpZHRoID0gX3RoaXMkZGF0YTMucmlnaHRXaWR0aDtcbiAgICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLm9wZW5lZCA/IDEgLSBUSFJFU0hPTEQgOiBUSFJFU0hPTEQ7IC8vIHJpZ2h0XG5cbiAgICAgIGlmIChkaXJlY3Rpb24gPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoICogdGhyZXNob2xkICYmIHJpZ2h0V2lkdGggPiAwKSB7XG4gICAgICAgIHRoaXMub3BlbigncmlnaHQnKTsgLy8gbGVmdFxuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPCAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCAqIHRocmVzaG9sZCAmJiBsZWZ0V2lkdGggPiAwKSB7XG4gICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zd2lwZU1vdmUoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHN0YXJ0RHJhZzogZnVuY3Rpb24gc3RhcnREcmFnKGV2ZW50KSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBkcmFnaW5nOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLnN0YXJ0WCAtPSB0aGlzLmRhdGEub2Zmc2V0O1xuICAgICAgfVxuICAgIH0sXG4gICAgb25EcmFnOiBmdW5jdGlvbiBvbkRyYWcoZXZlbnQpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRvdWNoTW92ZShldmVudCk7XG4gICAgICB2YXIgZGVsdGFYID0gdGhpcy5kZWx0YVg7XG4gICAgICB2YXIgX3RoaXMkZGF0YTQgPSB0aGlzLmRhdGEsXG4gICAgICAgICAgbGVmdFdpZHRoID0gX3RoaXMkZGF0YTQubGVmdFdpZHRoLFxuICAgICAgICAgIHJpZ2h0V2lkdGggPSBfdGhpcyRkYXRhNC5yaWdodFdpZHRoO1xuXG4gICAgICBpZiAoZGVsdGFYIDwgMCAmJiAoLWRlbHRhWCA+IHJpZ2h0V2lkdGggfHwgIXJpZ2h0V2lkdGgpIHx8IGRlbHRhWCA+IDAgJiYgKGRlbHRhWCA+IGxlZnRXaWR0aCB8fCBkZWx0YVggPiAwICYmICFsZWZ0V2lkdGgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgdGhpcy5zd2lwZU1vdmUoZGVsdGFYKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVuZERyYWc6IGZ1bmN0aW9uIGVuZERyYWcoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICBkcmFnaW5nOiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0aGlzLnN3aXBpbmcpIHtcbiAgICAgICAgdGhpcy5zd2lwZUxlYXZlVHJhbnNpdGlvbih0aGlzLmRhdGEub2Zmc2V0ID4gMCA/IC0xIDogMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQkID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmtleSxcbiAgICAgICAgICBwb3NpdGlvbiA9IF9ldmVudCRjdXJyZW50VGFyZ2V0JCA9PT0gdm9pZCAwID8gJ291dHNpZGUnIDogX2V2ZW50JGN1cnJlbnRUYXJnZXQkO1xuICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBwb3NpdGlvbik7XG5cbiAgICAgIGlmICghdGhpcy5kYXRhLm9mZnNldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIHtcbiAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXNcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN3aXBlTW92ZSgwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==