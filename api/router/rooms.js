var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/getschedule', function(req, res){
            var date = req.query.date;
            var page = req.query.page * 1;
            var limit = req.query.limit * 1;
            var sql = `
            select
                SQL_CALC_FOUND_ROWS
                *
            from
                rooms
                inner join roomtype on rooms.type = roomtype.indexid
                inner join schedule on rooms.indexid = schedule.roomid
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`;
            db.select(sql, function(data){
                res.send(data);
            })
        })
        app.post('/book', function(req, res){})
        app.get('/list',function(req,res){
            
            
            var page = req.query.page*1;
            var limit = req.query.limit * 1;
            var sql = `select * from list `;
            
                
            db.select(sql, function(data){
                var total=data.data.results.length;
                data.data.results = data.data.results.splice((page-1)*limit,limit)
                
                res.send(data);
            })



        })

        app.post('/del',function(req,res){
            var _id = req.body.id;
            console.log(_id)

           var sql = `delete  from list where id=${_id}`

            db.delete(sql,function(data){
                res.send(data);
            })
        })

        app.post('/int',function(req,res){
            var _name = req.body.name;
            
            var _price = req.body.price;
            var _title = req.body.title;
            var _id = req.body.id;
            var _rpt = req.body.rpt;
            console.log(_rpt)

             var sql = `insert into list (name,nprice,title,id,rpt) values ('${_name}','${_price}','${_title}','${_id}','${_rpt}')`

            db.insert(sql,function(data){
                res.send(data);
            })
        })

        app.get('/checkUser1',function(req,res){
            
            var _title = req.query.title;
            console.log(req.query.title);
            var sql = `select * from list where title='${_title}'`;
            console.log(sql)
                
            db.select(sql, function(data){
                
                
                res.send(data);
            })



        })

        app.get('/check1',function(req,res){
            
            
            var _id = req.query.id;
            console.log(req.query.title);
            var sql = `select * from list where id=${_id}`;
            console.log(sql)
                
            db.select(sql, function(data){
                
                
                res.send(data);
            })



        })

        app.post('/add',function(req,res){
            var _name = req.body.name;
            
            var _price = req.body.price;
            var _title = req.body.title;
            var _id = req.body.id;
            var _rpt = req.body.rpt;
            console.log(_name)

            var sql = `insert into list (name,nprice,title,id,rpt) values ('${_name}','${_price}','${_title}','${_id}','${_rpt}')`

            db.insert(sql,function(data){
                res.send(data);
            })
        })

        app.get('/shu',function(req,res){
            
            
            var page = req.query.page*1;
            var limit = req.query.limit * 1;
            var sql = `select  id,name,oprice,nprice,title,rpt  from list `;
            
                
            db.select(sql, function(data){
                var total=data.data.results.length;
                data.data.results = data.data.results.splice((page-1)*limit,limit)
                
                res.send(data);
            })



        })


        
    }
}