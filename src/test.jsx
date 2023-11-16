// import { useState } from "react";

// const Test = () => {
//     var [count,setcount]=useState(0)
//     var increment=()=>{
//         setcount(count+1)
//     }
//     var decrement=()=>{
//         if(count>0){
//             setcount(count-1)
//           }
//     }
//     return ( <div>
// <div>
//     <span className="span1">{count}</span>
//     <div style={{display:'flex'}}>
//         <button className="btn+1" onClick={increment}>+</button>
//         <button className="btn-1" onClick={decrement}>-</button>
//     </div>
// </div>
    
// <div>
//     <span className="span2">{count}</span>
//     <div style={{display:'flex'}}>
//         <button className="btn+2" onClick={increment}>+</button>
//         <button className="btn-2" onClick={decrement}>-</button>
//     </div>
// </div>
    
    
//     </div> );
// }
 
// export default Test;
import { useState } from "react";

const Test = () => {
  const [counts, setCounts] = useState(new Array(10).fill(0));

  const increment = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  const decrement = (index) => {
    if (counts[index] > 0) {
      const updatedCounts = [...counts];
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);
    }
  };

  return (
    <div>
      {counts.map((count, index) => (
        <div key={index}>
          <span>{count}</span>
          <button onClick={() => increment(index)}>+</button>
          <button onClick={() => decrement(index)}>-</button>
        </div>
      ))}
      <input type="text" onChange={()=>{}} />

    </div>
  );
};

export default Test;