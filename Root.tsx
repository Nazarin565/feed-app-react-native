import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
