const defaultQueues = {
  left: [],
  right: []
}

const queues = (state = defaultQueues, action) => {
  switch (action.type) {
    case 'SET_SIDE_QUEUE':
      const newState = {...state}
      newState[action.side] = action.queue
      return newState

    case 'PUSH_TO_QUEUE':
      if (state[action.side].includes(action.song)) {
        return state
      }
      else {
        let pushedNewState = {...state}
        let pushedSideQueue = [...state[action.side]]
        pushedSideQueue.push(action.song)

        pushedNewState[action.side] = pushedSideQueue
        return pushedNewState
      }

    case 'SHIFT_FROM_QUEUE':
      const shiftedNewState = {...state}
      let shiftedSideQueue = [...state[action.side]]
      shiftedSideQueue.shift()

      shiftedNewState[action.side] = shiftedSideQueue
      return shiftedNewState

    default:
      return state
  }
}

export default queues
