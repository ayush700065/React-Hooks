// import React,{useState} from 'react';
// function App(){
//   const[count,setCount]= useState(0);
//   const increase = () =>{
//     setCount(count +1);
//     console.log('Count is :${count +1}');
//      };
//   return(
//     <div>
//       <p>Count is :{count}</p>
//       <button onClick={increase}>Click</button>
//     </div>
//   );
//   }

// export default App;
import React, {useState,useEffect } from 'react';

function App() {
  const[data, setData] = useState(null);
  const[userId,setUserId]= useState(1);
  useEffect(() => {
    const fetchData = async () => {
  
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const result = await resp.json();
        // console.log('User ID:', result.id,result.name,result.email);
        setData(result);
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <p>Data is being fetched:</p>
      <label>UserId</label>
      <input 
      type='number'
      value={userId}
      onChange={(e)=>
      setUserId(Number(e.target.value))}/>
      {data && (
      <div>
        <h3>User Details:</h3>
        <pre>{JSON.stringify(data,null,2)}</pre>
      </div>
      )}
    </div>
  );
}

export default App;
