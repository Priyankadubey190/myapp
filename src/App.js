import logo from './logo.svg';
import './App.css';

function App() {
  const mobileOs = ["Android","Blackberry","iPhone","Windows Phone"];
  const manufac = ["Samsung","HTC","Micromax","Apple"];
  return (
    <div>
      <div id="add-note" type="text">
       <div >Mobile Operating System</div> 
       <ul>
         {mobileOs.map((e) => (
           <li>{e}</li>
         ))}
       </ul>
       <div >Mobile Manufacturers</div> 
       <ul>
         <li className="list">Samsung</li>
         <li className="list">HTC</li>
         <li className="list">Micromax</li>
         <li className="cir">Apple</li>
       </ul>
        </div>
    </div>
  );
}


export default App;
