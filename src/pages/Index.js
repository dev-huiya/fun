import React, { useCallback, useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Index = ({...props}) => {
    return (
        <React.Fragment>
            <Link to={"/PhoneNumber"}>핸드폰 번호 선택기</Link>
        </React.Fragment>
    )
}

export default Index;