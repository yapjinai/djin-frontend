// called in Help.js

export default function addKeyboardShortcutsHelp() {
  document.addEventListener('keydown', (firstEvent) => {
    if (firstEvent.target.type !== 'text' && firstEvent.target.type !== 'number') {
      firstEvent.preventDefault()
      let shiftPressed = false

      // SETUP FOR DOUBLE KEY SHORTCUTS - SHIFT
      if (!shiftPressed) {
        if (firstEvent.key === 'Shift') {
          shiftPressed = true
          document.addEventListener('keyup', (secondEvent) => {
            if (secondEvent.key === 'Shift') {
              shiftPressed = false
            }
          })
          document.addEventListener('keydown', (secondEvent) => {
            secondEvent.preventDefault()
            if (shiftPressed) {
              switch (secondEvent.key) {
                // HELP
                case '?':
                  this.handleClick()
                break;
                default:

              }
            }
          })
        }
      }

    } // end prevent shortcuts when input is focused
  }) // end event listener
}
