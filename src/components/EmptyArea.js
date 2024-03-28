import "./EmptyArea.css";

function EmptyArea({ item }) {
  const message = `no ${item}`;

  return (
    <>
      <div className="emptyArea">{message}</div>
    </>
  );
}

export default EmptyArea;
