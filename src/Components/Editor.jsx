import { useParams } from "react-router-dom";

const Editor=()=> {
    const params = useParams();

    console.log(params);
  return (
    <>
    <h2>hello {params.id}</h2>
    </>
  )

}
export default Editor