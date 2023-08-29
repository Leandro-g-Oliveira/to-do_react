import styles from "./Input.module.css";

function Input ({ type, name, id, setTarefa, value }) {
  
  return (
    <div className={styles.inputField}>
      <input type={type} name={name} id={id} value={value} onChange={(e)=>setTarefa(e.target.value)}/>
      <label for={id}>{name}</label>
    </div>
  )
}
export default Input;