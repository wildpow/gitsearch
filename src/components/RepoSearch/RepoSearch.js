import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayRepos } from '../../actions';
import RepoList from '../RepoList/RepoList';
import './RepoSearch.css';

class RepoSearch extends Component {
    constructor() {
        super();

        this.state = {
            query: ''
        };
    }
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newQuery = this.state.query;
        this.props.displayRepos(newQuery);
        this.setState({query:''});
    }
    render() {
        return (
            <div className="repoHolder">
                <input value={this.state.query}
                       onChange={this.handleInputChange}
                       placeholder="Enter a repo search here"
                       type="text"
                       className="repoInput"
                /> <button onClick={this.handleSubmit}
                           className="repoButton"
                           type="submit"
                           >Submit</button>
                           <ul>
        
                           {this.props.repos.items.map((repo) => {
                               return (
                                   <RepoList repo={repo} index={repo.id} key={repo.id} />
                               )
                           } )}
                        </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
   return {
        repos: state.repos 
   } 
} 



export default connect(mapStateToProps, { displayRepos })(RepoSearch);