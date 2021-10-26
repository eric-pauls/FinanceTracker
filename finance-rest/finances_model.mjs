import mongoose from'mongoose';

mongoose.connect(
    'mongodb://localhost:27017/lineItems',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;

db.once('open', () => {
    console.log('Successfully connected to MongoDB using Mongoose!');
})

mongoose.set('useCreateIndex', true);

//defining schema 
const lineItemSchema = mongoose.Schema({
    date: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true},
    amount: { type: Number, required: true}
});

//compile a model form the schema 
const LineItem = mongoose.model("LineItem", lineItemSchema)
/**
 * Create a line item
 * @param {String} date 
 * @param {String} description
 * @param {String} category
 * @param {Number} amount
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createLineItem = async (date, description, category, amount) => {
    const lineItem = new LineItem({date: date, description: description, category: category, amount: amount});
    return lineItem.save();
}

/**
 * Find the line item with the given _id value
 * @param {String} _id 
 * @returns 
 */
const findLineItemBy_id = async (_id) => {
    const query = LineItem.findBy_id(_id);
    return query.exec(); 
}

/**
 * Retrive line items based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
const findLineItems = async (filter, projection, limit) => {
    const query = LineItem.find(filter) 
    .select(projection)
    .limit(limit);
    return query.exec();
}

/**
 * Replace the date, description, category, amount of the line item with the _id value provided
 * @param {String} _id 
 * @param {String} date 
 * @param {String} description
 * @param {String} category
 * @param {Number} amount
 * @returns A promise. Resolves to the number of documents modified
 */
const replaceLineItem = async function (_id, date, description, category, amount) {
    const result = await LineItem.replaceOne({_id:_id}, {date: date, description: description, category: category, amount:amount});
    return result.nmodified;
}

/**
 * Delete the exercise with prov_ided _id value
 * @param {String} _id 
 * @returns A promise. Resolves to the count of deleted documents
 */
const deleteBy_id = async (_id) => {
    const result = await LineItem.deleteOne({_id:_id});
    return result.deletedCount;
}

export { createLineItem, findLineItems, replaceLineItem, deleteBy_id};