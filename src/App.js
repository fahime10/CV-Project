import './main.css';
import { Component } from 'react';
import { GeneralInfo } from "./components/GeneralInfo";
import { EduExp } from './components/EduExp';
import { WorkExp } from './components/WorkExp';

class App extends Component {
  render() {
    return (
      <>
      <h1>CV Builder</h1>
      <div className="container">
        <div className="edit-form">
          <form>
          <GeneralInfo />
          <EduExp />
          <WorkExp />
          <button type="submit" className="submit-cv">Submit the information</button>
          </form>
        </div>
        <div className="cv">
          
        </div>
      </div>
      </>
    );
  }
}

export default App;
