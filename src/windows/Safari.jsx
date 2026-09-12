import { WindowControls } from "#components"
import WindowWrapper from "#hoc/WindowWrapper.jsx"
import { ChevronLeft, Copy, PanelLeft, Plus, Share,ChevronRight,ShieldHalf, Search  } from "lucide-react"

const Safari = () => {
return(<>
  <div id="window-header">
    <WindowControls target="safari"/>

    <PanelLeft className="ml-5 icon"/>
    <div className="flex items-center  ml-2 mr-20 ">
     <ChevronLeft className="icon"/>
     <ChevronRight className="icon"/>
    </div>
    <div className="flex items-center ml-10 gap-2 flex-1">
        <ShieldHalf className="icon"/>
        <div className="search">
            <Search className="icon"/>
            <input type="text" placeholder="Search or enter website name" className="flex-1"/>
        </div>
        </div>
        <div className="flex items-center gap-5">
            <Share className="icon"/>
            <Plus className="icon"/>
            <Copy className="icon"/>
        </div>
        </div>

        <div className="blog">
            <h2>My Developer Blog</h2>
            <div className="items-center justify-center flex flex-col gap-5">
            <p>Coming Soon</p>
            </div>
        </div>
</>
)
}
const SafariWindow = WindowWrapper(Safari,"safari")
export default SafariWindow