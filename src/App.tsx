import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Navbar} from "./components/Navbar";
import {BlogPage} from "./pages/BlogPage";
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
        <Route component={BlogPage} path="/blog"/>
        <Route/>
      </Switch>

    </div>
  </BrowserRouter>
};

export default App;
