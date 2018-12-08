import {keyboardShortcuts} from './keyboardShortcutsList'

export function keyboardShortcutsFunction(type) {
  const singleShortcuts = keyboardShortcuts[type].single
  const shiftShortcuts = keyboardShortcuts[type].double.shift
  const metaShortcuts = keyboardShortcuts[type].double.meta

  const singleShortcutKeys = Object.keys(singleShortcuts)
  const shiftShortcutKeys = Object.keys(shiftShortcuts)
  const metaShortcutKeys = Object.keys(metaShortcuts)

  document.addEventListener('keydown', (e) => {
    if (e.target.type !== 'text' && e.target.type !== 'number') {
      e.preventDefault()

      singleShortcutKeys.forEach(k => {
        if (e.key === k) {
          const fn = singleShortcuts[k]
          const boundFn = fn.bind(this)
          boundFn()
        }
      })

      shiftShortcutKeys.forEach(k => {
        if (e.shiftKey && e.key === k) {
          const fn = shiftShortcuts[k]
          const boundFn = fn.bind(this)
          boundFn()
        }
      })

      metaShortcutKeys.forEach(k => {
        if (e.metaKey && e.key === k) {
          const fn = metaShortcuts[k]
          const boundFn = fn.bind(this)
          boundFn()
        }
      })

    } // end prevent shortcuts when input is focused
  }) // end event listener
} // end single-key shortcut function
