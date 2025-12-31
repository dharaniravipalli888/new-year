function NameInput({ name, setName, setShowWish }) {
  const handleClick = () => {
    if (name.trim() !== "") {
      setShowWish(true);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>🎉 Show My Wish 🎉</button>
    </>
  );
}

export default NameInput;
