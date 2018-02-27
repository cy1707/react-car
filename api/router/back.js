var db = require('../db/db')

//此页面写后端接口
module.exports = { 
	register:function(app){
        //查询车辆，模糊查询（品牌名搜索）
        app.get('/hchaxun',function(req,res){
            var _data = req.query.data;

            var sql = `select * from cars where name like '%${_data}%'`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        
        //系列查询(传过来车的系列，查找数据库)
        app.get('/series',function(req,res){
            var _data = req.query.data;

            var sql = `select * from cars where country='${_data}'`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        
        
        //删除车辆接口（传id过来删除对应车）
        app.get('/deletecar',function(req,res){

            var _id = req.query.id;
            var sql = `delete from cars where id = ${_id}`;
            db.delete(sql,function(data){
                res.send(data);
            })
        })
        
        
        
        //增加车辆接口（传所以信息过来添加车辆到数据库）
        app.get('/addcar',function(req,res){
            console.log(req.query);
            var _brand_id = req.query.brand_id;
            var _name = req.query.name;
            var _brand_name = req.query.brand_name;
            var _nprice = req.query.nprice;
            var _oprice = req.query.oprice;
            var _mileage = req.query.mikeage;
            var _license_time = req.query.license_time;
            var _license_area = req.query.license_area;
            var _car_area = req.query.car_area;
            var _baomai = req.query.baomai;
            var _car_type = req.query.car_type;
            var _car_age = req.query.car_age;
            var _color = req.query.color;
            var _country = req.query.country;
            var _paifang = req.query.paifang;
            var _paifangbiaozhun = req.query.paifangbiaozhun;
            var _haoche = req.query.haoche;
            var _jishou = req.query.jishou;
            
            var sql = `insert into cars (
                    brand_id,
                    name,
                    brand_name,
                    nprice,
                    oprice,
                    mileage,
                    license_time,
                    license_area,
                    car_area,
                    baomai,
                    car_type,
                    car_age,
                    color,
                    country,
                    paifang,
                    paifangbiaozhun,
                    haoche,
                    jishou
                )
                values
                (
                   '${_brand_id}',
                   '${_name}',
                   '${_brand_name}',
                   '${_nprice}',
                   '${_oprice}',
                   '${_mileage}',
                   '${_license_time}',
                   '${_license_area}',
                   '${_car_area}',
                   '${_baomai}',
                   '${_car_type}',
                   '${_car_age}',
                   '${_color}',
                   '${_country}',
                   '${_paifang}',
                   '${_paifangbiaozhun}',
                   '${_haoche}',
                   '${_jishou}'
                )
            `
            db.insert(sql,function(data){
                res.send(data);
            })
        })


        
        //修改车辆信息接口
        app.get('/idsearch',function(req,res){
            var _data = req.query;
//          console.log(_data);
            var _id = req.query.id;
            var _brand_name = req.query.brand_name;
            var _car_type = req.query.car_type;
            var _color = req.query.color;
            var _car_age = req.query.car_age;
            var _country = req.query.country;
            var _biansuxiang = req.query.biansuxiang;
            var _nprice = req.query.nprice;
            var _oprice = req.query.oprice;
            var _car_area = req.query.car_area;
            var _paifang = req.query.paifang;
            var _name = req.query.name;
            var _paifangbiaozhun = req.query.paifangbiaozhun;
            var _baomai = req.query.baomai;
      
            var sql = `update cars set
                brand_name = '${_brand_name}',
                car_type = '${_car_type}',
                color = '${_color}',
                car_age = '${_car_age}',
                country = '${_country}',
                biansuxiang = '${_biansuxiang}',
                nprice = '${_nprice}',
                oprice = '${_oprice}',
                car_area = '${_car_area}',
                paifang = '${_paifang}',
                name = '${_name}',
                paifangbiaozhun = '${_paifangbiaozhun}',
                baomai= '${_baomai}'
            where id='${_id}'`;
            db.select(sql,function(data){
                res.send(data);
            })
        })
        
        
        
        //注册:
        //（判断用户名是否存在）
        app.get('/checkuser',function(req,res){
            var _username = req.query.username;
//          console.log(_username);
            var sql = `select * from user where username='${_username}'`;
            db.select(sql,function(data){
//              console.log(data);
                if(data.data.results.length == 0){
                    res.send('yes')
                }else{
                    res.send('no')
                }
            })
        })
        
        //点击注册把用户名和密码写入数据库
        app.get('/saveuser',function(req,res){
            var _username = req.query.username;
            var _password = req.query.password;
            var sql = `insert into user (username,password) values ('${_username}','${_password}')`;
            db.insert(sql,function(data){
                res.send(data);
            })
        })
        
        
        
        //登录时请求数据库，判断用户名和密码是否正确
        app.get('/judgeuser',function(req,res){
            var _username = req.query.username;
            var _password = req.query.password;
            var sql = `select * from user where username='${_username}' and password='${_password}'`;
            db.select(sql,function(data){
                if(data.data.results.length == 0){
                    res.send('no')
                }else{
                    res.send('yes')
                }
            })
        })  
	}
}
