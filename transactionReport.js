const transactions = [
  { id: 1, customer: "Alice Johnson", amount: 120500, category: "Groceries", date: "2026-01-05", status: "completed" },
  { id: 2, customer: "Brian Smith", amount: 85000, category: "Transport", date: "2026-01-06", status: "pending" },
  { id: 3, customer: "Carla Brown", amount: 210750, category: "Dining", date: "2026-01-07", status: "completed" },
  { id: 4, customer: "David Lee", amount: 40200, category: "Utilities", date: "2026-01-09", status: "failed" },
  { id: 5, customer: "Emma Davis", amount: 300000, category: "Shopping", date: "2026-01-10", status: "completed" },
  { id: 6, customer: "Frank Wilson", amount: 65300, category: "Health", date: "2026-01-12", status: "completed" },
  { id: 7, customer: "Grace Moore", amount: 150000, category: "Travel", date: "2026-01-13", status: "pending" },
  { id: 8, customer: "Henry Taylor", amount: 95150, category: "Groceries", date: "2026-01-15", status: "completed" },
  { id: 9, customer: "Ivy Anderson", amount: 20000, category: "Entertainment", date: "2026-01-17", status: "failed" },
  { id: 10, customer: "Jack Thomas", amount: 180400, category: "Shopping", date: "2026-01-18", status: "completed" },
  { id: 11, customer: "Karen Martinez", amount: 110800, category: "Bills", date: "2026-01-20", status: "completed" },
  { id: 12, customer: "Leo Harris", amount: 72250, category: "Transport", date: "2026-01-21", status: "pending" },
  { id: 13, customer: "Mia Clark", amount: 88900, category: "Dining", date: "2026-01-22", status: "completed" },
  { id: 14, customer: "Noah Lewis", amount: 250000, category: "Shopping", date: "2026-01-23", status: "completed" },
  { id: 15, customer: "Olivia Walker", amount: 45500, category: "Groceries", date: "2026-01-24", status: "failed" },
  { id: 16, customer: "Paul Hall", amount: 130000, category: "Travel", date: "2026-01-25", status: "completed" },
  { id: 17, customer: "Quinn Allen", amount: 60700, category: "Utilities", date: "2026-01-28", status: "completed" },
  { id: 18, customer: "Rachel Young", amount: 175000, category: "Dining", date: "2026-01-30", status: "pending" },
  { id: 19, customer: "Sam King", amount: 99990, category: "Groceries", date: "2026-02-01", status: "completed" },
  { id: 20, customer: "Tina Wright", amount: 245500, category: "Health", date: "2026-02-03", status: "completed" },
  { id: 21, customer: "Uma Scott", amount: 58000, category: "Transport", date: "2026-02-05", status: "failed" },
  { id: 22, customer: "Victor Green", amount: 310750, category: "Shopping", date: "2026-02-06", status: "completed" },
  { id: 23, customer: "Wendy Baker", amount: 70100, category: "Bills", date: "2026-02-08", status: "completed" },
  { id: 24, customer: "Xavier Adams", amount: 135200, category: "Dining", date: "2026-02-10", status: "pending" },
  { id: 25, customer: "Yara Nelson", amount: 190000, category: "Travel", date: "2026-02-11", status: "completed" },
  { id: 26, customer: "Zane Carter", amount: 33400, category: "Entertainment", date: "2026-02-12", status: "completed" },
  { id: 27, customer: "Ava Mitchell", amount: 120000, category: "Groceries", date: "2026-02-14", status: "failed" },
  { id: 28, customer: "Ben Perez", amount: 205000, category: "Shopping", date: "2026-02-15", status: "completed" },
  { id: 29, customer: "Chloe Roberts", amount: 78300, category: "Transport", date: "2026-02-17", status: "completed" },
  { id: 30, customer: "Daniel Turner", amount: 145600, category: "Dining", date: "2026-02-18", status: "pending" },
  { id: 31, customer: "Ella Phillips", amount: 90000, category: "Utilities", date: "2026-02-20", status: "completed" },
  { id: 32, customer: "Felix Campbell", amount: 260000, category: "Shopping", date: "2026-02-21", status: "completed" },
  { id: 33, customer: "Grace Parker", amount: 50000, category: "Health", date: "2026-02-22", status: "failed" },
  { id: 34, customer: "Henry Evans", amount: 160900, category: "Travel", date: "2026-02-24", status: "completed" },
  { id: 35, customer: "Isla Edwards", amount: 28500, category: "Entertainment", date: "2026-02-26", status: "completed" },
  { id: 36, customer: "Jacob Collins", amount: 220400, category: "Groceries", date: "2026-02-27", status: "pending" },
  { id: 37, customer: "Kimberly Stewart", amount: 105000, category: "Bills", date: "2026-02-28", status: "completed" },
  { id: 38, customer: "Liam Sanchez", amount: 64800, category: "Transport", date: "2026-03-01", status: "completed" },
  { id: 39, customer: "Maya Morris", amount: 274900, category: "Shopping", date: "2026-03-02", status: "completed" },
  { id: 40, customer: "Nathan Rogers", amount: 42000, category: "Dining", date: "2026-03-04", status: "failed" },
  { id: 41, customer: "Olive Reed", amount: 155250, category: "Health", date: "2026-03-05", status: "completed" },
  { id: 42, customer: "Peter Cook", amount: 88000, category: "Utilities", date: "2026-03-07", status: "pending" },
  { id: 43, customer: "Quinn Morgan", amount: 198000, category: "Travel", date: "2026-03-08", status: "completed" },
  { id: 44, customer: "Ruby Murphy", amount: 75600, category: "Groceries", date: "2026-03-10", status: "completed" },
  { id: 45, customer: "Seth Bailey", amount: 140300, category: "Shopping", date: "2026-03-12", status: "failed" },
  { id: 46, customer: "Tara Rivera", amount: 185700, category: "Dining", date: "2026-03-13", status: "completed" },
  { id: 47, customer: "Uriel Cooper", amount: 55200, category: "Transport", date: "2026-03-14", status: "completed" },
  { id: 48, customer: "Violet Ward", amount: 230000, category: "Shopping", date: "2026-03-16", status: "pending" },
  { id: 49, customer: "Wyatt Foster", amount: 112400, category: "Bills", date: "2026-03-17", status: "completed" },
  { id: 50, customer: "Zoe Brooks", amount: 92800, category: "Entertainment", date: "2026-03-19", status: "completed" }
];

