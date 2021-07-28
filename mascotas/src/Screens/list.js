import React from'react';
import {OwnerList} from '../Components/OwnerList';

export const list = () => {
    return (
        <div className="col">
             <h1 className = "text-center">Owners</h1>
            <OwnerList />
        </div>
    )
}
