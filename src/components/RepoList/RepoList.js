import React from 'react';
import './RepoList.css';

export default class RepoList extends React.Component {
    render () {
        return (
        <div className="RepoList">
            <li className='List'>
                <p>{this.props.repo.full_name}</p>
                <p><a href={this.props.repo.html_url}>Click to view repo</a></p>
                <p>Language: {this.props.repo.language}</p>
                <p>Watchers: {this.props.repo.watchers}</p>
            </li>
        </div>
        )
    }
}
