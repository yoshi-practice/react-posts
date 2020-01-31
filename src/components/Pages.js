import GeneratePost from './GeneratePost/index';
import Posts from './Posts/index';
import React, { Component } from 'react';

class Pages extends Component {
    render() {
        return(
            <div>
              <GeneratePost />
              <Posts />
            </div>
        )
    }
}

export default Pages;