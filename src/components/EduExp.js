import React, { Component } from "react";

export class EduExp extends Component {
    render() {
        return (
            <>
            <fieldset>
                <legend>Educational Experience</legend>
                <form>
                <label htmlFor="school-name">School name: </label>
                <input
                    type="text"
                    id="school-name"
                />
                <br />
                <label htmlFor="title-study">Title of study: </label>
                <input
                    type="text"
                    id="title-study"
                />
                <br />
                <label htmlFor="date-study">End Date of study: </label>
                <input
                    type="date"
                    id="date-study"
                />
                </form>
            </fieldset>
            </>
        );
    }
}