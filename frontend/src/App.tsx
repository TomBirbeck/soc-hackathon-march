import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ContractForm from "./components/ContractForm";
function App() {
    /* const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        (async function getCandidates() {
            const res = await fetch(
                "https://candidate-search.onrender.com/candidates"
            );
            const candidateData = await res.json();
            setCandidates(candidateData);
        })();
    }, []); */

    // Candidate list here

    // Candidate vs search logic here

    return (
        <>
            <div className="App">
                <ContractForm /* candidates={candidates} *//>
                          {/* <ul>
                {candidates.map((c) => {
                    return <li></li>;
                })}
            </ul> */}
            </div>
        </>
    );
}

export default App;
