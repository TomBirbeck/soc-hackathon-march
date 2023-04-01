import { useState } from "react";
import Option from "./Option";
import { default as ReactSelect } from "react-select";

const  CheckboxDropdown = (selected: any) => {
    // TODO: Fix types
    const {skills, setSkills} = selected;

    const options = [
        { value: "java", label: "Java" },
        { value: "javascript", label: "JavaScript" },
        { value: "go", label: "Go" },
        { value: "python", label: "Python" },
        { value: "aws", label: "AWS" },
        { value: "azure", label: "Azure" },
        { value: "gcp", label: "GCP" },
        { value: "cpp", label: "C++" },
        { value: "cs", label: "C#" },
        { value: "sql", label: "SQL" },
        
    ];

    return (
        <div>
            <ReactSelect
                options={options}
                isMulti
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                components={{
                    Option,
                }}
                onChange={(options: any) => {
                    // TODO: Fix type
                    setSkills(options);
                }}
                // allowSelectAll={true}
                value={skills}
            />
        </div>
    );
}

export default CheckboxDropdown