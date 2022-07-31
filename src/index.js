// You should implement your task here.
module.exports = function ttowelSort(matrix) {
    if (matrix === undefined || matrix.length == 0) return [];

    const newtArr = matrix.map((item, index) => {
        if (index % 2 !== 0) return item.reverse();
        return item;
    });

    return [].concat(...newtArr);
};
