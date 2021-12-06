$(function () {
    
    var randomNames = [
        "Brandon Arena",
        "Beau Gardner",
        "Nathaniel Jakusz",
        "Brent Erola",
        "Jonathan Hale",
        "Keith Jackson",
        "Raymond Sanchez",
        "Kevin Cabrera",
        "David Allen",
        "Jimmy Reeves",
        "Sammy Amimo",
        "Domingo Sosa",
        "Nicolas Larson",
        "Joshua Kinsey",
        "Rahul Sundar",
      ];

      $('.generate_text').click(function(){
        var i = Math.floor(Math.random() * randomNames.length);
        var quote = $('#change_text');
        quote.html(randomNames[i]);

        let nameIndex = randomNames.indexOf(randomNames[i]);
        randomNames.splice(nameIndex, 1);
        if(randomNames.length == 0){
          randomNames =  [
            "Brandon Arena",
            "Beau Gardner",
            "Nathaniel Jakusz",
            "Brent Erola",
            "Jonathan Hale",
            "Keith Jackson",
            "Raymond Sanchez",
            "Kevin Cabrera",
            "David Allen",
            "Jimmy Reeves",
            "Sammy Amimo",
            "Domingo Sosa",
            "Nicolas Larson",
            "Joshua Kinsey",
            "Rahul Sundar"
          ];
        }
  });
});
