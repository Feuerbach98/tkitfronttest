import React from 'react'
import ReactDOM from 'react-dom'

import Tkit from './Components/Tkit'


import './styles.css'

function App() {
    return (
        <Tkit />
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)