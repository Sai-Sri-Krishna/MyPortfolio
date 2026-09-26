import gsp from 'gsap'
import {Draggable} from 'gsap/Draggable'

import {Navbar, Welcome,Dock} from '#components/index.js'
import {Terminal,Safari,Resume,Finder,TextWindow,ImageWindow} from '#windows'

gsp.registerPlugin(Draggable)

const App = () => {
  return (
    <main>
        <Navbar />
        <Welcome />
        <Dock />


        <Terminal />
        <Safari/>
        <Resume/>
        <Finder/>
        <TextWindow/>
        <ImageWindow/>
    </main>
  )
}


export default App
