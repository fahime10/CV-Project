import React, { Component } from "react";

let counter = 0;

export class WorkExp extends Component {
    render() {
        return (
            <>
            <div className="work">
                <h3>Work Experience</h3>
                <button type="button" className="add-work" onClick={addWorkExp}>Add</button>
                <button type="button" className="remove-work" onClick={removeWork}>Remove</button>
            </div>
            </>
        );
    }
}

function addWorkExp(e) {
    e.preventDefault();
    counter++;

    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("work-exp");
    fieldset.id = "work-" + counter;
    const legend = document.createElement("legend");
    legend.textContent = "Work Experience";
    fieldset.append(legend);

    const breakLine = document.createElement("br");
    
    const labelForCompanyName = document.createElement("label");
    labelForCompanyName.setAttribute("id", "company-name");
    labelForCompanyName.textContent = "Company name: ";

    const inputForCompanyName = document.createElement("input");
    inputForCompanyName.setAttribute("type", "text");
    inputForCompanyName.setAttribute("id", "company-name");
    inputForCompanyName.append(breakLine);

    const labelForPositionTitle = document.createElement("label");
    labelForPositionTitle.setAttribute("id", "position-title");
    labelForPositionTitle.textContent = "Position title: ";

    const inputForPositionTitle = document.createElement("input");
    inputForPositionTitle.setAttribute("type", "text");
    inputForPositionTitle.setAttribute("id", "position-title");
    inputForPositionTitle.append(breakLine);

    const labelForMainTasks = document.createElement("label");
    labelForMainTasks.setAttribute("id", "main-tasks");
    labelForMainTasks.textContent = "Main tasks: ";

    const textareaForMainTasks = document.createElement("input");
    textareaForMainTasks.setAttribute("id", "main-tasks");
    textareaForMainTasks.append(breakLine);

    const labelForStartDate = document.createElement("label");
    labelForStartDate.setAttribute("id", "start-date");
    labelForStartDate.textContent = "Start Date: ";

    const inputForStartDate = document.createElement("input");
    inputForStartDate.setAttribute("type", "date");
    inputForStartDate.setAttribute("id", "start-date");
    inputForStartDate.append(breakLine);

    const labelForEndDate = document.createElement("label");
    labelForEndDate.setAttribute("id", "end-date");
    labelForEndDate.textContent = "End Date (leave empty if still employed at your company): ";

    const inputForEndDate = document.createElement("input");
    inputForEndDate.setAttribute("type", "date");
    inputForEndDate.setAttribute("id", "end-date");
    inputForEndDate.append(breakLine);

    fieldset.append(labelForCompanyName, inputForCompanyName,
                    labelForPositionTitle, inputForPositionTitle,
                    labelForMainTasks, textareaForMainTasks,
                    labelForStartDate, inputForStartDate,
                    labelForEndDate, inputForEndDate);

    document.querySelector(".work").append(fieldset);
}

function removeWork(e) {
    if (counter > 0) {
        e.preventDefault();

        document.getElementById(`work-${counter}`).remove();
        counter--;
    }
}