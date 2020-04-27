/**
 * @param {number[][]} edges
 * @return {number[]}
 */

// Input: [[1, 2], [1, 3], [2, 3]]
// Output: [2, 3]
// Explanation: The given undirected graph will be like this:
// 1
//     / \
// 2 - 3

// { 1:0, 2:1, 3:2 }
// [1, 2, 3]
// [1, 1, 1]


// Input: [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
// Output: [1, 4]
// Explanation: The given undirected graph will be like this:
// 5 - 1 - 2
//     |   |
//     4 - 3

// { 1: 0, 2: 1, 3: 2, 4: 3, 5: 4 }
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]


var findRedundantConnection = function(edges) {
    const assignmentHash = {};
    let counter = 0;

    for (let i = 0; i < edges.length; i++) {
        [edges[i][0], edges[i][1]].forEach(edge => {
            if (!assignmentHash[edge]) {
                assignmentHash[edge] = counter;
                counter++;
            }
        })
    }
    
    let unionFindTable = new Array(counter);
    for (let key in assignmentHash) {
        unionFindTable[assignmentHash[key]] = key;
    }

    let results = [];

    for (let j = 0; j < edges.length; j++) {
        let edge1 = edges[j][0];
        let edge2 = edges[j][1];

        let rootValAtEdge1 = unionFindTable[assignmentHash[edge1]];
        let rootValAtEdge2 = unionFindTable[assignmentHash[edge2]];

        if (rootValAtEdge2 !== edge2) {
            results.push(edges[j]);
        } else {
            unionFindTable[assignmentHash[edge2]] = rootValAtEdge1;
        }
    }
    
    
};


// parent = [1, 2, 0]

// def findRedundantConnection(self, edges):
// parent = [0] * len(edges)

// def find(x): // 1
// if parent[x] == 0: // 
//     return x // 
// parent[x] = find(parent[x]) // parent[0] = find(1) = find(2) = find(3) = 
// return parent[x] // 

// def union(x, y): // (0, 3)
// rootX = find(x) // 3
// rootY = find(y) // 3
// if rootX == rootY: // true
//     return False 
// parent[rootX] = rootY // parent[1] = 2
// return True

// for x, y in edges: // [2, 3] // [0, 3]
//     if not union(x - 1, y - 1): // union(1, 2)
// return [x, y]

// raise ValueError("Illegal input.")


