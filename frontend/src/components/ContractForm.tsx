import { useState, useEffect, FormEvent, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import CheckboxDropdown from "./CheckboxDropdown";
// import Test from "./test";
// const ContractForm = async () => {
function ContractForm(/*  candidates:any */setRegex : React.Dispatch<React.SetStateAction<RegExp>>) {
    // const [candidates, setCandidates] = useState([]);
    // useEffect(() => {
    //     (async function getCandidates() {
    //         const res = await fetch(
    //             "http://localhost:3001/candidates"
    //             // "https://candidate-search.onrender.com/candidates"
    //         );
    //         const candidateData = await res.json();
    //         setCandidates(candidateData.data);
    //     })();
    // }, []);
    const [jobTitleInput, setJobTitleInput] = useState("");
    const [contactPhoneInput, setContactPhoneInput] = useState("");
    const [contactEmailInput, setContactEmailInput] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [skills, setSkills] = useState([]);
    let handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("FORM SUBMTITED WITH DATA: ", {
            Title: jobTitleInput,
            Phone: contactPhoneInput,
            Email: contactEmailInput,
            skills: skills,
        });

        let requiredSkillsRegex = new RegExp(
            skills
                .map((e: any) => {
                    // TODO: Fix type
                    return e.value;
                })
                .join("|"),
            "gi"
        );
        console.log("REQUIRED SKILLS REGEXP: ", requiredSkillsRegex);
        setRegex(requiredSkillsRegex)
    };
    // console.log(candidates);
    return (
            <div className="flex items-center justify-center flex-col">
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                        className="border-solid border-4 border-white bg-rose-500 flex flex-col content-between items-center justify-evenly p-5"
                    >
                        <input
                            type="text"
                            name="job-title"
                            placeholder="Job title"
                            onChange={(e) => {
                                setJobTitleInput(e.target.value);
                            }}
                            value={jobTitleInput}
                        ></input>
                        <input
                            type="text"
                            name="contact-phone"
                            placeholder="Phone number"
                            onChange={(e) => {
                                setContactPhoneInput(e.target.value);
                            }}
                            value={contactPhoneInput}
                        ></input>
                        <input
                            type="text"
                            name="contact-email"
                            placeholder="Email address"
                            onChange={(e) => {
                                setContactEmailInput(e.target.value);
                            }}
                            value={contactEmailInput}
                        ></input>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update: any) => {
                                //TODO: fix type
                                setDateRange(update);
                            }}
                            isClearable={true}
                        />
                        <CheckboxDropdown
                            skills={skills}
                            setSkills={setSkills}
                        />
                        <button className="p-5 bg-blue-500 m-2">Submit</button>
                    </form>
                </div>
    );
}
export default ContractForm;
