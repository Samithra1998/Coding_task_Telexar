import expenseModel from "../models/expenses.js";

export const addExpenses = async (req, res) => {
  const expenses = req.body;
  const createExpenses = new expenseModel({
    ...expenses,
  });

  try {
    await createExpenses.save();
    res.status(200).json(createExpenses);
  } catch (error) {
    res.status(500).json({ message: "Something has wrong!" });
  }
};

export const viewExpenses = async (req, res) => {
  try {
    const expenses = await expenseModel.find();
    console.log(expenses);
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Something has wrong!" });
  }
};

export const deleteExpenses = async(req,res) => {
    const {id} = req.params;
    try {
        await expenseModel.findByIdAndDelete(id);
        res.status(200).json({message: 'Expense has been deleted successfully!'});
    } catch (error) {
        res.status(500).json({ message: "Something has wrong!" });
    }
}
