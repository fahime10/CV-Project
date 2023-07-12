import '../src/styles/main.css';
import { Component } from 'react';
import { GeneralInfo } from './components/GeneralInfo';
import { EduExp } from './components/EduExp';
import { WorkExp } from './components/WorkExp';
import { CVGenInfo } from './components/CVGenInfo';
import { CVEduExp } from './components/CVEduExp';
import { CVWorkExp } from './components/CVWorkExp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        aboutMe: "",
      },
      eduExp: {
        school: {
          id: 1,
          schoolName: "",
          titleStudy: "",
          endDateStudy: "",
        },
        schools: [],
      },
      workExp: {
        work: {
          id: 1,
          company: "",
          positionTitle: "",
          mainTasks: "",
          startDate: "",
          endDate: "",
        },
        jobs: [],
      },
    }

    this.onInputInfo = this.handleChangeInfo.bind(this);
    this.onInputEdu = this.handleChangeEdu.bind(this);
    this.onClickAddEd = this.onClickAddEdu.bind(this);
    this.onClickRemoveEd = this.onClickRemoveEdu.bind(this);
    this.onInputWork = this.handleChangeWork.bind(this);
    this.onClickAddWrk = this.onClickAddWork.bind(this);
    this.onClickRemoveWrk = this.onClickRemoveWork.bind(this);
  }

  handleChangeInfo(e) {
    if (e.target.id === "first-name") {
      this.setState({
        genInfo: {
          firstName: e.target.value,
          lastName: this.state.genInfo.lastName,
          email: this.state.genInfo.email,
          phone: this.state.genInfo.phone,
          aboutMe: this.state.genInfo.aboutMe,
        },
      });
    } else if (e.target.id === "last-name") {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: e.target.value,
          email: this.state.genInfo.email,
          phone: this.state.genInfo.phone,
          aboutMe: this.state.genInfo.aboutMe,
        },
      });
    } else if (e.target.id === "email") {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: this.state.genInfo.lastName,
          email: e.target.value,
          phone: this.state.genInfo.phone,
          aboutMe: this.state.genInfo.aboutMe,
        },
      });
    } else if (e.target.id === "phone-number") {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: this.state.genInfo.lastName,
          email: this.state.genInfo.email,
          phone: e.target.value,
          aboutMe: this.state.genInfo.aboutMe,
        },
      });
    } else {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: this.state.genInfo.lastName,
          email: this.state.genInfo.email,
          phone: this.state.genInfo.phone,
          aboutMe: e.target.value,
        },
      });
    }
  }

  handleChangeEdu(e) {
    e.preventDefault();

    if (e.target.id === "school-name") {
      this.setState({
        eduExp: {
          school: {
            id: this.state.eduExp.school.id,
            schoolName: e.target.value,
            titleStudy: this.state.eduExp.school.titleStudy,
            endDateStudy: this.state.eduExp.school.endDateStudy,
          },
          schools: this.state.eduExp.schools,
        },
      });
    } else if (e.target.id === "title-study") {
      this.setState({
        eduExp: {
          school: {
            id: this.state.eduExp.school.id,
            schoolName: this.state.eduExp.school.schoolName,
            titleStudy: e.target.value,
            endDateStudy: this.state.eduExp.school.endDateStudy,
          },
          schools: this.state.eduExp.schools,
        },
      });
    } else {
      this.setState({
        eduExp: {
          school: {
            id: this.state.eduExp.school.id,
            schoolName: this.state.eduExp.school.schoolName,
            titleStudy: this.state.eduExp.school.titleStudy,
            endDateStudy: e.target.value,
          },
          schools: this.state.eduExp.schools,
        },
      });
    }
  }

  onClickAddEdu(e) {
    e.preventDefault();

    const id = this.state.eduExp.school.id + 1;

    this.setState({
      eduExp: {
        school: {
          id: id,
          schoolName: "",
          titleStudy: "",
          endDateStudy: "",
        },
        schools: this.state.eduExp.schools.concat(this.state.eduExp.school),
      },
    });

    document.querySelector("#school-name").value = "";
    document.querySelector("#title-study").value = "";
    document.querySelector("#date-study").value = "";
  }

  onClickRemoveEdu(e) {
    e.preventDefault();
    const id = this.state.eduExp.school.id - 1;
    const length = this.state.eduExp.schools.length - 1;

    if (id >= 1) {
      this.setState({
        eduExp: {
          school: {
            id: id,
            schoolName: "",
            titleStudy: "",
            endDateStudy: "",
          },
          schools: this.state.eduExp.schools.slice(0, length),
        },
      });
  
      document.querySelector("#school-name").value = "";
      document.querySelector("#title-study").value = "";
      document.querySelector("#date-study").value = "";
    }
  }

  handleChangeWork(e) {
    e.preventDefault();

    if (e.target.id === "company") {
      this.setState({
        workExp: {
          work: {
            id: this.state.workExp.work.id,
            company: e.target.value,
            positionTitle: this.state.workExp.work.positionTitle,
            mainTasks: this.state.workExp.work.mainTasks,
            startDate: this.state.workExp.work.startDate,
            endDate: this.state.workExp.work.endDate,
          },
          jobs: [],
        },
      });
    } else if (e.target.id === "position") {
      this.setState({
        workExp: {
          work: {
            id: this.state.workExp.work.id,
            company: this.state.workExp.work.company,
            positionTitle: e.target.value,
            mainTasks: this.state.workExp.work.mainTasks,
            startDate: this.state.workExp.work.startDate,
            endDate: this.state.workExp.work.endDate,
          },
          jobs: [],
        },
      });
    } else if (e.target.id === "main-tasks") {
      this.setState({
        workExp: {
          work: {
            id: this.state.workExp.work.id,
            company: this.state.workExp.work.company,
            positionTitle: this.state.workExp.work.positionTitle,
            mainTasks: e.target.value,
            startDate: this.state.workExp.work.startDate,
            endDate: this.state.workExp.work.endDate,
          },
          jobs: [],
        },
      });
    } else if (e.target.id === "start-date") {
      this.setState({
        workExp: {
          work: {
            id: this.state.workExp.work.id,
            company: this.state.workExp.work.company,
            positionTitle: this.state.workExp.work.positionTitle,
            mainTasks: this.state.workExp.work.mainTasks,
            startDate: e.target.value,
            endDate: this.state.workExp.work.endDate,
          },
          jobs: [],
        },
      });
    } else {
      this.setState({
        workExp: {
          work: {
            id: this.state.workExp.work.id,
            company: this.state.workExp.work.company,
            positionTitle: this.state.workExp.work.positionTitle,
            mainTasks: this.state.workExp.work.mainTasks,
            startDate: this.state.workExp.work.startDate,
            endDate: e.target.value,
          },
          jobs: [],
        },
      });
    }
  }

  onClickAddWork(e) {
    e.preventDefault();

    const id = this.state.workExp.work.id + 1;

    this.setState({
      workExp: {
        work: {
          id: id,
          company: "",
          positionTitle: "",
          mainTasks: "",
          startDate: "",
          endDate: "",
        },
        jobs: this.state.workExp.jobs.concat(this.state.workExp.work),
      },
    });

    document.querySelector("#company").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#main-tasks").value = "";
    document.querySelector("#start-date").value = "";
    document.querySelector("#end-date").value = "";
  }

  onClickRemoveWork(e) {
    e.preventDefault();
  
    const id = this.state.workExp.work.id - 1;
    const length = this.state.workExp.jobs.length - 1;

    if (id >= 1) {
      this.setState({
        workExp: {
          work: {
            id: id,
            company: "",
            positionTitle: "",
            mainTasks: "",
            startDate: "",
            endDate: "",
          },
          jobs: this.state.workExp.jobs.slice(0, length),
        },
      });
  
    document.querySelector("#company").value = "";
    document.querySelector("#position").value = "";
    document.querySelector("#main-tasks").value = "";
    document.querySelector("#start-date").value = "";
    document.querySelector("#end-date").value = "";
  }
}

