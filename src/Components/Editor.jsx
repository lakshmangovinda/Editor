import { useSearchParams } from "react-router-dom";
import Editor from 'react-medium-editor';
import { useEffect, useState } from "react";



const Edit = () => {

  const [searchParams] = useSearchParams();
  const [notes, SetNotes] = useState('')
  const params = Object.fromEntries([...searchParams])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let db = localStorage.getItem(params.id)
    let parsedJson = JSON.parse(db)
    if (parsedJson) {
      if (params.id === parsedJson.id) {
        SetNotes(parsedJson.EditorNotes)
      }
    }
    else {
      SetNotes('')
    }
    console.log('sdsd')

  }, [params.id])
  const handleChange = (event) => {
    SetNotes(event)
  }
  const handleNotes = () => {
    if (notes.length > 0) {
      let db = {
        label: params.label,
        id: params.id,
        EditorNotes: notes
      };
      console.log(db)
      localStorage.setItem(params.id, JSON.stringify(db))
    }

  }

  const handleClear = () => {
    SetNotes('')
  }

  return (
    <div>

      <div className="d-flex justify-content-center align-items-start flex-column " >
        <h2 className="display ">Make your notes.</h2>
        <p className="">Make your notes... </p>
        
          <h2 className="display-4">{params.label}</h2>
        
      </div>
      {params?.id ?
        <>
          <button disabled={notes.length < 2} className="btn btn-transparent" onClick={handleNotes}>save</button><button className="btn btn-transparent" onClick={handleClear}>clear</button>
          <Editor style={{ border: "", width: "50vw", height: "20vh", padding: "20px", overflow: "auto", outline: "none", boxShadow: "2px 1px 13px 2px grey" }}
            text={notes}
            placeholder="text"
            onChange={handleChange} />

        </>

        : ""}


    </div>
  )

}
export default Edit