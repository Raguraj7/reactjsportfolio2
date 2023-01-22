const UserCard = ({name1:{name,color}}) => {
    console.log(name,color);
    return (
       <div className={`${color==='blue'?'bg-blue-400':color==='green'?'bg-green-400':color==='gray'?'bg-gray-400':color==='purple'?'bg-purple-400':'bg-red-400'} p-5 text-white rounded-md shadow-md hover:scale-105`}>
        {name}
        
       </div>
    );
}

export default UserCard;