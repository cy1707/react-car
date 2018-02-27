var db = require('../db/db')

module.exports = {
    register: function(app){
        
        
        

       
        

        app.get('/change',function(req,res){
            var _id = req.query.id;
            console.log(_id);
            var sql = `UPDATE goods_order SET type = '1' WHERE id = '${_id}'`

            db.update(sql,function(data){
                res.send(data);
            })
        })

        app.get('/shan',function(req,res){
            var _id = req.query.id;
            console.log(_id)

           var sql = `delete  from car where id=${_id}`

            db.delete(sql,function(data){
                res.send(data);
            })
        })

        app.get('/data',function(req,res){
            
            
            var _data = req.query.data;
            console.log(_data);
            var sql = `select * from list where  name like '%${_data}%' or title like '%${_data}%'`
            console.log(sql)
                
            db.select(sql, function(data){
                
                
                res.send(data);
            })



        })

        app.get('/car',function(req,res){
            var _id = req.query.goid;
            var _imgurl = req.query.goimg;
            var _price = req.query.goprice;
            var _name = req.query.goname;
            
            var _num = req.query.qty;

            console.log(_name)

            var sql = `insert into car (name,price,id,imgurl,num) values ('${_name}','${_price}','${_id}','${_imgurl}','${_num}')`

            db.insert(sql,function(data){
                res.send(data);
            })
        })



    }
}