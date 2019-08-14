import React from "react";
import Videos from "./video";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "../../reducers/reducer.index";
import { Map } from "immutable";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "../components/header";
import Home from "../home";
import notFound from "../components/notFound";
import Video from "./videos";

const store = createStore(
  reducer,
  Map({}),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/videos:id" component={Video} />
            <Redirect from="/v" to="/videos" />
            <Redirect from="/v:id" to="/videos:id" />
            <Route component={notFound} />
          </Switch>
          {/* <Route exact path="/contactos" component={Contactos} />
                <Route exact path="/perfil" component={Perfil} /> */}
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
