import { useParams } from "react-router-dom";

const Posts = () =>{
    const {id} = useParams();
    return (
      <div>
        <p>This is practical {id}</p>
        Title: Hello World
      </div>
    );
}
export default Posts;