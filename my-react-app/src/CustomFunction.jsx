// import React from 'react'

// const CustomFunction = () => {
//     // let arr=[1,12,3,44,5,5]
//     Array.prototype.GyanDeep=function(cd){
//         let res=[]
//         for(let i=0;i<this.length;i++){
//             res.push(cd(this[i],i,this))

//         }
//     return res
//     }

// let arr =[1,2,34,5,5]
// let data=arr.GyanDeep((a,b,c)=>{
//     return a
// })
// console.log(data);

//   return (
//     <div>CustomFunction</div>
//   )
// }

// export default CustomFunction









// import React from 'react'

// const CustomFunction = () => {
//     // let arr=[1,12,3,44,5,5]
//     Array.prototype.GyanDeep=function(cd){
//         let res=[]
//         for(let i=0;i<this.length;i++){
//             // res.push(cd(this[i],i,this))
//             cd(this[i],i,this)
            
//         }
//     // return res
//     }

// let arr =[1,2,34,5,5]
// let data=arr.GyanDeep((a,b,c)=>{
//     // return a
// })
// console.log(data);

//   return (
//     <div>CustomFunction</div>
//   )
// }

// export default CustomFunction




// import React from 'react'

// const CustomFunction = () => {
//     const arr=[12,33,4,54,45]
//     const data=arr.reduce((a,b,c,d)=>{
//         return a+b
//     },12)
//     console.log(data);
    
//   return (
//     <div>CustomFunction</div>
//   )
// }

// export default CustomFunction


import React from 'react'

const CustomFunction = () => {
    Array.prototype.Rahul=function(cd,initialData=0){
        let sum=initialData
        for(let i=0;i<this.length;i++){
            sum=cd(sum,this[i])

        }
    return sum
    }

let arr =[1,2,34,5,5]
let data=arr.Rahul((a,b,c,d)=>{
    return a+b
})
console.log(data);

  return (
    <div>CustomFunction</div>
  )
}

export default CustomFunction
