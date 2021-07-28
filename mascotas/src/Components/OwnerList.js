import React, { useState } from 'react';
import {OwnerItem} from './OwnerItem';
import {OwnerForm} from './OwnerForm';


const initialState = {

    owners:[
        {id:'2', name:'anto', address:'New York', phone:'3011234522'},
        {id:'66', name:'sofi', address:'Dakota', phone:'3011238522'}
    ]

}

export const OwnerList = () => {
    
    const [ownersL, setOwners] = useState(initialState);

    const handlesubmit = (e) =>{
        e.preventDefault();
        const owner = {
            id:e.target.id.value,
            name:e.target.name.value,
            address:e.target.address.value,
            phone:e.target.phone.value
        }
        const stateOwner = [...ownersL.owners,owner];
        setOwners({owners:stateOwner});
    }

    return (
        <div className="conteiner">
       
            <div className="row border" >
                <div className="col-9">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">NAME</th>
                            <th scope="col">ADDRESS</th>
                            <th scope="col">PHONE</th>
                            <th scope="col">OPTIONS</th>
                        </tr>
                        </thead>
                        <tbody>
                            { 
                                ownersL.owners.map((owner) => (
                                <tr>
                                    <th scope="row"><OwnerItem id = {owner.id}/></th>
                                    <th><OwnerItem name = {owner.name}/></th>
                                    <th><OwnerItem address = {owner.address}/></th>
                                    <th><OwnerItem phone = {owner.phone}/></th>
                                    <th><button className = "btn btn-warning">View/Edit</button></th>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-3"  >
                    <OwnerForm onSubmit = { handlesubmit }/>
                </div>
            </div>
        </div>
    );
}
