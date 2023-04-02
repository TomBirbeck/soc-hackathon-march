import { MatchedIprops } from "../types"
import CandidateListItem from "./CandidateListItem"


const PartialMatches = ({props}: MatchedIprops) => {
    return(
        <div className="my-5">
            <h2 className="font-bold my-2">These candidates partially match your criteria</h2>
        <ul>
        {props.map((candidate) => {return <CandidateListItem props={candidate}/>})}
        </ul>
        </div>
    )
}

export default PartialMatches