// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }

const GraphNode = require('./graph_node');

function breadthFirstSearch(startingNode, targetVal) {
    if (startingNode.val === targetVal) return startingNode;
    
    let visited = new Set();
    let nextToVisit = startingNode.neighbors;

    while (nextToVisit.length > 0) {
        let nextNode = nextToVisit[0];
        if (nextNode.val === targetVal) return nextNode;
        
        visited.add(nextNode.val);
        nextNode.neighbors.forEach(neighbor => {
            if (!visited.has(neighbor.val)) {
                nextToVisit.push(neighbor);
            }
        })
        nextToVisit.shift();
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};