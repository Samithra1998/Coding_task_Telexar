import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    expenseName: {type: String, required: true},
    date: {type: Date, required: true},
    amount: {type: Number, required: true },
    notes: {type: String, required: true},
    category: {type: String, required: true},
});

const expenseModel =  mongoose.model('expenseModel', expenseSchema);

export default expenseModel;