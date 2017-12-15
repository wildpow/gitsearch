import axios from 'axios'

export const DISPLAY_REPOS = 'DISPLAY_REPOS';

export const displayRepos = (query) => {
    const apiUrl = `https://api.github.com/search/repositories?q=${query}`;
    const repoRequest = axios.get(apiUrl);

    return {
        type: DISPLAY_REPOS,
        payload: repoRequest
    }
}