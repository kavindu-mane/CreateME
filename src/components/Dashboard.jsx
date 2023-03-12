import React, { Component } from 'react';
import BasicInfo from './BasicInfo';

class Dashboard extends Component {
    render() { 
        const element = <BasicInfo/>
        return (
            <React.Fragment>
                {element}
            </React.Fragment>
        );
    }
}
 
export default Dashboard;