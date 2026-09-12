// import { useRef } from 'react';
// import gsap from 'gsap';
// import { dockApps } from '#constants/index.js';
// import { Tooltip } from 'react-tooltip';
// import { useGSAP } from '@gsap/react';

// const Dock = () => {
//   const dockRef = useRef(null);

//   useGSAP(() => {
//     const dock = dockRef.current;

//     if (!dock) return;

//     const icons = dock.querySelectorAll('.dock-icon');

//     const animateIcons = (mouseX) => {
//       const { left } = dock.getBoundingClientRect();

//       icons.forEach((icon) => {
//         const {
//           left: iconLeft,
//           width,
//         } = icon.getBoundingClientRect();

//         const center =
//           iconLeft - left + width / 2;

//         const distance = Math.abs(
//           mouseX - center
//         );

//         const intensity = Math.exp(
//           -(distance ** 2.5) / 20000
//         );

//         gsap.to(icon, {
//           scale: 1 + 0.25 * intensity,
//           y: -15 * intensity,
//           duration: 0.2,
//           ease: 'power1.out',
//           overwrite: 'auto',
//         });
//       });
//     };

//     const handleMouseMove = (e) => {
//       const { left } =
//         dock.getBoundingClientRect();

//       animateIcons(e.clientX - left);
//     };

//     const resetIcons = () => {
//       icons.forEach((icon) => {
//         gsap.to(icon, {
//           scale: 1,
//           y: 0,
//           duration: 0.3,
//           ease: 'power1.out',
//           overwrite: 'auto',
//         });
//       });
//     };

//     dock.addEventListener(
//       'mousemove',
//       handleMouseMove
//     );

//     dock.addEventListener(
//       'mouseleave',
//       resetIcons
//     );

//     return () => {
//       dock.removeEventListener(
//         'mousemove',
//         handleMouseMove
//       );

//       dock.removeEventListener(
//         'mouseleave',
//         resetIcons
//       );

//       gsap.killTweensOf(icons);
//     };
//   }, []);

//   const toggleApp = (id) => {
//     console.log('Opening app:', id);
//   };

//   return (
//     <section id="dock">
//       <div
//         ref={dockRef}
//         className="dock-container"
//       >
//         {dockApps.map(
//           ({ id, name, icon, canOpen }) => (
//             <div
//               key={id}
//               className="relative flex justify-center"
//             >
//               <button
//                 type="button"
//                 className="dock-icon"
//                 aria-label={name}
//                 data-tooltip-id="dock-tooltip"
//                 data-tooltip-content={name}
//                 data-tooltip-delay-show={150}
//                 disabled={!canOpen}
//                 onClick={() => toggleApp(id)}
//               >
//                 <img
//                   src={`/images/${icon}`}
//                   alt={name}
//                   loading="lazy"
//                   className={
//                     canOpen ? '' : 'opacity-60'
//                   }
//                 />
//               </button>
//             </div>
//           )
//         )}

//         <Tooltip
//           id="dock-tooltip"
//           place="top"
//           className="tooltip"
//         />
//       </div>
//     </section>
//   );
// };

// export default Dock;

import { useRef } from 'react';
import gsap from 'gsap';
import { dockApps } from '#constants/index.js';
import { Tooltip } from 'react-tooltip';
import { useGSAP } from '@gsap/react';
import useWindowStore from '#store/window.js';

const Dock = () => {
  const dockRef = useRef(null);

  const {
    openWindow,
    closeWindow,
    windows,
  } = useWindowStore();

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const {
          left: iconLeft,
          width,
        } = icon.getBoundingClientRect();

        const center =
          iconLeft - left + width / 2;

        const distance = Math.abs(
          mouseX - center
        );

        const intensity = Math.exp(
          -(distance ** 2.5) / 20000
        );

        gsap.to(icon, {
          scale: 1 + 0.3 * intensity,
          y: -18 * intensity,
          duration: 0.12,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    const handleMouseMove = (e) => {
      const { left } =
        dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
      });
    };

    dock.addEventListener(
      'mousemove',
      handleMouseMove
    );

    dock.addEventListener(
      'mouseleave',
      resetIcons
    );

    return () => {
      dock.removeEventListener(
        'mousemove',
        handleMouseMove
      );

      dock.removeEventListener(
        'mouseleave',
        resetIcons
      );

      gsap.killTweensOf(icons);
    };
  }, []);

  const toggleApp = (id, canOpen) => {
    if (!canOpen) return;

    const appWindow = windows[id];

    if (appWindow?.isOpen) {
      closeWindow(id);
    } else {
      openWindow(id);
    }


    console.log(windows);
  };

  return (
    <section id="dock">
      <div
        ref={dockRef}
        className="dock-container"
      >
        {dockApps.map(
          ({
            id,
            name,
            icon,
            canOpen,
          }) => (
            <div
              key={id}
              className="relative flex justify-center"
            >
              <button
                type="button"
                className="dock-icon"
                aria-label={name}
                data-tooltip-id="dock-tooltip"
                data-tooltip-content={name}
                data-tooltip-delay-show={0}
                data-tooltip-delay-hide={0}
                disabled={!canOpen}
                onClick={() =>
                  toggleApp(id, canOpen)
                }
              >
                <img
                  src={`/images/${icon}`}
                  alt={name}
                  loading="lazy"
                  className={
                    canOpen
                      ? ''
                      : 'opacity-60'
                  }
                />
              </button>
            </div>
          )
        )}

        <Tooltip
          id="dock-tooltip"
          place="top"
          delayShow={0}
          delayHide={0}
          className="tooltip"
        />
      </div>
    </section>
  );
};

export default Dock;