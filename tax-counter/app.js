const input = document.getElementById("salary");
const taxSum = document.querySelector(".tax-sum");
const nettoSum = document.querySelector(".netto-sum");
const pensionSum = document.querySelector(".pension-sum");

const countyTax = 32.41;
const countyPension = 5;

const calculateNetto = (salary) => {
  const tax = (100 - countyTax) / 100;
  const netto = salary * tax;
  return netto.toFixed(2);
};
const calculatePension = (salary) => {
  const pension = (salary * countyPension) / 100;
  return pension.toFixed(2);
};

const calculateTax = (salary) => {
  const totalTax = (salary * countyTax) / 100;
  return totalTax.toFixed(2);
};

const renderAllSums = (netto, pension, tax) => {
  nettoSum.innerHTML = netto;
  pensionSum.innerHTML = pension;
  taxSum.innerHTML = tax;
};

const onInput = (e) => {
  const inputValue = e.target.value;
  const netto = calculateNetto(inputValue);
  const pension = calculatePension(inputValue);
  const tax = calculateTax(inputValue);
  renderAllSums(netto, pension, tax);
};

input.addEventListener("input", (e) => {
  onInput(e);
});
