const form = document.querySelector("form");

const loanAmountInput = document.getElementById("loan-amount");
const interestRateInput = document.getElementById("interest-rate");
const loanTenureInput = document.getElementById("loan-tenure");

const monthlyEmiElement = document.querySelector(".monthly-emi");
const totalInterestElement = document.querySelector(".total-interest");
const totalPaymentElement = document.querySelector(".total-payment");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const loanAmount = Number(loanAmountInput.value);
  const annualRate = Number(interestRateInput.value);
  const tenureYears = Number(loanTenureInput.value);

  // Clear previous errors
  document.querySelectorAll(".error").forEach((error) => {
    error.textContent = "";
  });

  let isValid = true;

  if (!loanAmount || loanAmount <= 0) {
    loanAmountInput.nextElementSibling.textContent =
      "Please enter a valid loan amount";
    isValid = false;
  }

  if (!annualRate || annualRate <= 0) {
    interestRateInput.nextElementSibling.textContent =
      "Please enter a valid interest rate";
    isValid = false;
  }

  if (!tenureYears || tenureYears <= 0) {
    loanTenureInput.nextElementSibling.textContent =
      "Please enter a valid loan tenure";
    isValid = false;
  }

  if (!isValid) return;

  // EMI Formula
  const monthlyRate = annualRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  monthlyEmiElement.textContent = `Monthly EMI: £${emi.toFixed(2)}`;
  totalInterestElement.textContent = `Total Interest: £${totalInterest.toFixed(
    2
  )}`;
  totalPaymentElement.textContent = `Total Payment: £${totalPayment.toFixed(
    2
  )}`;
});

form.addEventListener("reset", () => {
  setTimeout(() => {
    monthlyEmiElement.textContent = "Monthly EMI: £0.00";
    totalInterestElement.textContent = "Total Interest: £0.00";
    totalPaymentElement.textContent = "Total Payment: £0.00";

    document.querySelectorAll(".error").forEach((error) => {
      error.textContent = "";
    });
  }, 0);
});