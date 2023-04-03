import { CandidateList, PartialMatchedCandidateList } from "../types";

const partialMatchingCandidates = (candidate: CandidateList[], regex: RegExp, skillsAmount: number): PartialMatchedCandidateList[] => {
    //create an empty array to store the matching candidates
    const matchingCandidates: PartialMatchedCandidateList[] = []

    for (let i = 0; i < candidate.length; i++) {

        const match = candidate[i].skills.match(regex)
        // const match = joinedSkills.match(regex)

        if (match) {
            //add matched skills onto candidate object. 
            const matchedCandidate = { ...candidate[i], match}
            matchingCandidates.push(matchedCandidate)
        }
    }

    //get the length of candidate. 
    // sort candidates for highest to lowest
    matchingCandidates.sort(function (a, b) { return b.match.length - a.match.length })
    // console.log("partial", matchingCandidates, matchingCandidates.filter((candidate) => candidate.match.length < skillsAmount))
    const returnedPartials = matchingCandidates.filter((candidate) => candidate.match.length < skillsAmount)
    console.log("partial", skillsAmount, returnedPartials)
    return returnedPartials
}

export default partialMatchingCandidates
