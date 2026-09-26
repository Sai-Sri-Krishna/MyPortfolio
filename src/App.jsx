import gsp from 'gsap'
import {Draggable} from 'gsap/Draggable'

import {Navbar, Welcome,Dock} from '#components/index.js'
import {Terminal,Safari,Resume,Finder,TextWindow,ImageWindow,ContactWindow} from '#windows'

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
        <ContactWindow/>
    </main>
  )
}


export default App
