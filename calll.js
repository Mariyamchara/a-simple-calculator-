let expression = '';
let resultElement = document.getElementById('result');

function appendNumber(number) 
{
  expression += number;
  updateDisplay();
}

function appendOperator(operator) 
{
  if (expression.length === 0) return;
  const lastChar = expression[expression.length - 1];
  if (['+', '-', '*', '/'].includes(lastChar)) 
  {
    expression = expression.slice(0, -1);
  }
  expression += operator;
  updateDisplay();
}

function clearDisplay() 
{
  expression = '';
  updateDisplay();
}

function calculate() 
{
  try {
    const result = eval(expression);
    expression = result.toString();
    updateDisplay();
  } 
  catch (error) 
  {
    expression = 'Error';
    updateDisplay();
  }
}

function updateDisplay() 
{
  resultElement.value = expression;
}
