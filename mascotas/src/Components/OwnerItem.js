import React from 'react'

export const OwnerItem = (props) => {
    return(
        <div className="e-item">
            <div className="row">
                <div className="col-md-7 col-sm-7">
                    <p>{props.id} {props.name} {props.address} {props.phone}</p>
                </div>
            </div>
        </div>
    );
}
