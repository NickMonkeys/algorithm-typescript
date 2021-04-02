"use strict";
/**
 * 排序工具集
 */
exports.__esModule = true;
var Sort = /** @class */ (function () {
    function Sort() {
    }
    /**
     * 【冒泡排序】
     * 遍历数组，依次比较相邻两个值
     * @param arr 需要排序的数组
     */
    Sort.bubbling = function (arr) {
        var _a;
        for (var i = 0; i < arr.length; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                }
            }
        }
    };
    /**
     * 【冒泡排序2】
     * 当冒泡结束前，数组已经有序时，停止继续冒泡
     * @param arr
     */
    Sort.bubbling2 = function (arr) {
        var _a;
        for (var i = 0; i < arr.length; i++) {
            var order = true;
            for (var j = 0; j < arr.length - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    // 换位置了，说明依然无序
                    order = false;
                }
            }
            if (order)
                break;
        }
    };
    /**
     * 【冒泡排序3】
     * 1.当冒泡结束前，数组已经有序时，停止继续冒泡
     * 2.尾部提前得到更大有序区，那就提前缩短冒泡范围
     * @param arr
     */
    Sort.bubbling3 = function (arr) {
        var _a;
        for (var i = 0; i < arr.length; i++) {
            var order = true;
            var sortBorder = arr.length - 1;
            for (var j = 0; j < sortBorder; j++) {
                if (arr[j] < arr[j + 1]) {
                    _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
                    // 换位置了，说明依然无序
                    order = false;
                    // 记录最后依次换位的位置，就是后方有序区边界
                    sortBorder = j;
                }
            }
            if (order)
                break;
        }
    };
    /**
     * 【鸡尾酒排序】
     * 是【冒泡排序】的再次升级，上面的几种冒泡排序对尾部大面积有序区的情况进行了优化，但是对
     * 开头大面积有序区的情况没有优化，【鸡尾酒脉排序】就是以冒泡方式依次从头冒泡到尾，然后再从
     * 尾冒泡到头，如此往复。
     * @param arr
     */
    Sort.cocktail = function (arr) {
    };
    /**
     * 【选择排序】
     * 遍历每个元素，使每个元素依次和后面所有元素比较交换
     * @param arr 需要排序的数组
     */
    Sort.selection = function (arr) {
        var _a;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
                }
            }
        }
    };
    /**
     * 【快速排序】
     * @param arr
     * @param start
     * @param end
     * @returns
     */
    Sort.quick = function (arr, start, end) {
        var _a, _b;
        if (start === void 0) { start = 0; }
        if (end === void 0) { end = arr.length - 1; }
        // start = start || 0;
        // end = end !== undefined ? end : arr.length - 1;
        if (start >= end) {
            return;
        }
        var pivotValue = arr[end];
        var pivotIndex = start;
        for (var i = start; i < end; i++) {
            if (arr[i] < pivotValue) {
                _a = [arr[pivotIndex], arr[i]], arr[i] = _a[0], arr[pivotIndex] = _a[1];
                pivotIndex++;
            }
        }
        if (pivotIndex !== end) {
            _b = [arr[end], arr[pivotIndex]], arr[pivotIndex] = _b[0], arr[end] = _b[1];
        }
        console.log(arr);
        console.log(start, pivotIndex, end);
        console.log('----');
        if (start < pivotIndex) {
            this.quick(arr, start, pivotIndex - 1);
        }
        if (pivotIndex < end) {
            this.quick(arr, pivotIndex, end);
        }
    };
    return Sort;
}());
exports.Sort = Sort;
