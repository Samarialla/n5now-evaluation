import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
    <Suspense fallback='loading'>
        <App />
    </Suspense>,
    document.querySelector('#root')
)
