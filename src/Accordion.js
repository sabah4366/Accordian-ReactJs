import {  useState } from "react";
import './style.css'


function Accordion({content,title}) { 
   const [isActive,setIsActive] = useState(false)

   function handleClick(){
      setIsActive(!isActive ? true : false)
   }

   return (<>
   <div className="container content">
      <div className="clickcontent" onClick={handleClick}>
         <h5>{title}</h5>
         <p className="plus">{!isActive ?'+':'-'}</p>
         
      </div>
      <p >{isActive ?content:''}</p>

     
      
   </div>
      
   </>)
}

export default Accordion;