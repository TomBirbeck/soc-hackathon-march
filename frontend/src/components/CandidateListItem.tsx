import { useEffect, useState } from "react";
import { CandidateList, MatchedIprops } from "../types";

interface CandidateListItemIprops {
    props: {
        id: number,
        name: string,
        skills: string
    }
}

const CandidateListItem = ({props}: CandidateListItemIprops) => {
 
    return (
        <li key={props.id} className="text-left">
            <p><span className="font-bold">Name: </span>{props.name}</p>
            {<p><span className="font-bold">Skills: </span>{props.skills}</p>}
        </li>
    )
}

export default CandidateListItem