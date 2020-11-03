import React from "react";
import { Route, Switch } from "react-router-dom";

import Size from "./pages/size";
import Crust from "./pages/crust";
import Toppings from "./pages/toppings";
import Confirm from "./pages/confirm";


export default function Routes() {
  return (
    <Switch>
        <Route path={`/`} exact component={Size} />
        <Route path={`/size`} exact component={Size} />
        <Route path={`/crust`} exact component={Crust} />
        <Route path={`/toppings`} exact component={Toppings} />
        <Route path={`/confirm`} exact component={Confirm} />
    </Switch>
  );
}
