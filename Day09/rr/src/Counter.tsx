import {useContext,useState } from "react";
import {TitleContext } from "./Home";


const Counter = (props: { buttonLabel?: "Test Button " | undefined; }) => {
    const {buttonLabel = "Test Button "} = props;
    const title = useContext(TitleContext);
    const[count,setCount] = useState(0);
    const updateCount = () => {
        setCount(count+1);
    }


    return (
        <>
        
        <h1>useRef</h1>
        <button onClick={handleChange}></button></>
    )
}
export default Counter;