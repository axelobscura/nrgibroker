import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

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
                <hr className={styles.hr} />
                <Container fluid={true}>
                    <Row fluid={true}>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">USABILIDAD</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">ESTRUCTURA</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">FUNCIONALIDAD</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">APARIENCIA</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <h3>USABILIDAD</h3>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <h3>ESTRUCTURA</h3>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </main>
        </Layout>
    )
}
