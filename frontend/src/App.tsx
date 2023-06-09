import { useState, useEffect } from "react";
import "./App.css";
import ContractForm from "./components/ContractForm";
import MatchedCandidates from "./components/MatchedCandidates";
import PartialMatches from "./components/PartialMatchCandidates";
import { CandidateList, options } from "./types";
import regexCreator from "./utilities/regexCreator";
import partialMatchingCandidates from "./utilities/partialMatches";
import fullMatchingCandidates from "./utilities/fullMatches";

function App() {
    const [candidates, setCandidates] = useState([]);
    const [fullMatches, setFullMatches]  = useState<CandidateList[]>([]);
    const [partialMatches, setPartialMatches] = useState<CandidateList[]>([]);
    const [requiredSkills, setRequiredSkills] = useState<options[]>([])
    const [regex, setRegex] = useState<RegExp>(/ /gi)
    const url = (import.meta.env.VITE_DB_URL)

    useEffect(() => {
        const getCandidates = async () => {
            const res = await fetch(
                url
            );
            const candidateData = await res.json();
            setCandidates(candidateData.data);
        };
        getCandidates();
    }, []);
    
    useEffect(() => {
        setRegex(regexCreator(requiredSkills))
        setFullMatches(fullMatchingCandidates(candidates, requiredSkills))
        setPartialMatches(partialMatchingCandidates(candidates, regex, requiredSkills.length))
    }, [requiredSkills])

    return (
            <div className="App">
                <ContractForm setRequiredSkills = {setRequiredSkills}/>
                <MatchedCandidates props={fullMatches}/>
                <PartialMatches props={partialMatches}/>
            </div>
    );
}

export default App;
