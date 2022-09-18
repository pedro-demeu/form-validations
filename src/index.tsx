import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "normalize.css";
import "./index.css";

const container = document.getElementById('root');
const root = createRoot(container!);
// ReactDOM.render(<App />, document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
