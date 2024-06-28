// show real products
var products = [
    {
        name: "White Chair", 
        headline: "Made with Canadian Maple",
        price: "5000",
        image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoYWlyfGVufDB8fDB8fHww"
    },
    {
        name: "Small Stool", 
        headline: "With a nice texture",
        price: "1500",
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Orange Chair", 
        headline: "Plastic Chair",
        price: "4000",
        image: "https://images.unsplash.com/photo-1561677978-583a8c7a4b43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]
var popular = [
    {
        name:"Red Chair",
        headline: "Royal red color",
        price: "15,000",
        image: "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Authentic Chair",
        headline: "Gives the authentic feeling",
        price: "20,000",
        image: "https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name:"Relaing Chair",
        headline: "For Our Old Mates",
        price: "10,000",
        image: "https://images.unsplash.com/photo-1617364852223-75f57e78dc96?q=80&w=1566&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

function addProduct(){
    var clutter = "";
    products.forEach(function(product,index){
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                        <div class="image w-[14rem] h-[15rem] bg-zinc-200 rounded-xl overflow-hidden">
                            <img class="w-full h-full object-cover object-center" src="${product.image}" />
                        </div>
                            <div class="data w-full px-2 py-5">
                                <h1 class="font-semibold text-xl leading-none tracking-tight">
                                    ${product.name}
                                </h1>
                                <div class="flex justify-between w-full items-center mt-2">
                                    <div class="w-1/2">
                                        <h3 class="font-semibold opacity-20">${product.headline}.</h3>
                                        <h4 class="font-semibold mt-2">&#8377; ${product.price}</h4>
                                    </div>
                                    <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
                                        <i data-index="${index}" class="add ri-add-line"></i>
                                    </button>
                            </div>
                        </div>
                    </div>`
    })
document.querySelector(".products").innerHTML = clutter;
}

function addPopularProduct(){
    var clutter = "";
    popular.forEach(function(product){
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
                    </div>
                </div>`
    });
    document.querySelector(".populars").innerHTML = clutter;
}

var cart = [];
function addToCart(){
    document.querySelector(".products")
    .addEventListener("click",function(dets){
        if(dets.target.classList.contains('add')){
            cart.push(products[dets.target.dataset.index]);
            console.log(cart);
        }
    })
}

function showCart(){
    document.querySelector(".carticon")
    .addEventListener("click",function(){
        document.querySelector(".cartexpnd").style.display = "block";
        var clutter = "";
        cart.forEach(function(prod,index){
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                        <img class="w-full h-full object-cover" src="${prod.image}" alt="">
                    </div>
                    <div>
                        <h3 class="font-semibold">${prod.name}</h3>
                        <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
                    </div>
                </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    })
}

addProduct();
addPopularProduct();
addToCart();
showCart();