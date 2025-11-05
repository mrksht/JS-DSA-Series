export default function mostCommonElements(numbers, k) {
    const map = numbers.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const mapArr = Object.entries(map).map(([key, value]) => {
        return {
            [key]: value,
        };
    });

    mapArr.sort((a, b) => {
        const valA = Object.values(a)[0];
        const valB = Object.values(b)[0];
        return valB - valA;
    });

    const ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(Number(Object.keys(mapArr[i])[0]));
    }

    return ans;
}
