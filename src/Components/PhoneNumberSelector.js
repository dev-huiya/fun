import React, { useCallback, useEffect, useState } from "react";
import PropTypes from 'prop-types';

String.prototype.insertAt = function(index,str){
    return this.slice(0,index) + str + this.slice(index)
}

const PhoneNumberSelector = ({ value, onChange, ...props}) => {

    useEffect(()=>{
        onChange("010-"+value.padStart(8, "0").insertAt(4, "-"))
    }, [])

    const _onChange = useCallback((event)=>{
        onChange("010-"+event.currentTarget.value.padStart(8, "0").insertAt(4, "-"))
    }, []);

    return (
        <React.Fragment>
            <input
                type={"range"}
                min={"00000000"}
                max={"99999999"}
                defaultValue={value}
                onChange={_onChange}
            />
        </React.Fragment>
    )
}

PhoneNumberSelector.propTypes = {
    value: PropTypes.string,
}

PhoneNumberSelector.defaultProps = {
    value: "55555555"
}

export default PhoneNumberSelector;