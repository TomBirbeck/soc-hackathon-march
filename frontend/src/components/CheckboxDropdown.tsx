import { useState } from "react";
import Option from "./Option";
import { default as ReactSelect } from "react-select";
export default function CheckboxDropdown() {
    const [selectedOptions, setSelectedOptions] = useState(null);
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
        //        {value:"",label:"",},
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
                    setSelectedOptions(options);
                }}
                // allowSelectAll={true}
                value={selectedOptions}
            />
        </div>
    );
}
