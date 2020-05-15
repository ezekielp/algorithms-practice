/**
 * @param {string} s
 * @return {string[][]}
 */

// I'M THINKING A RECURSIVE SOLUTION WOULD PROBABLY BE EASIER TO IMPLEMENT

var partition = function(s) {
    const onePalins = [];
    const twoPalins = [];
    const partitions = [[]];

    for (let i = 0; i < s.length; i++) {
        onePalins.push(`${i}#${i+1}`);
        partitions[0].push(`${i}#${i+1}`);
        
        if (s[i] === s[i + 1]) {
            twoPalins.push(`${i}#${i+2}`);
        }
    }
    
    for (let j = 0; j < onePalins.length; j++) {
        let indices = onePalins[j].split('#');
        let m = indices[0] - 1;
        let n = indices[1] + 1;
        
        while (s[m] && s[m] === s[n]) {

            for (let k = 0; k < partitions.length; k++) {
                const newPartitions = [];

                const rightPartitions = partition(s.slice(0, m));
                const leftPartitions = partition(s.slice(n + 1));

                rightPartitions.forEach(part1 => {
                    leftPartitions.forEach(part2 => {
                        newPartitions.push(part1.concat([s.slice(m, n)]).concat(part2));
                    });
                });

                
                // for (let p = 0; p < partitions[k].length; p++) {
                //     const split = partitions[k][p].split('#');
                //     if (split[1] <= m || split[0] >= n) {
                //         newPartition.push(partitions[k][p]);
                        
                //     }
                //     // Have to figure out how to get the new palin 
                //     // in the right place
                    
                    
                // }
                
                
            }
            
        }
        
    }
    
    
    
};



// ["a", "b", "b", "a", "c", "c", "d"]
// ["a", "bb", "a", "c", "c", "d"]
// ["a", "b", "b", "a", "cc", "d"]
// ["a", "bb", "a", "cc", "d"]
// ["abba", "c", "c", "d"]
// ["abba", "cc", "d"]
// ["a", "b", "bac, "c", "d"]
// ["a", "bbacc", "d"]

