function greet(name) {
    return 'Hello, ' + name + '!';
}

const names = [
    'Lynda', 'Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona', 'George', 'Hannah', 'Isaac',
    'Julia', 'Kevin', 'Laura', 'Mason', 'Nora', 'Olivia', 'Peter', 'Quinn', 'Rachel', 'Samuel',
    'Tara', 'Ulysses', 'Violet', 'Wyatt', 'Xena', 'Yusuf', 'Zoe', 'Aaron', 'Bella', 'Caleb'
];

names.forEach((name) => console.log(greet(name)));
