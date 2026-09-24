interface CardProps{
    children :React.ReactNode;
}

const Card =({children}:CardProps)=>{
    return(
        <div>
            <p>{children}</p>

        </div>
    );
};

export default Card;