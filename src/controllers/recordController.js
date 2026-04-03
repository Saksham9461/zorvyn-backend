const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create({
    ...req.body,
    createdBy: req.user.id,
  });
  res.json(record);
};

exports.getRecords = async (req, res) => {
  const { page = 1, limit = 10, type, category, startDate, endDate } =
    req.query;

  const filter = {};

  if (type) filter.type = type;
  if (category) filter.category = category;

  if (startDate || endDate) {
    filter.date = {};
    if (startDate) filter.date.$gte = new Date(startDate);
    if (endDate) filter.date.$lte = new Date(endDate);
  }

  const skip = (page - 1) * limit;

  const data = await Record.find(filter)
    .skip(skip)
    .limit(Number(limit))
    .sort({ date: -1 });

  const total = await Record.countDocuments(filter);

  res.json({
    total,
    page: Number(page),
    totalPages: Math.ceil(total / limit),
    data,
  });
};

exports.updateRecord = async (req, res) => {
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(record);
};

exports.deleteRecord = async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};