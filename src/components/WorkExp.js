import React, { Component } from "react";

export class WorkExp extends Component {
    render() {
        return (
            <>
            <fieldset>
                <legend>Work Experience</legend>
                <form>
                    <label htmlFor="company-name">Company name: </label>
                    <input
                        type="text"
                        id="company-name"
                        maxLength={100}
                    />
                    <br />
                    <label htmlFor="position-title">Position title: </label>
                    <input
                        type="text"
                        id="position-title"
                        maxLength={50}
                    />
                    <br />
                    <label htmlFor="main-tasks">Main tasks at your company: </label>
                    <textarea
                        id="main-tasks"
                    />
                    <label htmlFor="start-date">Date you started: </label>
                    <input
                        type="date"
                        id="start-date"
                    />
                    <br />
                    <label htmlFor="end-date">Date you finished (leave empty if still employed at your company): </label>
                    <input
                        type="date"
                        id="end-date"
                    />
                </form>
            </fieldset>
            </>
        )
    }
}