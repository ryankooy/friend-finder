var friends = [
    {
        "name": "Sprayleigh",
        "photo": "#",
        "scores": [1, 6, 3, 4, 2, 7, 5, 1, 8, 4]
    },
    {
        "name": "Toberden",
        "photo": "#",
        "scores": [4, 2, 6, 5, 1, 7, 6, 5, 3, 1]
    }
];

var userResults = friends[1].scores;

var score = userResults.reduce(scoreSum);

function scoreSum(total, num) {
    return total + num;
}

console.log(score);