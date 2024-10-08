import { Profile } from "./schems/schems";
import parse from "html-react-parser";

function Home({active}:{active: boolean}) {
    const informations: Profile = require("./data/profile.json");

    return (
        <section className={`pt-page animate__animated ${active ? 'pt-page-current animate__slideInLeft':''}`} data-id="home">
            <div className="section-inner start-page-content">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-4">
                        <div className="photo">
                            <img src={informations.photo} alt="" />
                        </div>
                        </div>

                        <div className="col-sm-8 col-md-8 col-lg-8">
                        <div className="title-block">
                            <h1>{informations.firstName} {informations.lastName}</h1>
                            <div>
                            <div className="item">
                                <div className="sp-subtitle">
                                    {informations.profession}
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href={informations.github} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a href={informations.youtube} target="_blank" rel="noreferrer"><i className="fa fa-youtube"></i></a>
                            <a href={informations.linkedin} target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href={informations.facebook} target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            <a href={informations.instagram} target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className="about-me">
                            <div className="block-title">
                            <h3>Sobre <span>mim</span></h3>
                            </div>
                            <p style={{textAlign: "justify"}}>
                            { parse(informations.about) }
                            </p>
                        </div>
                        </div>

                        <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="info-list">
                            <li>
                                <span className="title">Idade</span><span className="value"><span>{ informations.age }</span></span>
                            </li>
                            <li>
                                <span className="title">País</span><span className="value">{ informations.country }</span>
                            </li>
                            <li>
                                <span className="title">Cidade/Estado</span><span className="value">{ informations.city }</span>
                            </li>
                            <li>
                                <span className="title">E-mail</span><span className="value"><a href={`mailto:${informations.email}`}>{ informations.email }</a></span>
                            </li>
                            <li>
                                <span className="title">Dispnibilidade</span><span className="value available">{ informations.availability }</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;