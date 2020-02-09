const request = require('request');
const fs = require('fs');

function pathData(path) {
    return new Promise((resolve, reject) => {
        var list = {
            url: `https://www.thebluealliance.com/api/v3${path}`,
            method: 'GET',
            headers: {
                'X-TBA-Auth-Key': 'oSSXMWPE2jOJrLTYpgMvgP5BTvbtOJRwR6LSv1ytb0g5FS6RlaWBx70Pw0B8cwvA'
            }
        };
        request(list, function (err, res, body) {
            resolve(JSON.parse(body));
        });
    });
};
// Event data in year of a given team
function eventData(teamId, year) {
    return new Promise((resolve, reject) => {
        pathData(`/team/${teamId}/events/${year}/statuses`).then(snapshot => {
            if (err) throw err;
            var array = [];
            for (var i in snapshot) {
                var object = {
                    rank: snapshot[i]["qual"]["ranking"]["rank"],
                    record: snapshot[i]["qual"]["ranking"]["record"],
                    alliance: snapshot[i]["alliance"]["name"],
                    status: snapshot[i]["playoff"]["status"],
                    level: snapshot[i]["playoff"]["level"]
                }
                array.push(object);
            }
            resolve(array);
            console.log('hello')
        });
    });
}
eventData('frc8', '2019').then(snapshot => {
    fs.writeFile('eventdata.json', JSON.stringify(snapshot), function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
    });
});
exports.eventData = eventData
