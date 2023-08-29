import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Container from "../layouts/Container.jsx";
import Tasks from "../tasks/Tasks.jsx";
import Header from "../layouts/Header.jsx";
import Input from "../formFields/Input.jsx";
function Home () {
  const [task, setTask] = useState([]);
  const [tarefa, setTarefa] = useState("");
  
  useEffect(() => {
    fetch("http://localhost:5000/tasks/",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
   .then(res=>res.json())
   .then((res)=>{
      setTask(res);
   })
   .catch(err=>console.log(`erro: ${err}`))
  },[]);
  
  function uniqId () {
    let newId = Math.random().toString(10).substr(2);
    return newId;
  }
  
  function enviar (e) {
    if (tarefa == "") {
      e.preventDefault();
      alert("Você não pode fazer uma tarefa vazia")
    } else {
      fetch("http://localhost:5000/tasks/",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          id: uniqId(),
          name: tarefa,
          finish:"não"
        })
      })
      .then(res=>res.json())
      .then(res=>console.log(res))
      .catch(res=>console.log(res))
    }
  }
  
  return (
    <>
      <Header page="home"/>
      <Container specialClass="column">
        <div className={styles.divForm}>
          <form>
            <Input type="text" name="tarefa" id="tarefa" setTarefa={setTarefa}/>
            <button className={styles.btn} onClick={enviar}>Enviar</button>
          </form>
        </div>
        <section className={`${styles.section}`}>
          {task.map((val,ind)=>(
            <Tasks key={ind} id={val.id} name={val.name} finish={val.finish}/>
          ))}
        </section>
        
      </Container>
    </>
  )
}
export default Home;