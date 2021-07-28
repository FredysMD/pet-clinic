import React from 'react';

export const OwnerForm = (props) => {
    
    return(
        <form onSubmit={props.onSubmit}>
            <h1>Add owner</h1>
            <div className = "mb-3">
                <label htmlFor="id">Id pet</label>
                <input type="id" className="form-control" id="id" placeholder = "id pet"/>
            </div>
            <div className = "mb-3">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" placeholder = "Name"/>
            </div>
            <div className = "mb-3">
                <label htmlFor="address">Address</label>
                <input type="text" className="form-control" id="address" placeholder = "Address"/>
            </div>
            <div className = "mb-3">
                <label htmlFor="phone">Phone</label>
                <input type="text" className="form-control" id="phone" placeholder = "Phone"/>
            </div>
            <div className = "mb-3">
                <button type="submit" className="btn btn-outline-success btn-lg" id="botton">+add</button>
            </div>
            
        </form>
    );
}
