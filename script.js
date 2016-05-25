var user_choice = prompt("Please make a choice. Rock/Scissors/Paper");
var choice_array = ["Rock","Scissors","Paper"];
var random_choice = function (array){
    return array[Math.floor(array.length*Math.random())]
};
var computer_choice = random_choice(choice_array);

var compare = function (user_choice,compuer_choice){
console.log("User Choice"+" "+user_choice);
console.log("Computer Choice"+" "+computer_choice);
  
if (user_choice==="Rock")
{   if (computer_choice==="Scissors")
        {
        return "Rock destroys Scissors. User Wins";
        }
    if (computer_choice==="Paper")
        {
        return "Paper covers Rock. Computer Wins";
        }
}
if (user_choice==="Scissors")
{   if (computer_choice==="Paper")
        {
        return "Scissors cut Paper. User Wins";
        }
    if (computer_choice==="Rock")
        {
        return "Rock destorys Scissors. Computer Wins";
        }
}
if (user_choice==="Paper")
{   if (computer_choice==="Scissors")
        {
        return "Scissors cut Paper. Computer Wins";
        }
    if (computer_choice==="Rock")
        {
        return "Paper covers Rock. User Wins";
        }
}
if(user_choice===computer_choice)
{
return "Its a tie";    
}
};
compare(user_choice,computer_choice);
