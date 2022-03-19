const express = require("express");
const { addTransaction, deleteTransaction, getTransactions } = require("../controllers/transactions");
const router = express.Router();

router
    .route("/")
    .get(getTransactions)
    .post(addTransaction);

router
    .route("/:id")
    .delete(deleteTransaction);

module.exports = router;