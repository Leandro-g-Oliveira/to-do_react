import { Link } from "react-router-dom";
import Container from "./Container.jsx";
import styles from "./Header.module.css";
function Header (props) {
  return (
    <Container>
    <header className={styles.header}>
      {props.page=="home" && (
      <>
        <h1>Início</h1>
      </>
      )}
      {props.page=="edit" &&(
      <>
        <Link to="/">Início</Link>
        <h1>Editar tarefa</h1>
      </>
      )}
    </header>
    </Container>
  )
}
export default Header;