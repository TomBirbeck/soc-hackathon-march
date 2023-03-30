import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContractForm from "./components/ContractForm";
function App() {
    const [count, setCount] = useState(0);

    // Candidate list here


    // Candidate vs search logic here

    return (
        <div className="App">
            <ContractForm></ContractForm>
        </div>
    );
}

export default App;
