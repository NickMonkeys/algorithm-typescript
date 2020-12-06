/**
 * 单向列表测试
 */

import { List } from "./list";

const list = new List();
list.insert(2);
list.insert(1, 0);
list.insert(3);
list.insert(3);

list.output();
const remove = list.remove(2);
console.log('remove:',remove);
list.output();