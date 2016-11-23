import axios from "axios";

let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = "?client_id=" + id + "&client_secret=" + sec;

let getUserInfo = (username) => {
    return axios.get("http://api.github.com/users/" + username + param)
}

let getRepos = (username) => {
    // fetch username repos
    return axios.get("http://api.github.com/users/" + username + "/repos" + param + "&per_page=100")
}

let getTotalStars = (repos) => {
    //calculate all the stars that the user has
    return repos.data.reduce((prev, currect) => {
        return prev + currect.stargazers_count
    }, 0)
}
let getPlayersData = (players) => {
    return getRepos(players.login)
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: players.followers,
                totalStars: totalStars
            }
        })
}
let calculateScores = (players) => {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}

let githubHelpers = {
    getPlayersInfo: function (players) {
        // fetch some data from GitHub
        return axios.all(players.map((username) => {
            return getUserInfo(username)
        })).then((info) => {
            return info.map((user) => {
                return user.data;
            })
        }).catch((err) => {
            console.warn("Error In getPlayerInfo, ", err);
        })
    },
    battle: (players) => {
        let playerOneData = getPlayersData(players[0]);
        let playerTwoData = getPlayersData(players[1]);

       return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch((err) => {
                console.warn("Error in getPlayerInfo", err)
            })
    }
}
export default githubHelpers;