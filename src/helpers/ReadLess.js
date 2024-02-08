const ReadLess = (props) => {
  /// scroll to read section when read less is clicked
  /// more text or less text depend on these 2 states

  const readLess = (exactState, section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
    exactState(false);
  };
  return (
    <div>
      <button
        onClick={() => readLess(props.paragraphStateSetter, props.section)}
        className="readMore"
      >
        {props.content}
      </button>
    </div>
  );
};

export default ReadLess;
