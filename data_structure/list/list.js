"use strict";
exports.__esModule = true;
/**
 * 列表节点
 */
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.data = null;
        this.next = null;
        this.data = data;
    }
    return ListNode;
}());
exports.ListNode = ListNode;
/**
 * 这是一个单向列表类，其中用记录数据位置的index为0开头的帧数
 */
var List = /** @class */ (function () {
    function List() {
        // 列表大小
        this.size = 0;
    }
    /**
     * 向列表中插入数据，默认插入到尾部
     * @param data 插入数据
     * @param index 插入位置
     */
    List.prototype.insert = function (data, index) {
        if (index === void 0) { index = this.size; }
        if (index < 0 || index > this.size) {
            console.error("超出列表范围");
        }
        var insertNode = new ListNode(data);
        if (this.size === 0) {
            // 插入第一个数据
            this.head = insertNode;
            this.last = insertNode;
        }
        else if (index === 0) {
            // 插入到头部
            insertNode.next = this.head;
            this.head = insertNode;
        }
        else if (index === this.size) {
            // 插入到尾部
            this.last.next = insertNode;
            this.last = insertNode;
        }
        else {
            // 插入到中间
            var prevNode = this.getNode(index - 1);
            var nextNode = prevNode.next;
            prevNode.next = insertNode;
            insertNode.next = nextNode;
        }
        this.size++;
    };
    /**
     * 移除并返回制定位置的数据
     * @param index 移除位置
     */
    List.prototype.remove = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        var removeNode = null;
        if (index === 0) {
            // 删除头部
            removeNode = this.head;
            this.head = this.head.next;
        }
        else if (index === this.size - 1) {
            console.log('remove 1');
            // 删除尾部
            var prevNode = this.getNode(index - 1);
            removeNode = prevNode.next;
            prevNode.next = null;
        }
        else {
            // 删除中间
            var prevNode = this.getNode(index - 1);
            console.log('remove 2');
            removeNode = prevNode.next;
            prevNode.next = removeNode.next;
        }
        this.size--;
        return removeNode;
    };
    List.prototype.output = function () {
        console.log('-------- output start ---------');
        var temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
        console.log('-------- output end ---------');
    };
    /**
     * 根据位置查找数据
     * @param index 需要查找到node到位置
     */
    List.prototype.getNode = function (index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        var count = 0;
        var node = this.head;
        while (count === index) {
            if (!node.next)
                return null;
            node = node.next;
            count++;
        }
        return node;
    };
    return List;
}());
exports.List = List;
