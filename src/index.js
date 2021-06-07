import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import "style/index.css";

// pages
import Index from "pages/Index";
import PhoneNumber from "pages/PhoneNumber";

// http request error
import _404 from "pages/error/_404"

ReactDOM.render(
  <React.Fragment>
      <BrowserRouter>
          <div className={"center h-full w-full"}>
              <div>
                  <Switch>
                      <Route exact path={"/"} component={Index} />
                      <Route path={"/PhoneNumber"} component={PhoneNumber} />

                      <Route component={_404}/>
                  </Switch>
              </div>
          </div>
      </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
