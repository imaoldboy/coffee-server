const express = require('express')
const eventRouter = require('./routes/eventRouter')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')

var paid = false;
app.use(express.static('public'));
//创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json())
app.use('/api', eventRouter)

app.get('/', (request, response) => {
    response.send('hello server ~')
})

app.post('/', urlencodedParser, function (req, res) {
        //输出 JSON 格式
        //var response = {
        //       "setPay":req.body.setPay
        //};
        //console.log(response);

        if(req.body.acid && paid) { //树莓派请求
                res.write("1");
                paid = false;
                console.log("notice raspberry to produce coffee,and will set paid=false");
        }else if(req.body.setPay && paid==false) { //支付成功后请求
                paid = true;
                console.log("will set paid=true");
        } else {  // 输出表单
                res.write("0");
                console.log("will set 0");
        }

        res.end();
        //res.end(JSON.stringify(response));
})


app.listen(port, () => console.log(`listen port: ${port}`))
