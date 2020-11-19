import Layout from '../components/Layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Home({ profiles, page, pageCount }) {
  return (
    <Layout>
      <main className={styles.main}>
        <Link href="/pagina"><h1 className="font-weight-bold">NRGI Broker</h1></Link>
        <p>ENERGY INSURANCE BROKER</p>
        <h2>PROPUESTA DE DESARROLLO</h2>
        <h4>AZUL.MX</h4>
        <ul>
          {profiles.map((p) => (
            <li className="profile" key={p.id}>
              <Link href={`/profile?id=${p.id}`}>
                <a>
                  <img src={p.avatar} />
                  <span>{p.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <nav>
        {page > 1 && (
          <Link href={`/?page=${page - 1}&limit=9`}>
            <a>Previous</a>
          </Link>
        )}
        {page < pageCount && (
          <Link href={`/?page=${page + 1}&limit=9`}>
            <a className="next">Next</a>
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export async function getServerSideProps({ req, query }) {
  const protocol = req.headers['x-forwarded-proto']
  const host = req.headers['x-forwarded-host']
  const page = query.page || 1
  const limit = query.limit || 9

  const res = await fetch(
    `${protocol}://${host}/api/profiles?page=${page}&limit=${limit}`
  )
  const data = await res.json()

  return { props: data }
}


export default Home;
