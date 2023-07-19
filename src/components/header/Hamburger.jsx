// // library
// import React, { useState } from "react"
// import { Link } from "react-router-dom"

// // icon
// import { Divide as Hamburger } from "hamburger-react"
// import { BiSearch } from "react-icons/bi"

// const HamburgerMenu = () => {
//   const [isOpen, setOpen] = useState(false)

//   const handleToggle = () => {
//     setOpen(!isOpen)
//   }

//   return (
//     <div>
//       <div className="" onClick={handleToggle}>
//         <Hamburger size={25} />
//       </div>
//       <div
//         className={`absolute left-0 gap-8 text-sm flex flex-col bg-primaryBgBlack py-3 w-full text-center ${
//           isOpen ? "top-open" : "top-close"
//         }`}
//       >
//         <Link>Home</Link>
//         <Link>TV Show</Link>
//         <Link>Movies</Link>
//         <Link>My List</Link>
//         <div className="flex items-center justify-center gap-3">
//           <input
//             type="search"
//             className="w-[80%] p-1 border-none outline-none text-primaryBgBlack"
//             onChange={({target}) => }
//             placeholder="Title, Genres, People"
//           />
//           <BiSearch size={23} />
//         </div>
//         {/* <div className="flex items-center gap-5 justify-end mx-5  md:hidden">
//           <button className="bg-primaryRed py-1 px-3 rounded-md">search</button>
//         </div> */}
//       </div>
// <style>
//   {`
//   @media (min-width: 641px) {
//     .top-open {
//       top: 8vw !important;
//       transition: top 500ms;
//     }
//     .top-close {
//       top: -500% !important;
//       transition: top 500ms;
//     }
//   }
//   @media (max-width: 640px){
//     .top-open {
//       top: 15vw !important;
//       transition: top 500ms;
//     }
//     .top-close {
//       top: -500% !important;
//       transition: top 500ms;
//     }
//   }
// `}
// </style>
//     </div>
//   )
// }

// export default HamburgerMenu
