import { UserRepository } from "./schems/schems"

function RepositoryFragment(repo: UserRepository) {
  return (
    <div className="col-md-4">
      <div className="card card-margin">
            <div className="card-header no-border">
                <h5 className="card-title">{repo.name}</h5>
            </div>
            <div className="card-body pt-0">
                <div className="widget-49">
                    <div className="widget-49-meeting-points">
                        <div className="widget-49-meeting-item">
                          <span>{repo.description}</span>
                        </div>
                    </div>
                    <div className="widget-49-meeting-action">
                        <span className="badge">{repo.language}</span>
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="btn btn-sm btn-flash-border-primary">Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export function ProfilePage({active}:{active: boolean}){
  const showRepos: UserRepository[] = require("./data/repository.json")

  return (
    <section className={`pt-page animate__animated ${active ? 'pt-page-current animate__slideInUp':''}`} data-id="resume">
      <div className="section-inner custom-page-content">
        <div className="page-header color-1">
          <h2>Portifólio</h2>
        </div>
        <div className="page-content">
          <div className="row">
            {showRepos.map(RepositoryFragment)}
          </div>
        </div>
      </div>
    </section>
  )
}