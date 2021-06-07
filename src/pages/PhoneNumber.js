import React, { useCallback, useEffect, useState } from "react";
import PhoneNumberSelector from "Components/PhoneNumberSelector";

const Page = ({ ...props}) => {

    const [value, setValue] = useState("55555555")

    const onChange = useCallback((value) => {
        setValue(value)
    }, [])

    return (
        <>
            <div className={"text-center"}>{value}</div>
            <div>
                <PhoneNumberSelector
                    onChange={onChange}
                    value={value}
                />
            </div>
        </>
    )
}

export default Page;