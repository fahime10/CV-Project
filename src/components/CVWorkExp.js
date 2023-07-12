import React, { Component } from "react";

export class CVWorkExp extends Component {
    render() {
        const { jobs } = this.props;

        if (jobs.length !== 0) {
            return(
                <div className="cv-edu">
                    <h3>Work Experience</h3>
                    {jobs.map((work) => {
                        return (
                            <div key={work.id} className="work">
                                <p>{work.company}</p>
                                <p>{work.positionTitle}</p>
                                <p>{work.mainTasks}</p>
                                <p>{work.startDate}</p>
                                <p>{work.endDate}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}