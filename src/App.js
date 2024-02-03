
import Accordion from './Accordion'
import accordionData from './utils/content'
function App() {

 
  

  return (
   <>
   <div>
      <div className='accordian container-fluid '>
      {
        accordionData.map(({content,title}) => {
           return <div className='acco-content'><Accordion content={content} title={title}/></div> 
        })
      }
      </div>
   </div>
   
   </>

  );
}


export default App;
// this exporting is for other file can use this component
