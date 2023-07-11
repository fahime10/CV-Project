import '../src/styles/main.css';
import { Component } from 'react';
import { GeneralInfo } from "./components/GeneralInfo";
import { EduExp } from './components/EduExp';
import { WorkExp } from './components/WorkExp';
import { CVGenInfo } from './components/CVGenInfo';
import { CVEduExp } from './components/CVEduExp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      eduExp: {
        school: {
          id: 0,
          schoolName: "",
          titleStudy: "",
          endDateStudy: "",
        },
        schools: [],
      },
      workExp: {
        work: {
          company: "",
          positionTitle: "",
          mainTasks: "",
          startDate: "",
          endDate: "",
        },
        works: [],
      },
    }

    this.onInputInfo = this.handleChangeInfo.bind(this);
    this.onInputEdu = this.handleChangeEdu.bind(this);
    this.onClickAddEdu = this.onClickAddEdu.bind(this);

  }

  handleChangeInfo(e) {
    if (e.target.id === "first-name") {
      this.setState({
        genInfo: {
          firstName: e.target.value,
          lastName: this.state.genInfo.lastName,
          email: this.state.genInfo.email,
          phone: this.state.genInfo.phone,
        },
      });
    } else if (e.target.id === "last-name") {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: e.target.value,
          email: this.state.genInfo.email,
          phone: this.state.genInfo.phone,
        },
      });
    } else if (e.target.id === "email") {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: this.state.genInfo.lastName,
          email: e.target.value,
          phone: this.state.genInfo.phone,
        },
      });
    } else {
      this.setState({
        genInfo: {
          firstName: this.state.genInfo.firstName,
          lastName: this.state.genInfo.lastName,
          email: this.state.genInfo.email,
          phone: e.target.value,
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
    // const schoolName = document.querySelector("#school-name").value;
    // const titleStudy = document.querySelector("#title-study").value;
    // const dateStudy = document.querySelector("#date-study").value;

    this.setState({
      eduExp: {
        school: {
          id: id,
          schoolName: this.state.eduExp.school.schoolName,
          titleStudy: this.state.eduExp.school.titleStudy,
          endDateStudy: this.state.eduExp.school.endDateStudy,
        },
        schools: this.state.eduExp.schools.concat(this.state.eduExp.school),
      },
    });

    // this.setState({
    //   eduExp: {
    //     school: {
    //       id: this.state.eduExp.school.id,
    //       schoolName: this.state.eduExp.school.schoolName,
    //       titleStudy: this.state.eduExp.school.titleStudy,
    //       endDateStudy: this.state.eduExp.school.endDateStudy,
    //     },
    //     schools: this.state.eduExp.schools.concat(this.state.eduExp.school),
    //   },
    // });
    console.log(this.state.eduExp);
    // console.log(this.state.eduExp.school);
  }

  render() {
    return (
      <>
      <h1>CV Builder</h1>
      <div className="container">
        <div className="edit-form">
          <form>
          <GeneralInfo handleChangeInfo={this.onInputInfo} />
          <EduExp handleChangeEdu={this.onInputEdu} onClickAddEdu={this.onClickAddEdu} />
          <WorkExp />
          <button type="submit" className="submit-cv">Submit the information</button>
          </form>
        </div>
        <div className="cv">
          <CVGenInfo firstName={this.state.genInfo.firstName} lastName={this.state.genInfo.lastName}
                      email={this.state.genInfo.email} phone={this.state.genInfo.phone} />
          <CVEduExp eduExp={this.state.eduExp.schools} />
        </div>
      </div>
      </>
    );
  }
}

export default App;
