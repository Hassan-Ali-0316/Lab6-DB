const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/books',function(req,res){
    db.query('select * from books', function(err,result){
        if (err) throw err;
        res.json(result);
    });
});

router.post('/books',function(req,res){
    const {ISBN,Title,Author} = req.body;
    db.query('insert into books set ?',{ISBN,Title,Author},function(err,result){
        if(err) throw err;
        res.json({message: 'Book Added!!'});
    });
});

module.exports = router;