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
     * 遍历每个元素，使每个元素依次和后面所有元素比较
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
     * 【选择排序】
     * 遍历每个元素，使每个元素依次和后面所有元素比较
     * @param arr 需要排序的数组
     */
    Sort.prototype.select = function (arr) {
        var _a;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
                }
            }
        }
    };
    return Sort;
}());
exports.Sort = Sort;
