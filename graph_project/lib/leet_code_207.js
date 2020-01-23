// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
    if (numCourses === 0 || prerequisites.length === 0) return true;
    let adjacencyList = {};

    for (let i = 0; i < prerequisites.length; i++) {
        let key = prerequisites[i][0];
        let val = prerequisites[i][1];

        if (!adjacencyList[key]) {
            adjacencyList[key] = [val];
        } else {
            adjacencyList[key].push(val);
        }

        if (!adjacencyList[val]) {
            adjacencyList[val] = [];
        }

    }

    let coursesCanTake = new Set();

    for (let key in adjacencyList) {
        depthFirstRecur(key, adjacencyList);
    }

    function depthFirstRecur(node, graph, alreadyTried = new Set()) {
        if (coursesCanTake.has(node)) return;

        let canTake = graph[node].every(course => {
            coursesCanTake.has(course);
        })

        if (graph[node].length !== 0 || canTake) {
            coursesCanTake.add(node);
        } else {
            graph[node].forEach(neighbor => {
                depthFirstRecur(neighbor, graph, coursesCanTake);
            })
        }
    }

    if (numCourses <= coursesCanTake.size) {
        return true;
    } else {
        return false;
    }

}


// let adjacencyList = {
//     '0': ['1'],
//     '1': ['2', '3'],
//     '2': [],
//     '3': ['2'],
//     '4': ['3']
// }

// let adjacencyList = {
//     '0': ['1'],
//     '1': ['0']
// }






