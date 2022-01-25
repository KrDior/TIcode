function App() {
  const employees = [
    {
        "name": "Ivan",
        "color": "blue"
    },
    {
        "name": "Tanya",
        "color": "yellow"
    },
    {
        "name": "David",
        "color": "green"
    }
  ];
  const handleColor = (e) => {
    console.log('!!!!', e.target);
    e.target.style.color = e.target.style.color === 'red' ? e.target.getAttribute("data-color") : 'red';
  }

  return (
    <div className="App">
      {employees.map(el => {
        return <div data-color={el.color} onClick={handleColor} style={{color: el.color}}>
          {el.name}
        </div>
      })}
    </div>
  );
}
