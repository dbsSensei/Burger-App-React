import React, { useState } from 'react';

import Aux from '../Aux/Aux';
import './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props:any) => {
    const [state, setState] = useState({
        showSideDrawer: false
    })

    const sideDrawerClosedHandler = () => {
        setState( { showSideDrawer: false } );
    }

    const sideDrawerToggleHandler = () => {
        setState( ( prevState:any ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

        return (
            <Aux>
                <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    open={state.showSideDrawer}
                    closed={sideDrawerClosedHandler} />
                <main className={"Content"}>
                    {props.children}
                </main>
            </Aux>
        )
    }


export default Layout;