import gsp from 'gsap'
import {Draggable} from 'gsap/Draggable'

import {Navbar, Welcome,Dock} from '#components/index.js'
import {Terminal,Safari} from '#windows'

gsp.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />


        <Terminal />
        <Safari/>
    </main>
  )
}


export default App
