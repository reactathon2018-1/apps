var list= {
    "_id": "5b3b62d2ca4aa9c842eec019",
    "team_id": 1,
    "team_name": "cyberark",
    "participant_ids": "1,2,3",
    "contact_no": "9492341035",
    "hack_id": "5b3b5c69ca4aa9c842eec017",
    "solution": "https://test.com",
    "code_zip": "https://google_drive/dv",
    "video": "https://druive_abc.mp4",
    "status": "Completed",
    "criteria": {
        "code": 70,
        "security": 80,
        "scalability": 70,
        "percentage_complete": 90
    },
};
var score;
var x=list.criteria;
var team=list.participant_ids.split(',');

var keys=Object.keys(x);
for(i=0;i<keys.length;i++){
    console.log(x[keys[i]]);
    console.log(score);
    score=parseFloat(x[keys[i]])+ (parseFloat(score) ? parseFloat(score) : 0);
    
}
//if(i <= 4){
    console.log(score);
    console.log(team);
//}

