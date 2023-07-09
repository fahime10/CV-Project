import React, { Component } from "react";

let counter = 0;

export class EduExp extends Component {
    render() {
        return (
            <>
            <div className="edu">
                <h3>Educational Experience</h3>
                <button type="button" className="add-edu" onClick={addStudy}>Add</button>
                <button type="button" className="remove-edu" onClick={removeStudy}>Remove</button>
            </div>
            </>
        );
    }
}

function addStudy(e) {
    e.preventDefault();
    counter++;

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("edu-exp");
    fieldset.id = "edu-" + counter;
    const legend = document.createElement("legend");
    legend.textContent = "Educational Experience";
    fieldset.append(legend);

    const breakLine = document.createElement("br");
    
    const labelForSchoolName = document.createElement("label");
    labelForSchoolName.setAttribute("id", "school-name");
    labelForSchoolName.textContent = "School name: ";

    const inputForSchoolName = document.createElement("input");
    inputForSchoolName.setAttribute("type", "text");
    inputForSchoolName.setAttribute("id", "school-name");
    inputForSchoolName.append(breakLine);

    const labelForTitleStudy = document.createElement("label");
    labelForTitleStudy.setAttribute("id", "title-study");
    labelForTitleStudy.textContent = "Title of study: ";

    const inputForTitleStudy = document.createElement("input");
    inputForTitleStudy.setAttribute("type", "text");
    inputForTitleStudy.setAttribute("id", "title-study");
    inputForTitleStudy.append(breakLine);

    const labelForEndDate = document.createElement("label");
    labelForEndDate.setAttribute("id", "end-date");
    labelForEndDate.textContent = "End date of study: ";

    const inputForEndDate = document.createElement("input");
    inputForEndDate.setAttribute("type", "date");
    inputForEndDate.setAttribute("id", "end-date");
    inputForEndDate.append(breakLine);

    fieldset.append(labelForSchoolName, inputForSchoolName,
                    labelForTitleStudy, inputForTitleStudy,
                    labelForEndDate, inputForEndDate);

    document.querySelector(".edu").append(fieldset);
}

function removeStudy(e) {
    if (counter > 0) {
        e.preventDefault();

        document.getElementById(`edu-${counter}`).remove();
        counter--;
    }
}