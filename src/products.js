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


var container = document.getElementById("productContainer");
var featuredContainer = document.getElementById("featuredProducts");



//Loop for Products Page
if (container) {
  for (i=0; i<products.length; i++) {
   container.innerHTML += `<div class="productCard">
      <h2 class="productName"> ${products[i].name} </h2>
      <img src = ${products[i].image} class='productImage'>
      <p class='productDescription'> ${products[i].description} </p>
      <p class='productPrice'> <strong> Price: </strong>  ${products[i].price} </p>
    </div>`
  }


  var imageArray = document.getElementsByClassName("productImage");
  for (i=0; i<imageArray.length; i++) {
      imageArray[i].addEventListener('click', function(event){
        console.log(event)
        var parentDiv = event.target.parentElement;
        var image = event.target;
        var nextElement = event.target.nextElementSibling;
        var prevElement = event.target.previousElementSibling;
        parentDiv.classList.toggle('fullDiv');
        parentDiv.classList.toggle('productCard');
        image.classList.toggle("clickImage");
        image.classList.toggle("productImage");
        prevElement.classList.toggle('hidden');
        prevElement.classList.toggle('productName');
        nextElement.classList.toggle('hidden');
        nextElement.classList.toggle('productDescription');
    });
  }
}

//  Loop for featured products
if (featuredContainer) {
  for (i=0; i<3; i++) {
    // console.log(featuredContainer)
    featuredContainer.innerHTML +=
      `<div class='productCard'>
        <h2 class='productName'> ${products[i].name} </h2>
        <img src = ${products[i].image} class='productImage'>
        <p class='productDescription'> ${products[i].description} </p>
        <p class='productPrice'> ${products[i].price} </p>
        </div>`;
  }
}

<<<<<<< HEAD

// SPA Modifications //

console.log('Welcome to our website fellow developer!')

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

showPage(location.hash)

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', clickedNavLink);
}

function clickedNavLink (evt) {
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add('hidden')
  }

  showPage(evt.target.hash)
}

function showPage (id) {
  if (id) {
    document.querySelector(id).classList.remove('hidden')
  } else {
    document.querySelector('#home').classList.remove('hidden')
  }
}
=======
>>>>>>> af0149a3dc1bd93dec03cac201207e180b3da13e
