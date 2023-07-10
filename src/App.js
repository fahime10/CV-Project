import '../src/styles/main.css';
import { Component } from 'react';
import { GeneralInfo } from "./components/GeneralInfo";
import { EduExp } from './components/EduExp';
import { WorkExp } from './components/WorkExp';
import { CVGenInfo } from './components/CVGenInfo';

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
    console.log(this.state.genInfo);
  }

  render() {
    return (
      <>
      <h1>CV Builder</h1>
      <div className="container">
        <div className="edit-form">
          <form>
          <GeneralInfo handleChangeInfo={this.onInputInfo} />
          <EduExp />
          <WorkExp />
          <button type="submit" className="submit-cv">Submit the information</button>
          </form>
        </div>
        <div className="cv">
          <CVGenInfo firstName={this.state.genInfo.firstName} lastName={this.state.genInfo.lastName}
                      email={this.state.genInfo.email} phone={this.state.genInfo.phone} />
        </div>
      </div>
      </>
    );
  }
}

export default App;
