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
                <h2><span className="lnr lnr-arrow-right-circle"></span> PÁGINA WEB | WORDPRESS</h2>
                <h5><span className="lnr lnr-chevron-right"></span> Diagnóstico desarrollo web <b>NRGI Broker</b></h5>
                <p>El diagnóstico se baso en una serie de puntos concretos que enlistamos a continuación. Esto incluye una serie de parámetros de configuración y actualización del CMS (Wordpress), base de datos y plugins de terceros.</p>
                <ul>
                    <li><b>Usabilidad</b> - lo fácil con que los usuarios y Google se mueven dentro del sitio (SEO)</li>
                    <li><b>Estructura</b> - la organización jerárquica del contenido</li>
                    <li><b>Funcionalidad</b> - si cumple su función, el objetivo</li>
                    <li><b>Apariencia</b> - si cumple su función</li>
                    <li><b>Arquitectura</b> - estructura de desarrollo</li>
                </ul>
                <p>Si  se  cometen  errores  (tanto por  acción  como  por  omisión)  en  estas  bases fundamentales del desarrollo, difícilmente se obtendrá esa visibilidad necesaria y, por tanto, el éxito de la web  estará  condenado.  Sería  como  construir sin  cimientos o  sobre  cimientos  con  graves  deficiencias  que propiciarán su derrumbe.</p>
                <hr/>
                <Container>
                    <Row>
                        <Col>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="myClass">
                                <Row className="lostabs p-0">
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-column">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" className="tabbex">USABILIDAD <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" className="tabbex">ESTRUCTURA <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third" className="tabbex">FUNCIONALIDAD <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth" className="tabbex">APARIENCIA <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fifth" className="tabbex">ARQUITECTURA <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="sixth" className="tabbex">SOLUCIÓN <span className="lnr lnr-arrow-right-circle"></span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <h3><span className="lnr lnr-chevron-right"></span> USABILIDAD</h3>
                                                <hr/>
                                                <ul>
                                                    <li>Estructura de contenidos sin jerarquía establecida de contenidos
                                                        <ul>
                                                            <li>Los visitantes esperan los mismos colores, diseño logo, fuentes, etiquetas de navegación, etcétera en el mismo lugar de cada sección.</li>
                                                        </ul>
                                                    </li>
                                                    <li>Falta de consistencia</li>
                                                    <li>Falta de cuadro de búsqueda</li>
                                                    <li>Navegación experimental</li>
                                                    <li>Contenido desactualizado</li>
                                                    <li>Enlaces rotos</li>
                                                    <li>Organización inusual del contenido</li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <h3><span className="lnr lnr-chevron-right"></span> ESTRUCTURA</h3>
                                                <hr/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <h3><span className="lnr lnr-chevron-right"></span> FUNCIONALIDAD</h3>
                                                <hr/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fourth">
                                                <h3><span className="lnr lnr-chevron-right"></span> APARIENCIA</h3>
                                                <hr/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="fifth">
                                                <h3><span className="lnr lnr-chevron-right"></span> ARQUITECTURA</h3>
                                                <hr/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="sixth">
                                                <h3><span className="lnr lnr-chevron-right"></span> SOLUCIÓN</h3>
                                                <hr/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </main>
            <style jsx>{`
                .myClass ul > li > a {
                    background-color: gray;
                    color: white;
                }
                a.tabbex.nav-link {
                    background-color: #333 !important;
                }
            `}</style>
        </Layout>
    )
}
