
// import React, { useState, useEffect } from 'react';

// function Tt() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [isCounting1, setIsCounting1] = useState(true);
//   const [isCounting2, setIsCounting2] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCount1(count1 => (count1 + 1) % 3);
//       setCount2(count2 => (count2 + 1) % 3);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseEnter1 = () => setIsCounting1(false);
//   const handleMouseLeave1 = () => setIsCounting1(true);
//   const handleMouseEnter2 = () => setIsCounting2(false);
//   const handleMouseLeave2 = () => setIsCounting2(true);

//   const getBorderColor = count => {
//     switch (count) {
//       case 0:
//         return 'blue';
//       case 1:
//         return 'orange';
//       case 2:
//         return 'brown';
//       default:
//         return 'black';
//     }
//   };

//   return (
//     <div>
//       <div
//         style={{border: `5px solid ${getBorderColor(count1)}`,
//           width: '200px',
//           height: '200px',
//         }}
//         onMouseEnter={handleMouseEnter1}
//         onMouseLeave={handleMouseLeave1}
//       >
//         {isCounting1 && <h1 style={{color:'white'}}>{count1}</h1>}
//       </div>
//       <div
//         style={{
//           border: `5px solid ${getBorderColor(count2)}`,
//           width: '200px',
//           height: '200px',
//         }}
//         onMouseEnter={handleMouseEnter2}
//         onMouseLeave={handleMouseLeave2}
//       >
//         {isCounting2 && <h1 style={{color:'white'}}>{count2}</h1>}
//       </div>
//     </div>
//   );
// }

// export default Tt;
// import React, { useState, useEffect } from "react";

// function Tt() {
//   const [div1Color, setDiv1Color] = useState("blue");
//   const [div2Color, setDiv2Color] = useState("red");
//   const [intervalId, setIntervalId] = useState(null);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setDiv1Color(prevColor => {
//         switch (prevColor) {
//           case "blue":
//             return "black";
//           case "black":
//             return "orange";
//           case "orange":
//             return "brown";
//           case "brown":
//             return "blue";
//           default:
//             return "blue";
//         }
//       });
//       setDiv2Color(prevColor => {
//         switch (prevColor) {
//           case "red":
//             return "green";
//           case "green":
//             return "purple";
//           case "purple":
//             return "tan";
//           case "tan":
//             return "red";
//           default:
//             return "red";
//         }
//       });
//     }, 1000);
//     setIntervalId(id);
//     return () => clearInterval(id);
//   }, []);

//   const handleMouseEnterDiv1 = () => {
//     clearInterval(intervalId);
//   };

//   const handleMouseLeaveDiv1 = () => {
//     const id = setInterval(() => {
//       setDiv1Color(prevColor => {
//         switch (prevColor) {
//           case "blue":
//             return "black";
//           case "black":
//             return "orange";
//           case "orange":
//             return "brown";
//           case "brown":
//             return "blue";
//           default:
//             return "blue";
//         }
//       });
//     }, 1000);
//     setIntervalId(id);
//   };

//   const handleMouseEnterDiv2 = () => {
//     clearInterval(intervalId);
//   };

//   const handleMouseLeaveDiv2 = () => {
//     const id = setInterval(() => {
//       setDiv2Color(prevColor => {
//         switch (prevColor) {
//           case "red":
//             return "green";
//           case "green":
//             return "purple";
//           case "purple":
//             return "tan";
//           case "tan":
//             return "red";
//           default:
//             return "red";
//         }
//       });
//     }, 1000);
//     setIntervalId(id);
//   };

//   return (
//     <div>
//       <div style={{ border: `2px solid ${div1Color}` }}
//         onMouseEnter={handleMouseEnterDiv1}
//         onMouseLeave={handleMouseLeaveDiv1}
//       >
//         Div 1
//       </div>
//       <div
//         style={{ border: `2px solid ${div2Color}` }}
//         onMouseEnter={handleMouseEnterDiv2}
//         onMouseLeave={handleMouseLeaveDiv2}
//       >
//         Div 2
//       </div>
//     </div>
//   );
// }

// export default Tt;
import { useState, useEffect } from 'react';

const TimerBox = ({ isActive, handleToggle, label }) => {
  const colors = ['black', 'orange', 'brown'];
  const [colorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setColorIndex((prevColorIndex) => {
          if (prevColorIndex === colors.length - 1) {
            return 0;
          }
          return prevColorIndex + 1;
        });
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [isActive, colors.length]);
  
  const handleMouseEnter = () => {
    handleToggle(label);
  };
  
  return (
    <div
      style={{
        border: `2px solid ${colors[colorIndex]}`,
        margin: '10px',
        padding: '10px',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      {label}
    </div>
  );
};

const Tt = () => {
  const [isActiveBox1, setIsActiveBox1] = useState(true);
  const [isActiveBox2, setIsActiveBox2] = useState(true);
  
  const handleToggle = (label) => {
    if (label === 'Box 1') {
      setIsActiveBox1(!isActiveBox1);
    } else if (label === 'Box 2') {
      setIsActiveBox2(!isActiveBox2);
    }
  };
  
  return (
    <div>
      <TimerBox
        isActive={isActiveBox1}
        handleToggle={handleToggle}
        label="Box 1"
      />
      <TimerBox
        isActive={isActiveBox2}
        handleToggle={handleToggle}
        label="Box 2"
      />
    </div>
  );
};

export default Tt;