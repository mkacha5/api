import {React , useState , useEffect} from "react";
import axios from "axios" ;

const App = ()  =>{
  const [posts , setPosts]= useState([])
  useEffect(() =>
    {axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((reponse) => 

      {
       setPosts(reponse.data);
      })
      .catch((erreur) => 
     { console.log(erreur);
});

});
  return (
    <div>
      <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}

        </li>

      ))}
      </ul>
       
         
     
    
    </div>
  );
};

export default App;
