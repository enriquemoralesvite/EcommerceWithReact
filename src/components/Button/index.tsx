import {ReactNode} from "react"; 
interface ButtonProps {
    children: ReactNode;
    handleClick: ()=> void;
}

function Button ({children, handleClick}: ButtonProps) {
    
    return (
        <button onClick={handleClick}>{children}</button>
    );
}

export default Button;