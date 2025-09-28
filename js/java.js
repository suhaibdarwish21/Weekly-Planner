let products = [
    {
        name:"Apple",
        image:"apple.png",
        description:"Need 1-kg apples for Juice",
        importance: 0, 
    },
    {
        name:"Banana",
        image:"bananas.png",
        description:"buy 3-kg bananas",
        importance: 0, 
    },
    {
        name:"Bread",
        image:"bread.png",
        description:"Whole grain bread",
        importance: 0, 
    },
    {
        name:"Cheese",
        image:"cheese.png",
        description:"500g Mozzarella cheese",
        importance: 0, 
    },
    {
        name:"Egg",
        image:"eggs.png",
        description:"10 eggs",
        importance: 0, 
    },
    {
        name:"Milk",
        image:"milk.png",
        description:"3 Liters of Milk",
        importance: 0, 
    },
    {
        name:"Oil",
        image:"oil.png",
        description:"olive oil",
        importance: 0, 
    },
    {
        name:"Orange",
        image:"orange.png",
        description:"1-kg oranges for Juice",
        importance: 0, 
    },
    {
        name:"Rice",
        image:"rice.png",
        description:"2-kg rice",
        importance: 0, 
    },
    {
        name:"Tomatoe",
        image:"tomatoes.png",
        description:"1-kg fresh Tomatoes",
        importance: 0, 
    },
    {
        name:"Tomato Sauce",
        image:"tomato-sauce.png",
        description:"1 can tomato sauce",
        importance: 0, 
    },
    {
        name:"Noodle",
        image:"noodle.png",
        description:"1 packs noodles",
        importance: 0, 
    },
]



function cards (){
     for(item of products){
    
    document.getElementById('result').innerHTML += `
    <div>
    <div class="card my-5">
  <img src="./images/${item.image}" class="card-img-top" alt="${item.name}">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text p-2"> <i class="fa-solid fa-triangle-exclamation"></i>
    Priority level: <span class=" p-2 rounded-3 likes"> ${item.importance}</span>
    </p>
    <a class="btn btn-outline-success likesBtn">Importance</a>
    <a class="btn btn-outline-danger m-2  reduceBtn">Reduce</a>
  </div>
</div>
    </div>
    `;
 }
}
cards();

// increase-bottom-start//
function priorityLevel(params) {
     let importanceBtn = document.querySelectorAll(".likesBtn")

 importanceBtn.forEach ((imbtn,index) => {
    imbtn.addEventListener("click",function (){
        if(products[index].importance < 5){
            products[index].importance++;

        document.querySelectorAll(".likes")[index].innerHTML=
        products[index].importance;
            changeColor(index)
        }
    });
    
 });
}
priorityLevel();
// increase-bottom-start//


// reduce-bottom-start//
function reduceLevel() {
     let reduceBtns = document.querySelectorAll(".reduceBtn")
 
 reduceBtns.forEach ((dBtn,index) => {
    dBtn.addEventListener("click",function (){
        if(products[index].importance >0 ){
            products[index].importance--;

        document.querySelectorAll(".likes")[index].innerHTML=
        products[index].importance;
            changeColor(index)
        }

        
    });
    
 });
}
reduceLevel();
// reduce-bottom-end//


// change-coloer-start//
function changeColor(index) {
    let span = document.querySelectorAll(".likes")[index];

    span.classList.remove ("bg-success","bg-warning","bg-danger");

    if(products[index].importance <=1){
        span.classList.add("bg-success")

    }else if (products[index].importance <=3){
        span.classList.add("bg-warning")

    } else {
        span.classList.add("bg-danger")
    }

}
// change-coloer-end//

// sort-botten-start//
let sortBtn = document.getElementById("sortBtn");
console.log(sortBtn);

sortBtn.addEventListener("click",function(){
    products.sort(function(a, b){
        return b.importance - a.importance;
    })

    document.getElementById("result").innerHTML ="";
    cards();
    priorityLevel();
    reduceLevel();
})

// sort-botten-end//
