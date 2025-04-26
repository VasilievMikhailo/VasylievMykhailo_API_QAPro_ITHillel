var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
    {
        userName: "Mykhailo",
        lastName: "Panin",
        email: "puninmykhailo@reddit.com"
    },
    {
        userName: "Kostya",
        lastName: "Portnov",
        email: "portnovkosty@gmeil.com"
    },
    {
        userName: "Mykhailo",
        lastName: "Vasyliev",
        email: "vesyliev.mykhailo@yahoo.ua"
    },
];

var validatedEmails = arr
    .map(obj => obj.email)
    .filter(email => /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/.test(email));

console.log(validatedEmails);