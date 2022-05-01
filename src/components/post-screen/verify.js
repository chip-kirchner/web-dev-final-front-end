import React from "react";

const Verify = ({role}) => {
    if (role === 'standard') {
        return(null);
    } else if (role === 'planner') {
        return (
            <i className="fas fa-columns text-primary ms-2 me-2"></i>
        );
    } else if (role === 'moderator') {
        return (
            <i className="fas fa-crown text-primary ms-2 me-2"></i>
        )
    } else {
        return (null);
    }
}
export default Verify;