import { 
  input1key,
  input1val,
  input1button,
  stateLogger
} from './dom-selectors.js';
import { state } from './index.js';

const module = (function() {
  input1button.addEventListener('click', () => {
    const newState = {...state.state, [input1key.value]: input1val.value};
    return state.set(newState);
  })

  stateLogger.addEventListener('click', () => state.log());
})()

export default module;