const rollDice = (req, res) => {
  const dice = req.body;

  let result = [];

  for (let die in dice) {
      for (let i = 0; i < dice[die]; i++) {
          result.push([die, Math.floor(Math.random() * die.slice(1) + 1)]);
      }
  }

  res.status(200).json({ result });
};

module.exports = { rollDice };