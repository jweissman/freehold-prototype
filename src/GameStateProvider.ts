import { createProvider } from "reactn";

const INITIAL_UI_STATE = {
  message: '',
  inspect: false,
  inventory: {},
  constructing: null
};

export const GameStateProvider = createProvider(INITIAL_UI_STATE);

