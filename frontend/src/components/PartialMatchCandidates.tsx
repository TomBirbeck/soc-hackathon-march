import { MatchedIprops } from "../types"


const PartialMatches = ({props}: MatchedIprops) => {
    return(
        <div>
            <h2>These candidates partially match your criteria</h2>
        <ul>
        {props.map((candidate) => {return (
            <li key={candidate.id}>
                <p className="font-bold">{candidate.name}</p>
                <p>{candidate.skills}</p>
            </li>
        )})}
        </ul>
        </div>
    )
}

export default PartialMatches