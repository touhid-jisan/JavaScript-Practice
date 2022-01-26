import './ExpenseItem.css'
function ExpenseItem() {
  return (
      <div>
          <div className="expense-item">
              <div>Jan 26th 2022</div>
              <div className="expense-item__description">
                  <h2>Car Insurance</h2>
                  <div className="expense-item__price">$267</div>
              </div>
          </div>
      </div>
  );
}

export default ExpenseItem;
