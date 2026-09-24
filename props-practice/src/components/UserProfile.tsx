interface User {
    name : string;
    age: number;
    city: string;
    email :string;
}

interface UserProps {
    user:User;
}

const Userprofile =({user}:UserProps)=>{
    return (
        <div>
            <p>user:{user.name}</p>
            <p>age:{user.age}</p>
            <p>city:{user.city}</p>
            <p>email:{user.email}</p>

        </div>
    );

};
export default Userprofile