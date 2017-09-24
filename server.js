const express = require('express')
const eventRouter = require('./routes/eventRouter')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const CoffeeMachine = require('./models/coffeeMachine')

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
        if(req.body.product_id && req.body.setPay == 'true') { //支付成功后请求
            CoffeeMachine.find({serialNo: req.body.product_id})
                .then(documents => payCallBack(documents))
                .catch(error => console.log(error))
        
        }else{//python single machine support.
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
                        console.log("req.body is: " + req.body);
                        console.log("setPay is: " + req.body.setPay);
                        
                } else {  // 输出表单
                        res.write("0");
                        console.log("will set 0");
                }

       
        
        }
        res.end();
        //res.end(JSON.stringify(response));
})


app.listen(port, () => console.log(`listen port: ${port}`))

function payCallBack(documents){
    console.log("status is "+documents[0]['status']);
    console.log("cups is "+documents[0]['cups']);
    var cups = parseInt(documents[0]['cups'], 10);
    cups++;
    const id = documents[0]['_id'];
    const body = {
        status: '1',
        cups: cups,
    }
    CoffeeMachine.findByIdAndUpdate(id, { $set: body}, { new: true})
        .then(document => console.log(document))

}
