import React from "react";

const EditExpensePage = (props) => {
    return (
        <div>
            Edit Page with id of {props.match.params.id}
        </div>
    );
};

export default EditExpensePage;