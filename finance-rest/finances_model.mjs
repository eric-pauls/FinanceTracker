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

//define totals schema
const categorySchema = mongoose.Schema({
    category:{type:String, required: true},
    budget: {type: Number, required: true}
})
//compile model from the schema
const Category = mongoose.model("Category", categorySchema)

const createCategory = async (category, budget) => {
    const newCategory = new Category({category: category, budget: budget});
    return newCategory.save();
}

const findCategories = async (filter, projection, limit) => {
    const query = Category.find(filter) 
    .select(projection)
    .limit(limit);
    return query.exec();
}

const findByCategory = async (filter) => {
    const query = LineItem.find({category:filter})
    return query.exec()
}

const replaceCategory = async function (_id, category, total, budget) {
    const result = await Category.replaceOne({_id:_id}, {category: category, total: total, budget: budget});
    return result.nmodified;
}

const deleteCategoryBy_id = async (_id) => {
    const result = await Category.deleteOne({_id:_id});
    return result.deletedCount;
}

////////////////////////////////////////////////////////////////

//defining line itemschema 
const lineItemSchema = mongoose.Schema({
    date: { type: String, required: true},
    description: { type: String, required: true},
    category: { type: String, required: true},
    amount: { type: Number, required: true}
});

//compile a model fromm the schema 
const LineItem = mongoose.model("LineItem", lineItemSchema)

const createLineItem = async (date, description, category, amount) => {
    const lineItem = new LineItem({date: date, description: description, category: category, amount: amount});
    return lineItem.save();
}

const findLineItemBy_id = async (_id) => {
    const query = LineItem.findBy_id(_id);
    return query.exec(); 
}

const findLineItems = async (filter, projection, limit) => {
    const query = LineItem.find(filter) 
    .select(projection)
    .limit(limit);
    return query.exec();
}

const replaceLineItem = async function (_id, date, description, category, amount) {
    const result = await LineItem.replaceOne({_id:_id}, {date: date, description: description, category: category, amount:amount});
    console.log(result)
    return result.nModified;
}

const deleteBy_id = async (_id) => {
    const result = await LineItem.deleteOne({_id:_id});
    return result.deletedCount;
}

export { createLineItem, findLineItems, replaceLineItem, deleteBy_id, createCategory, findCategories, replaceCategory, deleteCategoryBy_id, findByCategory};