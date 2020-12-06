/**
 * 排序工具集
 */

export class Sort {
    /**
     * 【冒泡排序】
     * 遍历数组，依次比较相邻两个值
     * @param arr 需要排序的数组
     */
    public static bubbling(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    /**
     * 【冒泡排序2】
     * 当冒泡结束前，数组已经有序时，停止继续冒泡
     * @param arr 
     */
    public static bubbling2(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            let order = true;
            for (let j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    // 换位置了，说明依然无序
                    order = false;
                }
            }
            if (order) break;
        }
    }

    /**
     * 【冒泡排序3】
     * 1.当冒泡结束前，数组已经有序时，停止继续冒泡
     * 2.尾部提前得到更大有序区，那就提前缩短冒泡范围
     * @param arr 
     */
    public static bubbling3(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            let order = true;
            let sortBorder = arr.length - 1;
            for (let j = 0; j < sortBorder; j++) {
                if (arr[j] < arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    // 换位置了，说明依然无序
                    order = false;
                    // 记录最后依次换位的位置，就是后方有序区边界
                    sortBorder = j;
                }
            }
            if (order) break;
        }
    }

    /**
     * 【鸡尾酒排序】
     * 是【冒泡排序】的再次升级，上面的几种冒泡排序对尾部大面积有序区的情况进行了优化，但是对
     * 开头大面积有序区的情况没有优化，【鸡尾酒脉排序】就是以冒泡方式依次从头冒泡到尾，然后再从
     * 尾冒泡到头，如此往复。
     * @param arr 
     */
    public static cocktail(arr: number[]) {
        
    }

    /**
     * 【选择排序】
     * 遍历每个元素，使每个元素依次和后面所有元素比较交换
     * @param arr 需要排序的数组
     */
    public static selection(arr: number[]) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j =  i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }
    }
}