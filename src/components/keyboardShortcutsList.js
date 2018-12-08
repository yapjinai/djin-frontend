export const keyboardShortcuts = {
  help: {
    single: {},
    double: {
      shift: {
        '?': function () {
          this.handleClick()
        }
      },
      meta: {}
    }
  },
  seek: {
    single: {
      '1': function () {
        if (this.props.side === 'left') {
          this.fastBack()
        }
      },
      '2': function () {
        if (this.props.side === 'left') {
          this.fastForwards()
        }
      },
      '9': function () {
        if (this.props.side === 'right') {
          this.fastBack()
        }
      },
      '0': function () {
        if (this.props.side === 'right') {
          this.fastForwards()
        }
      },
    },
    double: {
      shift: {
        '!': function () {
          if (this.props.side === 'left') {
            this.back()
          }
        },
        '@': function () {
          if (this.props.side === 'left') {
            this.forwards()
          }
        },
        '(': function () {
          if (this.props.side === 'right') {
            this.back()
          }
        },
        ')': function () {
          if (this.props.side === 'right') {
            this.forwards()
          }
        },
      },
      meta: {}
    }
  },


}
