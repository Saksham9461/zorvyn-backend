const Record = require("../models/Record");

exports.getSummary = async (req, res) => {
  const result = await Record.aggregate([
    { $group: { _id: "$type", total: { $sum: "$amount" } } },
  ]);

  let income = 0,
    expense = 0;

  result.forEach((r) => {
    if (r._id === "income") income = r.total;
    else expense = r.total;
  });

  res.json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense,
  });
};

exports.getCategoryBreakdown = async (req, res) => {
  const data = await Record.aggregate([
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
  ]);
  res.json(data);
};

exports.getMonthlyTrends = async (req, res) => {
  const data = await Record.aggregate([
    {
      $group: {
        _id: {
          month: { $month: "$date" },
          year: { $year: "$date" },
          type: "$type",
        },
        total: { $sum: "$amount" },
      },
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } },
  ]);
  res.json(data);
};