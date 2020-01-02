import React, { Component } from 'react';
import ScrollableTabsButtonAuto from './MaterialUIComponents/UIHorizontalTabs';

class Projects extends Component {

  render() {

    return (
        <div className="ProjectsPage">
          <ScrollableTabsButtonAuto/>
          <div className="ProjectsSub">© 2020 Kartikeya Sharma, All Rights Reserved</div>
        </div>

    );
  }
}

export default Projects;