import { ref } from "vue";
const regex = /\+|\/|X|-/;

export let operationString = ref("");
export let result = ref("");

function handleAddition(value1, value2) {
  return value1 + value2;
}

function handleMultiplication(value1, value2) {
  return value1 * value2;
}

function handleSubtraction(value1, value2) {
  return value1 - value2;
}

function handleDivision(value1, value2) {
  return Number(value1 / value2).toFixed(4);
}

export function handleAddItemsToOperation(value) {
  if (operationString.value.length === 14) {
    return;
  }

  operationString.value += value;
}

export function resetOperation() {
  result.value = "";
  operationString.value = "";
}

export function handleShowResult() {
  let values = operationString.value.split(regex);
  const signal = operationString.value.search(regex);

  if (values[0] === "0" && signal === "/") {
    result.value = "Err: Division by zero not allowed";
    return;
  }

  switch (operationString.value[signal]) {
    case "+":
      result.value = handleAddition(Number(values[0]), Number(values[1]));
      break;
    case "-":
      result.value = handleSubtraction(Number(values[0]), Number(values[1]));
      break;
    case "X":
      result.value = handleMultiplication(Number(values[0]), Number(values[1]));
      break;
    case "/":
      result.value = handleDivision(Number(values[0]), Number(values[1]));
      break;
    default:
      result.value = "0";
  }

  setTimeout(resetOperation, 2000);
}
