import GeneratePost from './Generate';
import Posts from './Post';
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