export const keyboardShortcuts = {
  help: {
    single: {},
    double: {
      shift: {
        '?': () => {
          this.handleClick()
        }
      }
    }
  },
  seek: {
    single: {
      '1': () => {
        if (this.props.side === 'left') {
          this.back()
        }
      },
      '2': () => {
        if (this.props.side === 'left') {
          this.forwards()
        }
      },
      '9': () => {
        if (this.props.side === 'right') {
          this.back()
        }
      },
      '0': () => {
        if (this.props.side === 'right') {
          this.forwards()
        }
      },
    },
    double: {
      shift: {
        '!': () => {
          if (this.props.side === 'left') {
            this.fastBack()
          }
        },
        '@': () => {
          if (this.props.side === 'left') {
            this.fastForwards()
          }
        },
        '(': () => {
          if (this.props.side === 'right') {
            this.fastBack()
          }
        },
        ')': () => {
          if (this.props.side === 'right') {
            this.fastForwards()
          }
        },
      }
    }
  },


}