submitCV(e) {
  e.preventDefault();

  document.querySelector(".edit-form").style.display = "none";
  document.querySelector(".container").style.flexDirection = "column";
  document.querySelector(".edit-cv").style.display = "block";
}

editCV() {
  document.querySelector(".edit-form").style.display = "flex";
  document.querySelector(".container").style.flexDirection = "";
  document.querySelector(".edit-cv").style.display = "none";
}

  render() {
    return (
      <>
      <h1>CV Builder</h1>
      <div className="container">
        <div className="edit-form">
          <GeneralInfo handleChangeInfo={this.onInputInfo} />
          <EduExp handleChangeEdu={this.onInputEdu} onClickAddEd={this.onClickAddEd} onClickRemoveEd={this.onClickRemoveEd} />
          <WorkExp handleChangeWork={this.onInputWork} onClickAddWork={this.onClickAddWrk} onClickRemoveWork={this.onClickRemoveWrk} />
          <button type="submit" className="submit-cv" onClick={this.submitCV}>Submit the information</button>
        </div>
        <div className="cv">
          <CVGenInfo firstName={this.state.genInfo.firstName} lastName={this.state.genInfo.lastName}
                      email={this.state.genInfo.email} phone={this.state.genInfo.phone}
                      aboutMe={this.state.genInfo.aboutMe} />
          <CVEduExp schools={this.state.eduExp.schools} />
          <CVWorkExp jobs={this.state.workExp.jobs} />
        </div>
        <button type="button" className="edit-cv" onClick={this.editCV}>Edit CV</button>
      </div>
      </>
    );
  }
}

export default App;
