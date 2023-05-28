let canvas;
function make_canvas(n) {
    canvas = [];
    for (let i = 0; i < n; i++) {
        canvas[i] = [];
        for (let j = 0; j < n; j++) {
            canvas[i][j] = {
                r: 255,
                g: 255,
                b: 255
            }
        }
    }
}
function update_canvas(row, col, new_r, new_g, new_b) {
    canvas[row][col] = {
        r: new_r,
        g: new_g,
        b: new_b
    }
}

make_canvas(5);
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    console.log("poluchig get rrequest")
    res.status(200)
    res.send("nqma niwo tuka")

})
app.get("/map", function (req, res) {
    res.status(400)
    res.send(JSON.stringify(canvas))
})
//app.get("/opit", function (req, res) {
//  res.status(200)
//res.contentType("text/html")
//res.sendFile("C:\Users\dimit\OneDrive\Работен плот\Програмиране 2022-2023\Urok 24\public")
//})
app.put("/risuvaj", function (req, res) {
    let X = parseInt(req.query, X),
        Y = parseInt(req.query, Y),
        R = parseInt(req.query, R),
        G = parseInt(req.query, G),
        B = parseInt(req.query, B);


    update_canvas(X, Y, R, G, B);
    res.status(200);
    res.send("uspeshno risuvane");
});
app.listen(port, function () {
    console.log("server listening on port" + port);
})

let a = JSON.stringify([1, 2, 3])
// let b=JSON.parse("ds")