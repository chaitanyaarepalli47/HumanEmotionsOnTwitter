// import React, {useState} from 'react'
// import './SearchBar.css';

// function SearchBar({placeholder,data}){
//     const[searchTerm, setSearchTerm] = useState([]);

//     const handleFilter = (event) =>{
//         const searchWord = event.target.value;
//         console.log(searchWord);
//         console.log(event.target);
//     }
//     return (
//         <div className = "search">
//             <form onSubmit={handleFilter}>
//             <div className = "searchInputs">
//                 <input type ="text" placeholder = {placeholder} onChange = {event => {setSearchTerm(event.target.value)}}/>
//             </div>
//             </form>
//         </div>
//     )
// }

// export default SearchBar

import React, {useState} from 'react'
import './SearchBar.css';

function SearchBar({placeholder,data}){
    const[searchTerm, setSearchTerm] = useState([]);

    const handleFilter = (event) =>{
        const searchWord = event.target.value;
        console.log(searchWord);
        console.log(event.target);
    }
    return (
        <div className = "search">
            <div className = "searchInputs">
                <input type ="text" placeholder = {placeholder} onSubmit = {handleFilter}/>
            </div>
        </div>
    )
}

export default SearchBar