function completedTransactions() {
    return transactions.filter(transaction => transaction.status === "completed").length;
}

console.log("Successful transactions:", completedTransactions());

function largestTransactions() {
    return [...transactions].sort((a, b) => b.amount - a.amount).slice(0, 5);
}

console.log("Top 5 transactions:", largestTransactions());

function totalSpendPerCustomer() {
    return transactions.reduce((acc, transaction) => {
        if (!acc[transaction.customer]) {
            acc[transaction.customer] = 0;
        }
        acc[transaction.customer] += transaction.amount;
        return acc;
    }, {});
}

console.log("Total spend per customer:", totalSpendPerCustomer());

function totalSpendPerCategory() {
    const totals = transactions.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = 0;
        }
        acc[transaction.category] += transaction.amount;
        return acc;
    }, {});

    return Object.entries(totals)
        .sort((a, b) => b[1] - a[1])
        .map(([category, total]) => ({ category, total }));
}

console.log("Total spend per category:", totalSpendPerCategory());

function customersSpentMoreThan100k() {
    return Object.entries(totalSpendPerCustomer())
        .filter(([customer, total]) => total > 100000)
        .map(([customer, total]) => ({ customer, total }))
        .sort((a, b) => b.total - a.total);
}

console.log("Customers with total spend > 100000:", customersSpentMoreThan100k());

function averageTransactionValuePerCategory() {
    const totals = transactions.reduce((acc, transaction) => {
        if (!acc[transaction.category]) {
            acc[transaction.category] = { total: 0, count: 0 };
        }

        acc[transaction.category].total += transaction.amount;
        acc[transaction.category].count += 1;

        return acc;
    }, {});

    return Object.entries(totals)
        .map(([category, { total, count }]) => ({
            category,
            average: total / count,
            transactionCount: count,
            total
        }))
        .sort((a, b) => b.average - a.average);
}

console.log("Average transaction value per category:", averageTransactionValuePerCategory());

function customersWithFailedTransactions() {
    const failedCustomers = new Set(
        transactions
            .filter(transaction => transaction.status === "failed")
            .map(transaction => transaction.customer)
    );

    return [...failedCustomers].sort();
}

console.log("Customers with at least one failed transaction:", customersWithFailedTransactions());

function monthlySummary() {
    const summary = transactions.reduce((acc, transaction) => {
        const month = transaction.date.slice(0, 7);

        if (!acc[month]) {
            acc[month] = { month, total: 0, count: 0 };
        }

        acc[month].total += transaction.amount;
        acc[month].count += 1;

        return acc;
    }, {});

    return Object.values(summary).sort((a, b) => a.month.localeCompare(b.month));
}

console.log("Monthly summary:", monthlySummary());
