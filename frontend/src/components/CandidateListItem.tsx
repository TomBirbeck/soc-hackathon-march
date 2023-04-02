import { CandidateListItemIprops} from "../types";

const CandidateListItem = ({props}: CandidateListItemIprops) => {
 
    return (
        <>
            <p><span className="font-bold">Firstname: </span>{props.name}</p>
            {<p><span className="font-bold">Skills: </span>{props.skills}</p>}
        </>
    )
}

export default CandidateListItem