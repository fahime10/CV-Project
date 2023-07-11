import React, { Component } from "react";

export class EduExp extends Component {

    // addStudy(e) {
    //     e.preventDefault();
    //     const { onClickAddEdu } = this.props;

    //     let count = this.state.counter + 1;

    //     this.setState({
    //         counter: count,
    //     });

    //     onClickAddEdu();
    

        // const fieldset = document.createElement("fieldset");
        // fieldset.classList.add("edu-exp");
        // fieldset.id = "edu-" + this.state.counter;
        // const legend = document.createElement("legend");
        // legend.textContent = "Educational Experience";
        // fieldset.append(legend);
    
        // const breakLine = document.createElement("br");
        
        // const labelForSchoolName = document.createElement("label");
        // labelForSchoolName.setAttribute("id", "school-name-" + this.state.counter);
        // labelForSchoolName.textContent = "School name: ";
    
        // const inputForSchoolName = document.createElement("input");
        // inputForSchoolName.setAttribute("type", "text");
        // inputForSchoolName.setAttribute("id", "school-name-" + this.state.counter);
        // inputForSchoolName.append(breakLine);
    
        // const labelForTitleStudy = document.createElement("label");
        // labelForTitleStudy.setAttribute("id", "title-study-" + this.state.counter);
        // labelForTitleStudy.textContent = "Title of study: ";
    
        // const inputForTitleStudy = document.createElement("input");
        // inputForTitleStudy.setAttribute("type", "text");
        // inputForTitleStudy.setAttribute("id", "title-study-" + this.state.counter);
        // inputForTitleStudy.append(breakLine);
    
        // const labelForEndDate = document.createElement("label");
        // labelForEndDate.setAttribute("id", "end-date-" + this.state.counter);
        // labelForEndDate.textContent = "End date of study: (leave blank if not finished)";
    
        // const inputForEndDate = document.createElement("input");
        // inputForEndDate.setAttribute("type", "date");
        // inputForEndDate.setAttribute("id", "end-date-" + this.state.counter);
        // inputForEndDate.append(breakLine);
    
        // const submitBtn = document.createElement("button");
        // submitBtn.textContent = "Submit this tile";
        // submitBtn.id = "submit-edu-" + this.state.counter;
    
        // fieldset.append(labelForSchoolName, inputForSchoolName,
        //                 labelForTitleStudy, inputForTitleStudy,
        //                 labelForEndDate, inputForEndDate,
        //                 submitBtn);
    
        // document.querySelector(".edu").append(fieldset);
    
        // buildOnCV();
    // }

    // removeStudy(e) {
    //     if (this.state.counter > 0) {
    //         e.preventDefault();
    //         let count = this.state.counter - 1;
    
    //         // document.getElementById(`edu-${this.state.counter}`).remove();
    
    //         // removeFromCV(this.state.counter);
    //         this.setState({
    //             counter: count,
    //         });
    //     }
    // }

    render() {
        const { handleChangeEdu, onClickAddEdu } = this.props;
        
        return (
            <>
            <div className="edu">
                {/* <h3>Educational Experience</h3>
                <button type="button" className="add-edu" onClick={this.addStudy}>Add</button>
                <button type="button" className="remove-edu" onClick={this.removeStudy}>Remove</button> */}
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
                <label htmlFor="date-study">End Date of study: </label>
                <input
                    type="date"
                    id="date-study"
                    onChange={handleChangeEdu}
                />
                <br />
                <button type="button" className="add-edu" onClick={onClickAddEdu}>Add</button>
                <button type="button" className="remove-edu">Remove</button>
            </fieldset>
            </div>
            </>
        );
    }
}

// function buildOnCV() {
//     const div = document.createElement("div");
//     div.classList.add("school-" + counter);

//     const p1 = document.createElement("p");
//     p1.id = "edu-" + counter;

//     const p2 = document.createElement("p");
//     p2.id = "edu-" + counter;

//     const p3 = document.createElement("p");
//     p3.id = "edu-" + counter;

//     div.append(p1, p2, p3);

//     document.querySelector(".cv-edu").append(div);
// }

// function removeFromCV(counter) {
//     document.querySelector(".school-" + counter).remove();
// }