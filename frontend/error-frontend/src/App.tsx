
import './App.css'

function App() {
  
  const outerContext=async()=>{
    let [tab] =await chrome.tabs.query({active:true});
    chrome.scripting.executeScript({
      target:{tabId:tab.id!},
      func:()=>{
          alert("outer Context");
      }
    });
  }

  outerContext();
  
  return (
    <>
      
    </>
  )
}

export default App
