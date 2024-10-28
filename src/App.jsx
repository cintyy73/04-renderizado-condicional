import "./App.css";
import ListIfElse from "./components/ListIfElse.jsx";
import ListTernario from "./components/ListTernario.jsx";
import { dogs } from "./dataBase.js";

//if/else
//ternario condición?esto: lo otro
//Operadores lógicos && ||
//enum

const user = false

function App() {
  return (
    <div>
      <h1>bienvenidos!!</h1>
   {/* {!user && <p>debes loguearte</p>}  */}
   

     {/* {!user || <p>debes loguearte</p>}  */}
   
    {user && <ListIfElse dogs={dogs} /> }
  {user && 
     <div>
       <h1>App dogs</h1>
       <ListTernario dogs={dogs} />
     </div>
   }
    </div>
  );
}

export default App;
