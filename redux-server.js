const express = require('express');
const app = express();

const server=app.listen(3355,()=>{
    console.log("Server started on http://localhost:3355");
});

app.all('*', function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

const oracledb=require('oracledb');
oracledb.fetchAsString = [ oracledb.CLOB ];
oracledb.outFormat=oracledb.OUT_FORMAT_OBJECT

// 호텔 검색
app.get('/hotel/find',function (req,res){
    hotelFind(req,res);
})

async function hotelFind(request,response){
    // 검색에 받기
    let hd=request.query.hd;
    console.log('받은 hd 값:', hd);
    let connection
    try
    {
        connection=await oracledb.getConnection({
            user:'hr',
            password:'happy',
            connectionString:"localhost:1521/xe"
        })
        const result=await connection.execute(
            `select content_id, title, FIRST_IMAGE, addr1, tel, overview
             from content
             where CONTENTTYPE_ID=32
               AND FIRST_IMAGE IS NOT NULL
               AND first_image!='N/A'
              AND title LIKE '%'||:name||'%'`,
            [hd]
        );
        console.log(result);
        response.json(result.rows);
    }catch(err){
        console.log(err);
    }
    finally {
        try{
            if(connection){
                await connection.close();
            }
        }catch(err){}
    }

}
// 뉴스
var client_id = '07h3PpdvVSDUBsm5lflG';
var client_secret = 'hmN7gMFyUx';
app.get('/news/list', function (req, res) {
    var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // JSON 결과
//   var api_url = 'https://openapi.naver.com/v1/search/blog.xml?query=' + encodeURI(req.query.query); // XML 결과
    var request = require('request');
    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
    };
    request.get(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
            res.end(body);
        } else {
            res.status(response.statusCode).end();
            console.log('error = ' + response.statusCode);
        }
    });
});
app.listen(3000, function () {
    console.log('http://127.0.0.1:3000/search/blog?query=검색어 app listening on port 3000!');
});
