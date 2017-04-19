const express = require('express');
const app = express();
var zomato = require('zomato');
const curl = require('curlrequest');

var client = zomato.createClient({
  userKey: 'api-key', //as obtained from [Zomato API](https://developers.zomato.com/apis) 
});
client.getCategories(null, function(err, result){
    if(!err){
      app.get('/categories', function (req, res) {
         res.send(result);
})
    }else {
      console.log(err);
    }
});


app.use(express.static('./public'))



/*To format Jive Response */
app.listen(1337,(err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://127.0.0.1:1337');
});