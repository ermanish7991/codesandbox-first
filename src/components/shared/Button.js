import "../../styles/button.css";

const Button = ({ sidebarOpen, setSidebarOpen }) => {
  const handleSidebarState = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <button
      onClick={() => handleSidebarState()}
      type="button"
      className="selectLensesButton"
    >
      Select Lenses
    </button>
  );
};

export default Button;
