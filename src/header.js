import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Header() {
    return( 
    <div className="Map-header">
      <h2>
        <GitHubIcon fontSize={"large"} />
        &nbsp; #GitHub &nbsp;
        <a href="https://github.com/evbambly/glassix-excersize" target="_blank" 
        rel="noopener noreferrer" className="App-link">Eitan's App</a>
      </h2>
    </div>)
  }