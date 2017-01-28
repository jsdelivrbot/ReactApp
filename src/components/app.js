import React, { Component} from 'react';
import HeaderBar from './header/header'
export default class App extends Component {
    render() {
        return ( <HeaderBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />  );
    }
}