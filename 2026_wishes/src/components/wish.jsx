function Wish({ name }) {
  const wishes = [
    "May this year bring you endless happiness and success 🎊",
    "Wishing you good health, peace, and prosperity 💫",
    "May all your dreams turn into reality this year ✨",
    "New year, new goals, new achievements 💪",
    "May your life be filled with love and laughter 🥳",
  ];

  const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

  return (
    <div className="wish">
      <p>
        Dear <span>{name}</span>, <br />
        {randomWish} <br />
        Keep smiling and shining 🎇
      </p>
    </div>
  );
}

export default Wish;
