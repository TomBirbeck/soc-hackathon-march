export type CandidateList = {
    id: number,
    name: string,
    skills: string[]
}

export type ContractList = {
    name: string,
    skills: string[]
}

export type PartialMatchedCandidateList = {
    id: number,
    name: string,
    skills: string[],
    match: string[]
}

export interface MatchedIprops {
        props : CandidateList[]
}

export type options = {
    value: string,
    label: string,
}