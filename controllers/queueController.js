
module.exports = function(app){

    var queueData = [
        {item: 'Make non-database AJAX todo app!'},
        {item: 'get code changes on live server (via git)'},
        {item: 'install and configure postgresql on localhost'},
        {item: 'dance dance dance'},
        {item: 'double dance dance dance'}
      ];

    app.get('/', function(req, res){
        res.render('queue', {queueItems: queueData});
    });

    app.post('/queue', function(req, res){
        console.log('hit the post /queue route');
        console.log('test');
        var answers = Object.values(req.body);
        
            answers.forEach(function(value){
            queueData.push({item: value});
        });
        
        console.log(queueData);
        res.send(req.body);
        
        
        
        // Object.entries(req).forEach(
        //     ([key, value]) => queueData.push({item: value})
        //     );
        //     console.log(queueData);
        //     res.send(req.fields);
    });
} 
    
 