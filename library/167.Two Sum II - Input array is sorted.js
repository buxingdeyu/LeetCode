const twoSum = function (numbers, target) {
    // 从有序数组中找到两个值，使两个值之和等于target
    /**
     * 查找表
     * @param numbers
     * @param target
     * @returns {[null,null]}
     */
//        let m = new Map(),
//            len = numbers.length;
//        for (let i = 0; i < len; i++) {
//            if (m.has(numbers[i])) {
//                return [m.get(numbers[i]) + 1, i + 1]
//            }
//            m.set((target - numbers[i]), i)
//        }
    /**
     * 对撞指针
     * @param numbers
     * @param target
     * @returns {[null,null]}
     */
    let i = 0,
        j = numbers.length - 1
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
        } else if (numbers[i] + numbers[j] > target) {
            j--
        } else {
            i++
        }
    }
};
console.log(twoSum([1, 2, 4, 5, 7, 12], 9))
