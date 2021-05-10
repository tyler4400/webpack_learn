export default () => console.log('这是一个箭头函数!!!');

export class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
