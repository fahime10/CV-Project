import React, { Component } from "react";

export class EduExp extends Component {
    render() {
        const { handleChangeEdu, onClickAddEd, onClickRemoveEd } = this.props;
        
        return (
            <>
            <div className="edu">
                <fieldset>
                <legend>Educational Experience</legend>
                <label htmlFor="school-name">School name: </label>
                <input
                    type="text"
                    id="school-name"
                    onChange={handleChangeEdu}
                />
                <br />
                <label htmlFor="title-study">Title of study: </label>
                <input
                    type="text"
                    id="title-study"
                    onChange={handleChangeEdu}
                />
                <br />
                <label htmlFor="date-study">End Date of study: (leave blank if not finished)</label>
                <input
                    type="date"
                    id="date-study"
                    onChange={handleChangeEdu}
                />
                <br />
                <button type="button" className="add-edu" onClick={onClickAddEd}>Add</button>
                <button type="button" className="remove-edu" onClick={onClickRemoveEd}>Remove</button>
            </fieldset>
            </div>
            </>
        );
    }
}