import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Edit.module.css";
import Container from "../layouts/Container.jsx";
import Header from "../layouts/Header.jsx";
import Input from "../formFields/Input.jsx";
function Edit () {
  const { id } = useParams();
  const [task, setTask] = useState([]);
  const [tarefa, setTarefa] = useState("");
  
  function enviar (e) {
    e.preventDefault();
    alert(tarefa);
  }
  
  useEffect(()=>{
    fetch(`http://localhost:5000/tasks/${id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(res=>setTask(res))
    .catch(err=>console.log(err))
  },[id]);
  
  function enviar (e) {
    if (tarefa!="") {
      fetch(`http://localhost:5000/tasks/${id}`,{
        method:"PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:tarefa
        })
      })
    } else {
      e.preventDefault();
      alert("Você não pode enviar um dado em branco!");
    }
  }
  
  return (
    <>
      <Header page="edit" />
      <Container>
        <div className={styles.divForm}>
          <form>
            <Input type="text" name="atual" id={`task${id}`} value={task.name}/>
            <Input type="text" name="novo" id={`task${id}`} setTarefa={setTarefa} />
            
            <button className={styles.btn} onClick={enviar}>Editar</button> 
          </form>
        </div>
      </Container>
    </>
  )
}
export default Edit;