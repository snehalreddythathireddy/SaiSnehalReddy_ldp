interface Hobbiesprops{
    hobbies: string[];
}

const Hobbies =({hobbies}:Hobbiesprops)=>{ 
    return(
        <div>
            <ul>
                {hobbies.map((hobby,index)=>(
                    <li key ={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default Hobbies;