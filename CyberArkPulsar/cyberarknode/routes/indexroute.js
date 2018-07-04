module.exports=function(app){
    var hackUsers=require('./hackUserRoute.js');
    var hack=require('./hackMaster.js');
    var team=require('./hackTeam.js');
    var teamMaster=require('./hackTeamMaster.js');
    var leaderboard=require('./hackLeaderboard.js');

    app.use('/cyberarknode/',hackUsers);
    app.use('/cyberarknode/',hack);
    app.use('/cyberarknode/',team);
    app.use('/cyberarknode/',teamMaster);
    app.use('/cyberarknode/',leaderboard);
}