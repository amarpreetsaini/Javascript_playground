var friends = new Object();
friends.bill = {
    firstName : "Bill",
    lastName : "gates",
    number : "965-123-1222",
    address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
    firstName : "Steve",
    lastName : "Wolv",
    number : "965-234-3243",
    address: ['Apple corp','Redmond','WA','23434']
};

var list = function (friends){
    for (var friend in friends){
        console.log(friend);
    }
};
    
var search = function (name){
    for (var key in friends){
    if (friends[key].firstName === name ){
        console.log(friends[key]);
        return friends[key];
        }   
    }
}
