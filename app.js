var express = require('express');
var app = express();

var data = [];

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/static/html/hack.txt");
})


app.get('/hack', function (req, res) {
    res.sendFile(__dirname + "/static/html/index.html");
})


app.get('/dict', function (req, res)
{
    if (!req.param("enword"))
        res.send(data);
    else
    {
        var en = req.param("enword");
        for (var i=0; i<data.length; i++)
        {
            if (data[i].enword == en)
            {
                res.send(data[i]);
            }
        }

        res.send("no such word");
    }
}
);

app.post('/dict', function (req, res)
{
    var en = req.param("enword");
    var ru = req.param("ruword");

    if ((!ru) || (!en))
    {
        res.send("no params");
    }
    else
    {
        var newword = {};
        newword.enword = en;
        newword.ruword = ru;

        data.push(newword);
        res.send("added");
    }
}
);

app.delete('/dict', function (req, res)
{
    var en = req.param("enword");

    for (var i=0; i<data.length; i++)
    {
        if (data[i].enword == en)
        {
            data.splice(i, 1);
            res.send("deleted");
        }
    }

    res.send("no such word");
});

app.put('/dict', function (req, res)
{
    var en = req.param("enword");
    var ru = req.param("ruword");

    for (var i=0; i<data.length; i++)
    {
        if (data[i].enword == en)
        {
            data[i].ruword = ru;
            res.send("updated");
        }
    }

    res.send("no such word");
})

var server = app.listen(8080, function ()
{
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
}
);
