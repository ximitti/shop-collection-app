import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Produtos, Favoritos, ItemDetail } from '/imports/ui/pages'

// ----------------------------------

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/produtos" />
      </Route>
      <Route exact path="/produtos" component={Produtos} />
      <Route exact path="/favoritos" component={Favoritos} />
      <Route exact path="/produtos/:slug" component={ItemDetail} />
      <Route path="*">
        <h1>404</h1>
      </Route>
    </Switch>
  )
}

export default Routes
