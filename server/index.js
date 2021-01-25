const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const env = require('dotenv');

app.use(cors());
env.config();

//mariadb connection
const db = mysql.createConnection({
    host: "167.71.213.172",
    user: "root",
    password: "foqrnrhd@",
    database: "SFN_dev",
    dateStrings: 'date'
  });
  
  //check connection
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("connect sprint db...");
  });
  
  app.listen("5000", () => {
    console.log("Server started on port 5000");
  });


  //query
  const SELECT_MEMO = "SELECT card_memo,card_key FROM `u_card` WHERE user_id like '103667567403001475534' AND card_key like 7"
  const SELECT_FOOD = "SELECT * FROM `a_food`"


  app.get('/usermemo', (req, res) => {
      db.query(SELECT_MEMO, (err, result) => {
          if (err) {
              return res.send(err)
          } else {
              return res.json({
                  data: result
              })
          }
      })
  })

  app.get('/food', (req, res) => {
    db.query(SELECT_FOOD, (err, result) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
        }
    })
})