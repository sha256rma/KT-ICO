import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Resume extends Component {

  render() {
    return(
      <div>
        <div className="Resume">
          <Button size="large" variant="contained" color="primary">
            <i className="material-icons">insert_drive_file</i> <i> Resume</i>
          </Button>
          <Button size="large" variant="contained" color="primary">
            <i class="fab fa-github"></i> <i> GitHub</i>
          </Button>
          <Button size="large" variant="contained" color="primary">
            <i class="fab fa-linkedin"></i> <i> LinkedIn</i>
          </Button>
          <Button size="large" variant="contained" color="primary">
            <i className="material-icons">insert_drive_file</i> <i> Website</i>
          </Button>
        </div>
      </div>
    );
  }
}

export default Resume; 