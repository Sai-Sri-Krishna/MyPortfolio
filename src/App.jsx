import gsp from 'gsap'
import {Draggable} from 'gsap/Draggable'

import {Navbar, Welcome,Dock,Home} from '#components/index.js'
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

        <Home/>
    </main>
  )
}


export default App
