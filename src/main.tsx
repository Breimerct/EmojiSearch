import {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/app/App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Fragment>
        <App/>
    </Fragment>,
)
