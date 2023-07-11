import React, { Component } from "react";

export class CVEduExp extends Component {
    render() {
        const { schools } = this.props;

        if (schools.length !== 0) {
            return(
                <div className="cv-edu">
                    <h3>Educational Experience</h3>
                    {schools.map((school) => {
                        return (
                            <div key={school.id} className="school">
                                <p>{school.schoolName}</p>
                                <p>{school.titleStudy}</p>
                                <p>{school.endDateStudy}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    }
}