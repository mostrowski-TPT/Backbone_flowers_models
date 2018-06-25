//model instances
var redRoses = new app.singleFlower({
  name: "Red Roses",
  price: 39.95,
  color: "Red",
  img: "images/redRoses.jpg",
  link: "redRose"
});

var rainbowRoses = new app.singleFlower({
  name: "Rainbow Roses",
  price: 29.95,
  color: "orange",
  link: "rainbowRose"
});

var heirloomRoses = new app.singleFlower({
  name: "Heirloom roses",
  price: 19.95,
  img: "images/heirloomRoses.jpg",
  link: "heirloomRose"
});

var TantalizingTulips = new app.singleFlower({
   name: "Tantalizing Tulips",
    price: 100,
    color: "yellow"
});

var Fleurdelis = new app.singleFlower({
   name: "Fleur-de-lis",
    price: 1,
    color: "green"
});


//collection instance remember to keep array brackets
var flowerGroup = new app.FlowersCollection([
   redRoses, rainbowRoses
]);

//add model instance to collection instance
flowerGroup.add(heirloomRoses);
//remove instance
flowerGroup.remove(redRoses);

console.log(flowerGroup.toJSON());

var EuropeanFlower = new app.EuroFlowersCollection([
   TantalizingTulips, Fleurdelis   
]);

TantalizingTulips.set('originCountry', "Holland");


console.log(EuropeanFlower);

