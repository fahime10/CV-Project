import React, { Component } from "react";

export class CVWorkExp extends Component {
    render() {
        const { jobs } = this.props;

        if (jobs.length !== 0) {
            return(
                <div className="cv-edu">
                    <h3>Work Experience</h3>
                    {jobs.map((work) => {
                        let endDate;
                        if (work.endDate === "") {
                            endDate = "Present";
                        } else {
                            endDate = work.endDate;
                        }
                        return (
                            <div key={work.id} className="work">
                                <p>{work.company}</p>
                                <p>{work.positionTitle}</p>
                                <p>{work.mainTasks}</p>
                                <p>Start Date: {work.startDate}</p>
                                <p>Till {endDate}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}