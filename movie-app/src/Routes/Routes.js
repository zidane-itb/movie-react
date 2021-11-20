import React from 'react'
import { Routes, Switch} from "react-router-dom"
import Products from './Products.Products'

function Routes({ productItems }) {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItems={productItems}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
