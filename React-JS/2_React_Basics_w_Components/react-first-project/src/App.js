import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294,
      date: new Date(2022, 1, 28),
    },
    { id: "e2", title: "Laptop", amount: 600, date: new Date(2022, 1, 23) },
    { id: "e3", title: "Food", amount: 80, date: new Date(2022, 1, 21) },
    { id: "e4", title: "Accesories", amount: 100, date: new Date(2022, 1, 24) },
  ];
  return (
    <div>
      <header>
        <Expenses items={expenses}></Expenses>
      </header>
    </div>
  );
}

export default App;
