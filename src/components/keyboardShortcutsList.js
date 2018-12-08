export const keyboardShortcuts = {
  help: {
    single: {},
    double: {
      shift: {
        '?': function () {
          this.handleClick()
        }
      }
    }
  },
  seek: {
    single: {
      '1': function () {
        if (this.props.side === 'left') {
          this.back()
        }
      },
      '2': function () {
        if (this.props.side === 'left') {
          this.forwards()
        }
      },
      '9': function () {
        if (this.props.side === 'right') {
          this.back()
        }
      },
      '0': function () {
        if (this.props.side === 'right') {
          this.forwards()
        }
      },
    },
    double: {
      shift: {
        '!': function () {
          if (this.props.side === 'left') {
            this.fastBack()
          }
        },
        '@': function () {
          if (this.props.side === 'left') {
            this.fastForwards()
          }
        },
        '(': function () {
          if (this.props.side === 'right') {
            this.fastBack()
          }
        },
        ')': function () {
          if (this.props.side === 'right') {
            this.fastForwards()
          }
        },
      }
    }
  },


}
