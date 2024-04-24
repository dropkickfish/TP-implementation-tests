import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { installTwicpics } from "@twicpics/components/react";

import "./assets/styles/scss/index.scss"
import "@twicpics/components/style.css";

installTwicpics({
  "domain": "https://andy-netflify.twic.pics",
  "step": 50
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
