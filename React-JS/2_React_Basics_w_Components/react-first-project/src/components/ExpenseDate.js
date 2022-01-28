import './ExpenseDate.css'
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="calendarDate">
      <em>{month}</em>
      <strong>{year}</strong>
      <span>{day}</span>
    </div>
  );
}

export default ExpenseDate;
