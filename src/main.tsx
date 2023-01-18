import {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/app/App'
import './index.scss'
import {ToastProvider} from 'react-toast-notifications';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Fragment>
        <ToastProvider>
            <App/>
        </ToastProvider>
    </Fragment>,
)
