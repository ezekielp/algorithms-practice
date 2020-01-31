// Make an array of 'visited' sets, using a depth-first search to create each set?
// Then, in your outer iterative for-in loop on the graph, check to see if
// any of the sets contain that key, and if not make a new set to run the
// DFS on that node's neighbors?

function numRegions(graph) {
    let visitedSets = [];

    for (const node in graph) {
        if (!visitedSets.some(set => {
            set.has(node);
        })) {
            let newSet = depthFirstSearch(node, graph);
            visitedSets.push(newSet);
            // visitedSets.forEach(set, idx => {
            //     if (set.has(node)) {
            //         visitedSets[idx] = depthFirstSearch(node, graph, set);
            //     }
            // })
        } 
        // else {
            // let newSet = depthFirstSearch(node, graph);
            // visitedSets.push(newSet);
        // }
    }

    return visitedSets.length;

}

function depthFirstSearch(node, graph, visited = new Set()) {

    if (!visited.has(node)) {
        visited.add(node);
        graph[node].forEach(node => {
            depthFirstSearch(node, graph, visited);
        })
    }

    return visited;

}

module.exports = {
    numRegions
};



let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};
// expect(numRegions(graph1)).to.equal(2);