import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home({ profiles, page, pageCount }) {
  return (
    <Layout>
      <main className={styles.main}>
          <Link href="/pagina"><h1 className="font-weight-bold">NRGI Broker</h1></Link>
          <p>ENERGY INSURANCE BROKER</p>
          <h2>PROPUESTA DE DESARROLLO</h2>
          <h4>AZUL.MX</h4>
      </main>
    </Layout>
  )
}
