import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                        <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Projects</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.projects && resumeData.projects.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><a href={item.url} target="_blank">{item.ProjectName}</a></h3>
                          <p className="info">
                          {item.TechnologyUsed}
                          <span>&bull;</span> <em className="date">{item.startingDate} <h6> Team Size -{item.teamSize}</h6></em></p>
                          <p>
                          {item.description}
                          {item.description1}
                          {item.description2}
                          {item.description3}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Courses</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.courses && resumeData.courses.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><a >{item.CourseName}</a></h3>
                          <p className="info"> <h6> Offered By : 
                           {item.Offeredby} </h6>
                          <span>&bull;</span> <em className="date">{item.startingDate}</em></p>
                          <p>
                          {item.description}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Certificates</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.certificates && resumeData.certificates.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3><a href={item.url} target="_blank" >{item.CertificateName}</a></h3>
                          <p className="info"> <h6> Source : 
                           {item.Source}</h6>
                          <span>&bull;</span> <em className="date"><h6> Instructor :{item.Instructor}</h6></em></p>
                          <p>
                          <h6>Issue Date :{item.IssueDate} </h6>
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>

         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}