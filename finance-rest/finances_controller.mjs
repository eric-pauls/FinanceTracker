import * as lineItems from './finances_model.mjs';
import express from 'express';
import cors from 'cors';
const app = express()
const PORT = 8080;
app.use(cors());
app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());


//create new category
app.post("/categories", (req, res) => {
    lineItems.createCategory(req.body.category, req.body.budget)
        .then(category => {
            res.status(201).json(category);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" });
        });
});

// retrieve categories
app.get('/categories', (req, res) => {
    let filter = {};
    lineItems.findCategories(filter, '', 0)
        .then(lineItems => {
            res.json(lineItems);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" })
        });
});

//update category
app.put('/categories/:_id', (req, res) => {
    lineItems.replaceCategory(req.params._id, req.body.category, req.body.budget)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, category: req.body.category, budget: req.body.budget })
            } else {
                res.status(400).json({ Error: "Request failed" })
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" })
        });
});

//delete category belonging to the input ID
app.delete("/categories/:_id", (req, res) => {
    lineItems.deleteCategoryBy_id(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: "Request Failed" });
            }
        });
});

//find the total amount for each category


//////////////////////////////////////////////////
//create new line items
app.post("/lineItems", (req, res) => {
    lineItems.createLineItem(req.body.date, req.body.description, req.body.category, req.body.amount)
        .then(lineItem => {
            res.status(201).json(lineItem);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" });
        });
});

// retrieve line items
app.get('/lineItems', (req, res) => {
    let filter = {};
    lineItems.findLineItems(filter, '', 0)
        .then(lineItems => {
            res.json(lineItems);
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" })
        });
});


//update line item
app.put('/lineItems/:_id', (req, res) => {
    lineItems.replaceLineItem(req.params._id, req.body.date, req.body.description, req.body.category, req.body.amount)
        .then(numUpdated => {
            console.log(numUpdated)
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, date: req.body.date, description: req.body.description, category: req.body.category, amount: req.body.amount })
            } else {
                res.status(400).json({ Error: "Request failed" })
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: "Request Failed" })
        });
});


//delete line item belonging to the input ID
app.delete("/lineItems/:_id", (req, res) => {
    lineItems.deleteBy_id(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: "Request Failed" });
            }
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});