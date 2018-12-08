import keyboardShortcuts from './keyboardShortcutsList'

function SingleEventListener(type) {
  const shortcuts = keyboardShortcuts[type].single
  const shortcutKeys = Object.keys(shortcuts)

  document.addEventListener('keydown', (e) => {
    if (e.target.type !== 'text' && e.target.type !== 'number') {
      e.preventDefault()

      shortcutKeys.forEach(k => {

      })

      //
      // switch (e.key) {
      //   case '':
      //   break;
      //   default:
      // } // end switch
    } // end prevent shortcuts when input is focused
  }) // end event listener
} // end single-key shortcut function
