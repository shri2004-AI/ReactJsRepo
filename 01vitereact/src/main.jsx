import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { jsx as _jsx } from 'react/jsx-runtime'
import App from './App.jsx'

function MyAPP(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}




// const ReactElement = {
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target:'_blank'
//   },
//   Children:'Click me to visit google'
// }



// const anotherUser="chai aur react"

const ReactElement=React.createElement(
    'a',
    {href:'https://google.com',target:"_blank"},
    'click me to visit google',
    // anotherUser
)

const anotherElement=(
    <a href="https:google.com" target='_blank'>Visit Google</a>
)


createRoot(document.getElementById('root')).render(
    ReactElement
)
