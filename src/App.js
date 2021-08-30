import './App.css';
import Login from './components/facebook';
import {facebookProvider} from './config/authMethod';
import {Auth} from './service/auth';

function App() {
  const handleOnClick=async (provider)=>{
    const res=await Auth(provider);
    console.log(res)
  }
  return (
    <div className="App">
      <button onClick={()=>handleOnClick(facebookProvider)}>Facebook</button>
    </div>
  );
}

export default App;
