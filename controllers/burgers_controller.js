const express = require('express');
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    // initialize to true
    let eaten = true;

    // loop over each record and find out if all burgers devoured
    data.forEach((item) => {
        // 'and' devoured booleans to see if all devoured
        eaten = eaten && item.devoured;
    });
    // add parameter to object
    hbsObject.eaten = eaten;
    // return index html along with handlebar burger object
    res.render('index', hbsObject);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.create(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;