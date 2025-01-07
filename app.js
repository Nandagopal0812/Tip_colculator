document.getElementById("calculate-btn").addEventListener("click", function () {
  const billAmount = parseFloat(document.getElementById("bill-amount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tip-percentage").value
  );

  try {
    if (
      isNaN(billAmount) ||
      isNaN(tipPercentage) ||
      billAmount <= 0 ||
      tipPercentage < 0
    ) {
      alert("Please enter valid inputs.");
      return;
    }
  } catch (error) {
    console.log(error);
  }

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById(
    "tip-amount"
  ).textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
  document.getElementById(
    "total-amount"
  ).textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});
