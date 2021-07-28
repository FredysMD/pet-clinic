import React from "react";
import { Link }  from'react-router-dom';

export const Header = () => {
    
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
           <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <Link class="navbar-brand" to ="/">Pet clinic</Link>
                <button 
                    class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className = "nav-link active" to='/'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className = "nav-link active" to='/list'>List</Link>
                        </li>
                        <li class="nav-item">
                            <Link className = "nav-link active" to='/add'>Add</Link>
                        </li>
                        
                    </ul>   
                </div>
            </div>
        </nav>
        
    );
}
