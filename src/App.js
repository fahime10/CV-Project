import './App.css';
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
          <GeneralInfo />
          <EduExp />
          <WorkExp />
      </div>
      </>
    );
  }
}

export default App;
