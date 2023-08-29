import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Tasks.module.css";
//import Container from "../layouts/Container";
function Tasks ({ key, id, name, finish }) {
  function remove (e) {
    fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE"
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
    window.location.reload()
  }
  
  function finalizado (e) {
    //e.preventDefault();
    if (finish == "sim") {
      fetch(`http://localhost:5000/tasks/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          finish:"não"
        })
      })
    } else {
      fetch(`http://localhost:5000/tasks/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          finish:"sim"
        })
      })
    }
    window.location.reload()
  }
  return (
    <>
      <article className={`${styles.article} ${finish=="sim"?styles.final:""}`} >
        <p key={key}>{name}</p>
        <div className={styles.divLinks}>
          <button onClick={finalizado}>Ok</button>
          <Link to={`/edit/${id}`}>Edit</Link>
          <Link to="/" onClick={remove}>Delete</Link>
        </div>
      </article>
    </>
  )
}
export default Tasks;