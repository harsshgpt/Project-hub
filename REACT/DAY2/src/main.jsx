
import { createRoot } from 'react-dom/client'
import "./index.css"
import {ToastConatainer} from "react-toastify";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <>
    <App />
    <ToastConatainer position = "top-center"/>
  </>
)
