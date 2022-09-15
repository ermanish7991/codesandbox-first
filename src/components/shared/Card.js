import "../../styles/card.css";
const Card = (props) => {
  console.log("item");

  return (
    <div
      className="cardTrail"
      onClick={() => props.setShowSidebarPhase(props.sidebarPhase)}
    >
      <div className="cardWrapper">
        <p>{props.heading}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
