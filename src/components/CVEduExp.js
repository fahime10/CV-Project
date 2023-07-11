import React, { Component } from "react";

export class CVEduExp extends Component {
    render() {
        const { schools } = this.props;
        return(
            <div className="cv-edu">
                {/* {schools.map((school) => {
                    return (
                        <div className="school">
                            <p>{school.schoolName}</p>
                            <p>{school.titleStudy}</p>
                            <p>{school.endDateStudy}</p>
                        </div>
                    );
                })} */}
            </div>
        );
    }
}