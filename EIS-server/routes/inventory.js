const { Router } = require('express');
const pool = require('../db')

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM inventory', (err, res) =>{
        if (err) return next(err);
    
        response.json(res.rows);
    })
})

router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM inventory WHERE id= $1', [id], (err, res) =>{
        if (err) return next(err);
    
        response.json(res.rows);
    })
})


router.post('/', (request, response, next) => {
    const { serial_no, item_description, category, quantity } = request.body;

    pool.query('INSERT INTO inventory(serial_no, item_description, category, quantity) VALUES($1, $2, $3, $4)', 
        [serial_no, item_description, category, quantity], 
        (err, res) =>{
            if (err) return next(err);
    
            response.redirect('/inventory')
        }
    );
})

router.put('/:id', (request, response, next) => {
    const { id } = request.params;
    const keys = ['serial_no', 'item_description', 'category', 'quantity'];
    const fields = [];

    keys.forEach(key => {
        if (request.body[key]) fields.push(key)
    })

    fields.forEach((field, index) => {
        pool.query(
            `UPDATE inventory SET ${field}=($1) WHERE id= ($2)`,
            [request.body[field], id], 
            (err, res) => {
                if (err) return next(err);
        
                if (index === fields.length -1) response.redirect('/inventory')
            }
        )
    });
})

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('DELETE FROM inventory WHERE id= $1', [id], (err, res) =>{
        if (err) return next(err);
    
        response.redirect('/inventory')
    })
})

module.exports = router;