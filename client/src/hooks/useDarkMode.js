import {useLocalStorage} from "./useLocalStorage";
import { useEffect } from "react";

 function useDarkMode(key, initialValues) {
    const [toggleOnorOff, setOnorOff] = useLocalStorage(key, false);
    
    useEffect (()=>{
        
    toggleOnorOff ?
        document.body.classList.add("dark-mode"):
        document.body.classList.remove("dark-mode");
    }, [setOnorOff]);  
    return [toggleOnorOff, setOnorOff];
     
}
export default useDarkMode;