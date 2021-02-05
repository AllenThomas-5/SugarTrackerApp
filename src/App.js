import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SugarMonthList from './compnents/SugarMonthList'
import SugarMonth from "./compnents/chartlayout/SugarMonth";
import SugarChart from './compnents/SugarChart'
import SugarMain from './compnents/SugarMain'
import SugarAddForm from './compnents/forms/SugarAddForm'
import SugarEditForm from './compnents/forms/SugarEditFrom'
import SugarDeleteForm from './compnents/forms/SugarDeleteForm'
import './App.css';

function App() {
  return (
    <>
     <Switch>
        <Route exact path="/" component={SugarMain} />
        <Route path="/month" component={SugarMonthList} />
        <Route path="/singlemonth" component={SugarMonth} />
        <Route path="/chart" component={SugarChart} />
        <Route path="/addnewsugar" component={SugarAddForm} />
        <Route path="/editsugar" component={SugarEditForm} />
        <Route path="/deletesugar" component={SugarDeleteForm} />
     </Switch>
    </>
  );
}

export default App;
