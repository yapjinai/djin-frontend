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

export function doubleEventListener(type) {
  const shiftShortcuts = keyboardShortcuts[type].double.shift
  const metaShortcuts = keyboardShortcuts[type].double.meta

  const shiftShortcutKeys = Object.keys(shiftShortcuts)
  const metaShortcutKeys = Object.keys(metaShortcuts)

  document.addEventListener('keydown', (e) => {
    if (e.target.type !== 'text' && e.target.type !== 'number') {
      e.preventDefault()

      shiftShortcutKeys.forEach(k => {
        if (e.shiftKey && e.key === k) {
          const fn = shiftShortcuts[k]
          const boundFn = fn.bind(this)
          boundFn()
        }
      })
    } // end prevent shortcuts when input is focused
  }) // end event listener
} // end single-key shortcut function
