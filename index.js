import {
  input1key,
  input1val,
  submitBtn,
  stateLoggerBtn,
} from "./dom-selectors.js";
import state from "./state-manager.js";
import { DefaultComponentStyle } from './styles.js';
import { ConnectedComponent, Component } from "./Component.js";

const header = ConnectedComponent("header", {
  style: `${DefaultComponentStyle('r')}`,
  text: "Connected - Header Component",
});

const main = ConnectedComponent("main", {
  style: `${DefaultComponentStyle('g')}`,
  text: "Connected - Main Component",
});

Component("footer", {
  style: `${DefaultComponentStyle('b')}`,
  text: "Static - Footer Component",
});


function initialize() {
  // submit and change state
  submitBtn.addEventListener("click", () => {
    const newState = { ...state.state, [input1key.value]: input1val.value };
    return state.set(newState);
  });

  // log state
  stateLoggerBtn.addEventListener("click", () => state.log());

  // add Subscriber
  state.addSubscribers([header, main]);
}

initialize();
