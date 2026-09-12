import gsp from 'gsap'
import {Draggable} from 'gsap/Draggable'

import {Navbar, Welcome,Dock} from '#components/index.js'
import {Terminal} from '#windows'

gsp.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />


        <Terminal />
    </main>
  )
}


export default App
