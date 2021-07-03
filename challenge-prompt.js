var riceArrays = ["Grab dat fried rice", "Order something at banana bay.", "Spam, egg, and rice. If you're too lazy to cook, maybe be more adventurous with your choice!!","Your basic take-out Chinese food", "Pizza is not a bad idea", "Check that pasta!", "How about tuna sandwich?", "Handy dandy.. turkey sandwich!", "Meatball-parm sandwich, yumm", "Grilled cheese (with tomato soup, if you're feeling extra)", "How about Burgers?", "is hotdog a sandwich?? You can think about it while you eat it.", "corndogs, maybe grab 2 or 3?", "Chili cheese fries, extra fries, extra chili and cheese.", "looks like it's just gonna be fast-food today!"]
var somethingElseArrays= ["Dintai noodle, extra extra garlic and chili oil!", "Pho? If Crab may suggest, Süp!", "Hainan chicken rice, yes plz!", "Ritters, extra apple-butter!", "Savoy + Lemon Iced tea!", "Garden cafe has like 80 pages of menu. You'll find something!", "Any katsu, but YOKO tho!", "All you can eat sushi", "BCD tofu and galbi combo", "Sun Nong Dan", "Shabu with your homies", "Korean noodle, if this is confusing you, just eat any noodles!", "monja, if this is confusing you, just eat any noodles!", "Ra-men", "Izakaya anywhere!", "Tempura bowl, what about Japanese curry?!", "K B B Q must I?", "Cajun seafood, extra butter extra garlic", "Spicy chicken sandwich, Popeyes? ChickFilA?", "Dimsum if it's the right time!"]


var userName;

userName = prompt("What should The Crabs call you");


var intro =
alert("Welcome to The Crab Food Box, " + userName + "!!");
confirm("The Crabs wants to fetch some food for you! Are you ready, " + userName + "?");


var wantFood = 
confirm("Are you feeling super adventurous today?");

if (wantFood){
    var wantSomethingElse = 
    alert(somethingElseArrays[Math.floor(Math.random() * somethingElseArrays.length)]);
}
else
{
    alert(riceArrays[Math.floor(Math.random() * riceArrays.length)]);
}



