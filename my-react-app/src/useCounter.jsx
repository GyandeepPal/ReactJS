// import { useState } from "react";


// function useCounter(data = 0) {
//   const [count, setCount] = useState(data);

//   const inc = () => setCount(count + 1);
//   const dec = () => setCount(count - 1);
//   const reset = () => setCount(data);

//   return { count, inc, dec, reset };
// }

// export default useCounter;

import { useState } from "react";

function useCounter(){
    let [count , setCount]=useState(data=0)
    let inc=()=>setCount(count+1)
    let dec=()=>setCount(count-1)
    return(count,inc,dec)
}
export default useCounter