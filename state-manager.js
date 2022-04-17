function initStateManager() {
  let state = {};
  let subscribers = [];

  const addSubscribers = (entries) => entries.forEach(entry => subscribers.push(entry));

  const notifySubscribers = () => subscribers.forEach((sub) => sub(state));

  const logSubscribers = () => console.log(subscribers);

  const set = (newState) => {
    state = { ...state, ...newState };
    notifySubscribers();
    return;
  };

  const log = () => console.log(state);

  const stateManager = () => ({
    state,
    set,
    log,
    addSubscribers,
    logSubscribers,
    notifySubscribers,
  });

  return stateManager();
}

const state = initStateManager();

export default state;
