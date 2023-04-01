import { options } from "../types"


const regexCreator = (wordList : options[]) => {
return new RegExp(wordList.map((item) => {return item.value}).join("|"),"gi")
}

export default regexCreator

// let requiredSkillsRegex = new RegExp(
//     skills
//         .map((e: any) => {
//             // TODO: Fix type
//             return e.value;
//         })
//         .join("|"),
//     "gi"
// );