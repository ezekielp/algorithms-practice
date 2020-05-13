// https://leetcode.com/problems/queue-reconstruction-by-height/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
    if (!people.length) return [];
    if (people.length === 1) return people;

    const hash = {};

    people.forEach(person => {
        if (!hash[person[0]]) {
            hash[person[0]] = [person];
        } else {
            hash[person[0]].push(person);
        }
    });

    const sortedKeys = Object.keys(hash);
    sortedKeys.sort((a, b) => b - a);

    let sorted = [];

    sortedKeys.forEach(key => {
        const heights = hash[key];
        heights.sort((p1, p2) => p1[1] - p2[1]);
        sorted = sorted.concat(heights);
    })

    let reconstructed = [];
    let i = 0;
    let currentHeight = sorted[0][0];

    while (reconstructed.length < people.length) {
        while (sorted[i] && sorted[i][0] === currentHeight) { 
            reconstructed.splice(sorted[i][1], 0, sorted[i]);
            i++;
        }

        if (reconstructed.length === people.length) {
            return reconstructed;
        } else {
            currentHeight = sorted[i][0];
        }
    }

    return reconstructed;    
};

const example1 = [[7, 0], [4, 4], [7, 1], [6, 1], [5, 2], [5, 0]];

console.log(reconstructQueue(example1));

// [[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]]

// Example;

// Input: [
// 	[7, 0],
// 	[4, 4],
// 	[7, 1],
// 	[5, 0],
// 	[6, 1],
// 	[5, 2],
// ];

// Output: [
// 	[5, 0],
// 	[7, 0],
// 	[5, 2],
// 	[6, 1],
// 	[4, 4],
// 	[7, 1],
// ];








// def reconstructQueue(self, people):
//     people.sort(key=lambda (h, k): (-h, k))
//     queue = []
//     for p in people:
//         queue.insert(p[1], p)
//     return queue
