import * as _ from 'lodash';

console.log(_.chunk(2));
const NUM = 45;

interface Cat {
    name: string;
    sex: string;
}
function touchCat(cat: Cat) {
    console.log('miao~' + cat.name);
}
touchCat({
    name: 'tom',
    sex: '公'
});
