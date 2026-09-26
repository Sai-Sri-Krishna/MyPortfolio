
import WindowWrapper from '#hoc/WindowWrapper.jsx'
import {WindowControls} from '#components'
import useWindowStore from '#store/window.js'

const Image = () => {
    const {windows} = useWindowStore();
    const data=windows.imgfile?.data;
    if(!data) return null;
    const {name,imageUrl} = data;
  return (
    <>
    <div className="window-header flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <WindowControls target="imgfile" />
        <h2 className='text-gray-400'>{name}</h2>
    </div>
    <div className="p-5  bg-white">
        {imageUrl? (
            <div className="w-full">
                <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded" />
            </div>
        ): null}
    </div>
    </>
  )
}
const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
