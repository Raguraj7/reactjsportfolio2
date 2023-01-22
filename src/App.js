import UserCard from "./UserCard";

const App = () => {
  const arr=['testing','test','log','respose']
  const color=['indigo','gray','red','amber',]
  const obj=[
    {
      name:'testing blue',
      color:'blue'
    },{
      name:'testing green',
      color:'green'
    },{
      name:'testing gray',
      color:'gray'
    },{
      name:'testing purple',
      color:'purple'
    }
  ]
  return (
    <div className="m-3">
      <div className="flex justify-center items-center">
        <span onClick={()=>console.log('testing')} className="bg-indigo-800 text-sm px-3 pb-1 text-white text-center rounded-sm">
          testing
        </span>
      </div>
      <div className="flex justify-center items-center flex-wrap m-3 gap-6 "> 
      {
        obj.map((val,i)=>{
          return(
<UserCard key={i}  name1={val}/>
          )
        })
      }
        
      </div>
    </div>
    
  );
}

export default App;