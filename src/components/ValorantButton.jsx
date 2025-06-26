
// ValorantButton.displayName = "ValorantButton";
// export default ValorantButton;

// import React, { forwardRef } from "react";

// const ValorantButton = forwardRef(
//   (
//     {
//       children,
//       className = "",
//       onClick,
//       // --- Customizable Color Props ---
//       backgroundColor = "#fa4454", // Valorant Red
//       textColor = "#ffffff",
//       highlightColor = "#111111",
//       borderColor = "#7d8082",
//       // ---------------------------------
//       ...rest
//     },
//     ref
//   ) => {
//     // We use inline CSS variables to make the component themeable via props.
//     // Tailwind's arbitrary value system can then read these variables.
//     const buttonStyle = {
//       "--button-background-color": backgroundColor,
//       "--button-text-color": textColor,
//       "--highlight-color": highlightColor,
//       "--border-color": borderColor,
//       "--button-bits-color": textColor, // 'bits' are the small corner squares
//       "--button-text-color-hover": backgroundColor, // Text color on hover
//       "--button-bits-color-hover": backgroundColor, // 'bits' color on hover
//     };

//     return (
//       <button
//         ref={ref}
//         onClick={onClick}
//         style={buttonStyle}
//         className={`
//         group relative p-2 font-bold uppercase tracking-wide text-sm
//         appearance-none border-none bg-transparent cursor-pointer
//         transition-all duration-150 ease-in-out
//         focus:outline-none active:outline-none
//         text-[var(--button-text-color)]

//         before:content-[''] before:block before:absolute before:top-0 before:left-0 before:right-0
//         before:h-[calc(50%-5px)] before:border before:border-b-0 before:border-[var(--border-color)]
//         before:transition-all before:duration-150 before:ease-in-out

//         after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:right-0
//         after:h-[calc(50%-5px)] after:border after:border-t-0 after:border-[var(--border-color)]
//         after:transition-all after:duration-150 after:ease-in-out

//         ${className}
//       `}
//         {...rest}
//       >
//         <span
//           className="
//           relative block py-[22px] px-[75px] overflow-hidden
//           bg-[var(--button-background-color)]
//           after:content-[''] after:block after:absolute after:bottom-0 after:right-0
//           after:w-1 after:h-1 after:bg-[var(--button-bits-color)]
//           after:transition-all after:duration-200 after:ease-in-out

//           // Change bits color on parent hover
//           group-hover:after:bg-[var(--button-bits-color-hover)]
//         "
//         >
//           <span
//             className="
//             // The diagonal sliding highlight
//             absolute block top-0 left-[-8px] bottom-[-1px] w-0
//             bg-[var(--highlight-color)]
//             transform -skew-x-[15deg]
//             transition-all duration-200 ease-in-out

//             // Slide animation on parent hover
//             group-hover:w-[calc(100%+15px)]
//           "
//           ></span>
//           <span
//             className="
//             relative text-[var(--button-text-color)]
//             group-hover:text-[var(--button-text-color-hover)]
//             transition-colors duration-200 ease-in-out
//           "
//           >
//             {children}
//           </span>
//         </span>
//       </button>
//     );
//   }
// );

// ValorantButton.displayName = "ValorantButton";

// export default ValorantButton;

// src/components/ValorantButton.jsx

import React from "react";

const ValorantButton = ({
  variant = "red", // 'red' or 'white'
  children,
  className = "",
  ...props
}) => {
  // Base classes that are common to both variants
  const baseClasses =
    "group relative p-[3px] font-body uppercase font-bold text-sm cursor-pointer border-none bg-transparent transition-all duration-150 ease-in-out focus:outline-none active:outline-none";

  // Classes for the outer border pseudo-elements
  const borderClasses = `
    before:content-[''] before:block before:absolute before:top-0 before:left-0 before:right-0 before:h-[calc(50%-5px)] before:border before:border-valorant-grey before:border-b-0 before:transition-all before:duration-150 before:ease-in-out
    after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[calc(50%-5px)] after:border after:border-valorant-grey after:border-t-0 after:transition-all after:duration-150 after:ease-in-out
   
  `;

  // Variant-specific classes
  const variantClasses = {
    red: {
      inner: "bg-valorant-red text-valorant-offwhite",
      bits: "before:bg-valorant-offwhite after:bg-valorant-offwhite group-hover:after:bg-valorant-red",
      content: "group-hover:text-valorant-offwhite",
    },
    white: {
      inner: "bg-valorant-offwhite text-black",
      bits: "before:bg-black after:bg-black group-hover:after:bg-valorant-offwhite",
      content: "group-hover:text-valorant-offwhite",
    },
  };

  return (
    <button
      className={`${baseClasses} ${borderClasses} ${className}`}
      {...props}
    >
      <span
        // className={`
        //   relative block py-5.5 px-[80px] overflow-hidden shadow-inner
        //   ${variantClasses[variant].inner}
        //   ${variantClasses[variant].bits}
        //   after:content-[''] after:block after:absolute after:bottom-0 after:right-0 after:w-1 after:h-1 after:transition-all after:duration-200 after:ease-in-out
        // `}
        className={`
          relative block py-5.5 px-[80px] overflow-hidden shadow-inner
          ${variantClasses[variant].inner}
         
        `}
      >
        {/* The sliding highlight effect */}
        <span className="absolute top-0 bottom-[-1px] left-[-9px] block w-0 -skew-x-[15deg] bg-valorant-dark transition-all duration-200 ease-in-out group-hover:w-[calc(100%+20px)]" />
        {/* The button text content */}
        <span
          className={`relative z-10 transition-colors duration-200 ease-in-out ${variantClasses[variant].content}`}
        >
          {children}
        </span>
      </span>
    </button>
  );
};

export default ValorantButton;
