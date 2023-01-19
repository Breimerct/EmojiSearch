import {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/app/App'
import './index.scss'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Fragment>
        <App/>
        <ToastContainer/>
    </Fragment>,
)
