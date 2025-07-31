function Clear({ setTask, setTitle, setListName }) {
  const handleClear = () => {
    setTask([]);
    setTitle('');
    setListName('');
  };

  return (
    <button onClick={handleClear} className="btn btn-outline-secondary">
      Clear
    </button>
  );
}

export default Clear;