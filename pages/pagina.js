import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'

export default function Pagina() {
  return (
    <Layout>
      <main className={styles.textos}>
          <h2>PÁGINA WEB | WORDPRESS</h2>
          <h5>Diagnóstico desarrollo web <b>NRGI Broker</b></h5>
          <hr className={styles.hr} />
          <p>El diagnóstico se baso en una serie de puntos concretos que enlistamos a continuación. Esto incluye una serie de parámetros de configuración.</p>
          <ul>
              <li><b>Usabilidad</b> - lo fácil con que los usuarios y Google se mueven dentro del sitio</li>
              <li><b>Estructura</b> - la organización jerárquica del contenido</li>
              <li><b>Funcionalidad</b> - si cumple su función, el objetivo</li>
              <li><b>Apariencia</b> - si cumple su función, el objetivo</li>
          </ul>
          <p>Si  se  cometen  errores  (tanto por  acción  como  por  omisión)  en  estas  bases fundamentales del desarrollo, difícilmente se obtendrá esa visibilidad necesaria y, por tanto, el éxito de la web  estará  condenado.  Sería  como  construir sin  cimientos o  sobre  cimientos  con  graves  deficiencias  que propiciarán su derrumbe.</p>
      </main>
    </Layout>
  )
}
