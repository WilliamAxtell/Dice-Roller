const dummy = {
    'd4': 2,
    'd6': 1,
    'd8': 0,
    'd10': 0,
    'd12': 4,
    'd20': 0
}

const roller = (dice) => {
    let result = [];

    const { d4, d6, d8, d10, d12, d20 } = dice;

    for (let die in dice) {
        for (let i = 0; i < dice[die]; i++) {
            result.push([die, Math.floor(Math.random() * die.slice(1) + 1)]);
        }
    }
    console.log(result);
    return result;
}

roller(dummy);