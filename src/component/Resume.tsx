import { useEffect, useState } from "react";
import { Education, Experiency, ResumeInfo, Skill } from "./schems/schems";
import parse from "html-react-parser";

function EducationComponent(education: Education) {
  return (
    <div className="timeline-item">
      <h4 className="item-title">{education.title}</h4>
      <span className="item-period">{education.period}</span>
      <span className="item-small">{education.institution}</span>
    </div>
  )
}

function ExperienceComponent(experiency: Experiency) {
  const tecnologies = experiency.tecnologies.join(" . ")
  const description = experiency.description.replaceAll("\n","<br>")
  return (
    <div className="timeline-item">
      <h4 className="item-title">{experiency.title}</h4>
      <span className="item-period">{experiency.period}</span>
      <span className="item-small">{experiency.company}</span>
      <p className="item-description">
        <span style={{ color: "#555" }}>
          {parse(description)}
        </span>
        <br/>
        <span style={{
          color: "#9e9e9e",
          lineHeight: "1.2em",
          fontSize: "14px",
          display: "inline-block"
        }}>
          Competências: {tecnologies}
        </span>
      </p>
    </div>
  )
}

function SkillComponent(skill: Skill, filter: string) {
  console.log(skill, filter);
    
  if (filter != "all" && skill.group != filter) {
    return
  }
  return (
    <div className="col-md-6 col-sm-6">
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>{skill.name}</h4>
          <div className="skill-container">
            <div className={`skill-percentage skill-${skill.level}`}></div>
            <span className="badge">{skill.level}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Resume({active}:{active: boolean}) {

  const [filter, setFilter] = useState("all")

  const resumeInfo: ResumeInfo = require("./data/resume.json");
  const education = resumeInfo.education.map(EducationComponent)
  const experiencies = resumeInfo.experiencies.map(ExperienceComponent)

  let skills = resumeInfo.skills.map(e => SkillComponent(e, filter))

  return (
      <section className={`pt-page animate__animated ${active ? 'pt-page-current animate__slideInRight':''}`} data-id="resume">
        <div className="section-inner custom-page-content">
          <div className="page-header color-1">
            <h2>Currículo</h2>
          </div>
          <div className="page-content">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="block">
                  <div className="block-title">
                    <h3>Formações</h3>
                  </div>

                  <div className="timeline">
                    {education}
                  </div>
                </div>
              </div>

              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="block">
                  <div className="block-title">
                    <h3>Experiências</h3>
                  </div>

                  <div className="timeline">
                    {experiencies}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="block">
                  <div className="block-title">
                    <h3 className="col-md-12">
                      <div className="row">
                        <span className="col-md-9">
                          Skills
                        </span>
                        <div className="col-md-3">
                          <select className="form-control" onChange={e => setFilter(e.target.value)}>
                            <option value="all">Tudo</option>
                            <option value="lang">Linguagens</option>
                            <option value="framework">Frameworks</option>
                            <option value="devops_automation">DevOps, Build e Automação</option>
                            <option value="database_storage">Bancos de Dados e Armazenamento</option>
                            <option value="observability_message">Mensageria, Monitoramento e Observabilidade</option>
                            <option value="test_tool">Ferramentas de Testes</option>
                            <option value="application_server">Servidores de aplicação</option>
                          </select>
                        </div>
                      </div>
                    </h3>
                  </div>

                  <div className="skills-info">
                    <div className="row">
                      {skills}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}