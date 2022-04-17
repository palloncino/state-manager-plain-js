function initStateManager() {
  
  let state = {};

  const set = (newState) => {
    state = { ...state, ...newState };
  }

  const log = () => console.log(state)

  const stateManager = () => {
    return {
      state,
      set,
      log,
    }
  }

  return stateManager();
}

export default initStateManager;