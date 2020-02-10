import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar";
import {Blog} from "./pages/AboutPage";
import {WeekTasksPage} from "./pages/WeekTasksPage";
import {LongTermPage} from "./pages/LognTermPage";
import {DayTasksPage} from "./pages/DayTasksPage";

const App: React.FC = () => {


  return <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route component={DayTasksPage} path="/" exact/>
        <Route component={WeekTasksPage} path="/week" exact/>
        <Route component={LongTermPage} path="/longterm" exact/>
        <Route component={Blog} path="/blog"/>
        <Route/>
      </Switch>

    </div>
  </BrowserRouter>
};

export default App;
