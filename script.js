document.querySelector('.calculator').addEventListener('click', function (e) {
  const target = e.target;
  const action = target.dataset.action;
  const value = target.textContent;
  const display = document.querySelector('.result');
  const expression = document.querySelector('.expression');

  if (action === 'num') {
      expression.textContent += value;
  } else if (action === 'operator') {
      expression.textContent += value;
  } else if (action === 'clear') {
      expression.textContent = '';
      display.textContent = '';
  } else if (action === 'equals') {
      const result = eval(expression.textContent);
      display.textContent = result;
  } else if (action === 'del') {
      expression.textContent = expression.textContent.slice(0, -1);
  } else if (action === 'percent') {
      const result = eval(expression.textContent);
      expression.textContent = `${result / 100}`;
  }
});