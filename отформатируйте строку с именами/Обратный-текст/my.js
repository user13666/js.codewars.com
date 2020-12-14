/* function list(names) {
    let str = '';
    if (names.length !== 0) {
        let last = names.pop();
        var arr_names = [];
        for (let i = 0; i < names.length; i++) {
            arr_names.push(names[i].name);
        }
        str = arr_names.join(", ");
        if (str !== '') {
            str += ' & ' + last.name;
        } else {
            str += last.name;
        }
    }
    return str;
}
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }]));
console.log(list([])); */






function list(names) {
    let str = '';
    if (names.length !== 0) {
        let last = names.pop();
        for (let i = 0; i < names.length; i++) {
            str += names[i].name + ", ";
        }
        if (str !== '') {
            str += ' & ' + last.name;
        } else {
            str += last.name;
        }
    }
    return str;
}
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
console.log(list([{ name: 'Bart' }]));
console.log(list([]));