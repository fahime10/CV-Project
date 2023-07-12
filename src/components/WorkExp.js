import React, { Component } from "react";

export class WorkExp extends Component {
    render() {
        const { handleChangeWork, onClickAddWork, onClickRemoveWork } = this.props;
        return (
            <>
            <div className="work-exp">
                <fieldset>
                    <legend>Work Experience</legend>
                    <label htmlFor="company">Company name:</label>
                    <input
                        type="text"
                        id="company"
                        onChange={handleChangeWork}
                    />
                    <br />
                    <label htmlFor="position">Position title: </label>
                    <input
                        type="text"
                        id="position"
                        onChange={handleChangeWork}
                    />
                    <br />
                    <label htmlFor="main-tasks">Main tasks: </label>
                    <textarea 
                        id="main-tasks" 
                        rows={4}
                        onChange={handleChangeWork} 
                    />
                    <br />
                    <label htmlFor="start-date">Start Date: </label>
                    <input 
                        type="date"
                        id="start-date"
                        onChange={handleChangeWork}
                    />
                    <br />
                    <label htmlFor="end-date">End Date (leave blank if still working at this company): </label>
                    <input
                        type="date"
                        id="end-date"
                        onChange={handleChangeWork}
                    />
                    <br />
                    <button type="button" className="add-work" onClick={onClickAddWork}>Add</button>
                    <button type="button" className="remove-work" onClick={onClickRemoveWork}>Remove</button>
                </fieldset>
            </div>
            </>
        );
    }
}