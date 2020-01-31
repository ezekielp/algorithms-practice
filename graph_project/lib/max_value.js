// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }

function maxValue(node, visited=new Set()) {
    let largestVal = node.val;

    function depthFirstSearch(node, visited) {
        if (node.val > largestVal) {
            largestVal = node.val;
        }

        if (!visited.has(node.val)) {
            visited.add(node.val);
            node.neighbors.forEach(neighbor => {
                depthFirstSearch(neighbor, visited);
            })
        }
    }

    visited.add(node.val);

    node.neighbors.forEach(neighbor => {
        depthFirstSearch(neighbor, visited);
    })

    return largestVal;

}


module.exports = {
    maxValue
};