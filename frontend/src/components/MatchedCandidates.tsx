import { MatchedIprops} from "../types"


const MatchedCandidates = ({props} : MatchedIprops) => {
console.log({props})
    return (
        <div>
            <h2>These candidates fully match your criteria</h2>
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

export default MatchedCandidates