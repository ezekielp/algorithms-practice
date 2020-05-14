const countSubstrings = s => {
    const substrings = new Set();

    for (let i = 0; i < s.length; i++) {
        const indices1 = `${i}#${i + 1}`;
        substrings.add(indices1);

        if (s[i] === s[i + 1]) {
            const indices2 = `${i}#${i + 2}`;
            substrings.add(indices2);
        };
    };
    
    console.log(substrings);
    const moreSubstrings = new Set();

    substrings.forEach(ss => {
        const splitSS = ss.split("#"); // [1, 2] => [0, 3]
        let m = parseInt(splitSS[0]) - 1;
        let n = parseInt(splitSS[1]) + 1;
        while (s[m] && s[n - 1] && s[m] === s[n - 1]) {
            console.log("hello");
            const moreIndices = `${m}#${n}`;
            moreSubstrings.add(moreIndices);
            m--;
            n++;
        }
    });
    console.log(moreSubstrings);

    return substrings.size + moreSubstrings.size;
}

countSubstrings("aaa");

