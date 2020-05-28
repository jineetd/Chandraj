var bodyParser=require('body-parser');

var data=[{item:'Pen', rate:10 ,quantity:2},{item:'Notebook', rate:50, quantity:1},{item:'Photocopy' ,rate:1.5, quantity:100}];
var urlencodedParser=bodyParser.urlencoded({extended:false});
module.exports= function(app){

  app.get('/billing',function(req,res){
    res.render('billing',{bill:data});
  });

  app.get('/',function(req,res){
    res.render('home');
  });

  app.post('/billing',urlencodedParser,function(req,res){
    data.push(req.body);
    console.log(data);
    //send data back to front end
    res.json(data);
  });

  app.delete('/billing/:item',function(req,res){
    var toDelete=req.params.item;
    console.log(data);
    for(var i=0;i<data.length;i++)
    {
      if(data[i].item==toDelete)
      {
        data.splice(i,1);
        break;
      }
    }
    res.json(data);
  });

};
