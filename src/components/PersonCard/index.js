import "./style.css";

function PersonCard({ name, age, country }) {
  return (
    <div className="devs">
      <h2>Dev: {name}</h2>
      <h3>Idade: {age}</h3>
      <h3>País: {country}</h3>
    </div>
  );
}

export default PersonCard;
