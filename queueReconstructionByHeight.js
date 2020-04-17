// https://leetcode.com/problems/queue-reconstruction-by-height/

// def reconstructQueue(self, people):
//     people.sort(key=lambda (h, k): (-h, k))
//     queue = []
//     for p in people:
//         queue.insert(p[1], p)
//     return queue


// [[7,0], [7,1], [6, 1], [5,0], [5,2], [4, 4]]
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
