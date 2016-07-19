var products = [
  {
    name: "Reusable Bag",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$6.78",
    image: "images/reusableBag.jpg"
  },
  {
    name: "Tree-free Journal",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$11.76",
    image: "images/journal.jpg"
  },
  {
    name: "Eco-Friendly Soap",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$4.21/bar",
    image: "images/soap.jpg"
  },
  {
    name: "Eco-Friendly Detergent",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$5.88",
    image: "images/detergent.jpg"
  },
  {
    name: "Eco-Friendly Trash Bags",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$5.21/box",
    image: "images/trashBag.jpg"
  },
  {
    name: "LED Bulbs",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$3.22/bulb",
    image: "images/ledLight.jpg"
  },
  {
    name: "Solar Powered Phone Charger (rugged)",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$59.81",
    image: "images/solarCharger.jpg"
  },
  {
    name: "Compostable Cutlery",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$3.15/pack",
    image: "images/cutlery.jpg"
  },
  {
    name: "Compost Turner",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$91.50",
    image: "images/composter.jpg"
  },
  {
    name: "Bamboo Toothbrush",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$3.70",
    image: "images/toothbrush.jpg"
  },
  {
    name: "Stainless Steel Water Bottle",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$12.45",
    image: "images/waterBottle.jpg"
  },
  {
    name: "Reduce your Carbon Footprint Cookbook",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$29.99",
    image: "images/cookbook.jpg"
  },
  {
    name: "'Make your own Eco-friendly Products' Recipe Book",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$27.86",
    image: "images/alternatives.jpg"
  },
  {
    name: "Bamboo Skateboard",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$87.32",
    image: "images/bambooSkate.jpeg"
  },
  {
    name: "Organic Recycled Onesie",
    description: "Jean shorts portland letterpress, tousled roof party gluten-free single-origin coffee. Next level kinfolk mixtape put a bird on it salvia dreamcatcher. Literally meditation godard food truck, keffiyeh schlitz intelligentsia shoreditch tousled artisan. Heirloom 3 wolf moon bushwick literally kinfolk, tilde pork belly gastropub pop-up austin gluten-free. Deep v skateboard heirloom, fap yuccie wolf cronut listicle narwhal. Umami narwhal fixie knausgaard next level before they sold out vegan. Meh health goth humblebrag, cliche hoodie 90's listicle brooklyn trust fund.",
    price: "$23.00",
    image: "images/onesie.jpeg"
  }
]


// Function that creates an array of each field in the objects
function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

// Arrays that contain the names, images, descriptions, and prices for each product
var names = getFields(products,"name");
var descriptions = getFields(products, "description");
var prices = getFields(products, "price");
var images = getFields(products, "image");
var container = document.getElementById("productContainer");
var featuredContainer = document.getElementById("featuredProducts");



// Loop for Products Page
if (container) {
  for (i=0; i<names.length; i++) {
  container.innerHTML += "<div class='productCard'> <h2 class='productName'>" + names[i] + "</h2> <img src = '" + images[i]+ "'" + " class='productImage'> <p class='productDescription'>" + descriptions[i] + "</p> <p class='productPrice'> <strong> Price: </strong> " + prices[i] + "</p> </div>";
  }
}


//  Loop for featured products
if (featuredContainer) {
  for (i=0; i<3; i++) {
    // console.log(featuredContainer)
    featuredContainer.innerHTML += "<div class='productCard'> <h2 class='procustName'>" + names[i] + "</h2> <img src = '" + images[i]+ "'" + " class='productImage'> <p class='productDescription'>" + descriptions[i] + "</p> <p class='productPrice'>" + prices[i] + "</p> </div>";
  }
}
