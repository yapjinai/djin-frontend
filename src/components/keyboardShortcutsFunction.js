import {keyboardShortcuts} from './keyboardShortcutsList'

export function singleEventListener(type) {
  const shortcuts = keyboardShortcuts[type].single
  const shortcutKeys = Object.keys(shortcuts)

  document.addEventListener('keydown', (e) => {
    if (e.target.type !== 'text' && e.target.type !== 'number') {
      e.preventDefault()

      shortcutKeys.forEach(k => {
        if (e.key === k) {
          const fn = shortcuts[k]
          const boundFn = fn.bind(this)
          boundFn()
        }
      })
    } // end prevent shortcuts when input is focused
  }) // end event listener
} // end single-key shortcut function
