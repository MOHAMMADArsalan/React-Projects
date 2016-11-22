import axios from "axios";

let id = "YOUR_CLIENT_ID";
let sec = "YOUR_SECRET_ID";
let param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
    return axios.get("http://api.github.com/users/" + username + param)
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
    }
}

export default githubHelpers;