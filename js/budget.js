document.getElementById("Calculate-btn").addEventListener("click", function () {
  let perPlayerBudget = getInputFieldbyId("per-player");
  let playerBudget = perPlayerBudget * playerCart.length;
  const playerExpense = document.getElementById("player-Expense");
  playerExpense.innerText = playerBudget;
});
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    let perPlayerBudget = getInputFieldbyId("per-player");
    let playerBudget = perPlayerBudget * playerCart.length;

    let managerExpense = getInputFieldbyId("manager");
    let coachExpense = getInputFieldbyId("coach");
    let totalBudget = managerExpense + coachExpense + playerBudget;

    let myTotal = document.getElementById("total");
    myTotal.innerText = totalBudget;
  });
