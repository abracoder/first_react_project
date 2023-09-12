import { useState } from 'react'
import './App.css'
import './Style.css'


const user = {
  name : " suraj Gupta ",
  imageUrl : 'https://i.imgur.com/yXOvdOSs.jpg',
  imazeSize : 101,
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}


export default function App () {
  const [count, setCount] = useState(0);

  function handleClick(){
    console.log("button clicked" + count)
    setCount(count +1)
  }

   return (
    <>
    <MyImageProfile/>
      <p> HELLO React</p>
      <Cup />
      <Cup />
      <Cup />
      <MyButton  count = { count } handleClick = {handleClick}/>
      <MyButton  count = { count } handleClick = {handleClick}/>

      </>
   )
}


function MyImageProfile(){
  const productItems = products.map (product  => {
    return (
      <>
        <h1>{product.title}</h1>
        <img src ={user.imageUrl} 
        alt = "profile photo"
        style = {{ width: user.imazeSize,
        height: user.imazeSize}}></img>    
      </>
     )

  })
  return productItems;
   
}

function MyButton({ count, handleClick }){

  return (
    <button className = " myButton"  onClick = {handleClick}>
      MyButton clicked count = {count}
    </button>
  )
}

