interface UserCardProps{
    name: string;
    id: number;
    age: number;
    isStudent:boolean;
}

const UserCard =({name,id,age,isStudent}:UserCardProps)=>{
    return(
        <div>
            <p>User name:{name}</p>
            <p>User id:{id}</p>
            <p>User age : {age}</p>
            <p>Status:{isStudent ? "Student" : "Professional"}</p>

        </div>
    );

};
export default UserCard;