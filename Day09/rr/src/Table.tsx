import { useState } from "react";
const Table = (_props: any) => {
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/")
        const responseValue = await response.json();
        setLoading(false);
        setData(responseValue);
    }
    const deleteRow =(indexToRemove: number) => {
        const filteredData = [];
        data.map((item,idx) => {
            if(idx != indexToRemove){
                filteredData.push(item);
            }
        });
    }

    return(
       <> 
       <h1>Table page</h1>
       </>
    )
}
export default Table;