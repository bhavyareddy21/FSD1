import { useEffect, useState } from "react";
import axios from "axios";
//import DataFetching from "./DataFetching";
function DataFetching3(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        const fetchMyData = async()=>{
           const res = await axios.get('https://fakestoreapi.com/users');
           
           console.log(res);
         //console.log(await res.json());
           const resData = await res.data;
           setData(resData);
           console.log(resData);
        }
        fetchMyData();
    })
    return(
        <div >
        
            <table className="table table-bordered">
                <thead>
                <th>Id</th>
                <th>Email</th>
                <th>username</th>
                <th>password</th>
                <th>First name</th>
                <th>Last name</th>

            </thead>
    <tbody> 
        {data.map((dataItem, index) =>
             <tr key = {index}>
                <td>{dataItem.id}</td>
                <td>{dataItem.email}</td>
                <td>{dataItem.username}</td>
                <td>{dataItem.password}</td>
                <td>{dataItem.name.firstname}</td>
                <td>{dataItem.name.lastname}</td>
             </tr>
        
    )}
    </tbody> 
</table>
</div>
    )
}
export default DataFetching3;