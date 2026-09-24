interface ButtonProps{
    label:string;
    onClick: ()=>void;
}

const Button =({label,onClick}:ButtonProps)=>{
    return(
        <div>
            <button onClick={onClick}>{label}</button>

        </div>

    );

};
export default Button;