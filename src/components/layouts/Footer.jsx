import styles from "./Footer.module.css";
import Container from "./Container.jsx";
function Footer () {
  
  return (
    <Container>
      <footer className={styles.footer}>
        <div className={styles.footerSocial}>
          <h3>Siga-nos nas redes sociais</h3>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/in/leandro-gabriel-oliveira-b8a261189" className={styles.linkedin}>in</a>
            <a href="https://instagram.com/leandrogdo97?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" className={styles.insta}>i</a>
          </div>
        </div>
        <div className={styles.footerTools}>
          <h3>competência nas ferramentas:</h3>
          <div className={styles.tools}>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>React</p>
            <p>Excel</p>
            <p>Google Sheets</p>
            
          </div>
          <p className={styles.copy}>&copy;LeandroOliveira</p>
        </div>
      </footer>
    </Container>
  )
}
export default Footer;