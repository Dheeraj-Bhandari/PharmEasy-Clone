
var ProductDetail = JSON.parse(localStorage.getItem("ProductDetail")) || [];
display();
// Appending product From ls to page
function display(){
    var img = document.getElementById("largeProdImg");
    img.innerHTML = "";
    var largeimg = document.createElement("img");
    // largeimg.setAttribute("src", ProductDetail(0));
    largeimg.setAttribute("src", JSON.parse(localStorage.getItem("ProductImg")));
    img.append(largeimg);
    document.getElementById("smallProdImage").setAttribute("src", JSON.parse(localStorage.getItem("ProductImg")))
    document.getElementById("prodname").innerText =
     JSON.parse(localStorage.getItem("ProductName"));
     var prodprice = document.getElementById("Prodprice");
     
     price = JSON.parse(localStorage.getItem("ProductPrice"));
     prodprice.innerText = "₹ "+price;

    var prodMrp = document.createElement("span");
    var Mrp = JSON.parse(localStorage.getItem("ProductMRP"));
    prodMrp.innerText =" MRP "+Mrp;
    prodMrp.setAttribute("id","mrp");
    prodprice.append(prodMrp);

    var prodOff = document.createElement("span");
    var Off = JSON.parse(localStorage.getItem("ProductOff"));
    prodOff.setAttribute("id","off");
    prodOff.innerText=" "+Off+" OFF";
    prodprice.append(prodOff);

    //appeding Delivery date day Month
    let date = new Date()
    let day = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    const d = new Date();
    // document.write("The current month is " + monthNames[d.getMonth()]);
    let month = date.getMonth();
    document.getElementById("deliveryDate").innerText="Delivery by "+
    parseInt(day+3)+" - "+parseInt(day+6)+" "+monthNames[month];
}
//Deal of the day
var DealsOftheDayOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/I40513/softovac-sf-constipation-powder-bottle-of-250-g-2-1654166050.jpg?dim=1280x0",
    name: "Softovac Sf Constipation Powder",
    mrp: "849.00",
    price: "619.77",
    off: "27%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/270551/revital-h-men-multivitamin-with-zinc-ginseng-for-immunity-strong-bones-energy-10-capsules-1-1654078581.jpg?dim=1280x0",
    name: "Revital H Men Multivitamin With Zinc",
    mrp: "599.00",
    price: "269.55",
    off: "55%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=1280x0",
    name: "Pharmeasy Multivitamin Multimineral - Immunit",
    mrp: "54.90",
    price: "52.16",
    off: "34%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/D47230/everyuth-naturals-body-lotion-sun-care-berries-100ml-2-1641795165.jpg?dim=1280x0",
    name: "Everyuth Naturals Body Lotion Sun Care Berries",
    mrp: "975.00",
    price: "750.00",
    off: "22%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/071710/evion-400mg-strip-of-10-capsules-2-1656662057.jpg?dim=1280x0",
    name: "Evion 400mg Strip Of 10 Capsules",
    mrp: "399.00",
    price: "199.50",
    off: "50%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/F38564/livogen-adult-tonic-200ml-2-1656661939.jpg?dim=1280x0",
    name: "Livogen Adult Tonic 200ml",
    mrp: "110.00",
    price: "93.50",
    off: "15%",
},
]

DealsOftheDayOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "DealsofTheDayImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "DealsofTheDayProdName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "DealsofTheDayMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "DealsofTheDayPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("DealsofTheDay").append(div);

    img.addEventListener("click", function(){
        FetchDealOftheDay(index);
        
    });

})


// In the Spot Light
var InTheSpotLightOBJ = [{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1654234653.jpg?dim=256x0",

    name: "Everherb Karela Jamun Juice - Helps",
    mrp: "399.00",
    price: "207.48",
    off: "48%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=256x0",
    name: "Liveasy Wellness Calcium, Magnesium,",
    mrp: "599.00",
    price: "329.45",
    off: "45%"
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=256x0",
    name: "Pharmeasy All-in -one Vaporizer",
    mrp: "599.00",
    price: "269.15",
    off: "55%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-blue-2-1656420198.jpg?dim=256x0",
    name: "Pharmeasy Hot Water Bag - Relieves Pain -",
    mrp: "349.00",
    price: "244.30",
    off: "30%",
},

{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-2-1656417512.jpg?dim=256x0",
    name: "Pharmeasy Calcium, Magnesium, Vitamin",
    mrp: "499.00",
    price: "299.40",
    off: "40%",
},
{
    img_url: "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1658316798.jpg?dim=256x0",
    name: "Pharmeasy Multivitamin",
    mrp: "699.00",
    price: "419.40",
    off: "40%",
},
]

InTheSpotLightOBJ.map(function (ele,index) {
    var div = document.createElement("div");
    var div2 = document.createElement("div");
    div2.setAttribute("id", "InTheSpotLightImg");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    div2.append(img);

    var p = document.createElement("p");
    p.setAttribute("id", "InTheSpotLightProName");
    p.innerText = ele.name;

    var p2 = document.createElement("p");
    p2.setAttribute("id", "InTheSpotLightMRP");
    p2.innerText = "MRP ";
    var span = document.createElement("span");

    span.innerText = "₹ " + ele.mrp;
    p2.append(span);

    var p3 = document.createElement("p");
    p3.setAttribute("id", "InTheSpotLightPrice");

    p3.innerText = "₹ " + ele.price;
    var span2 = document.createElement("span");
    span2.innerText = ele.off + " OFF";
    p3.append(span2)

    div.append(div2, p, p2, p3);
    document.getElementById("InTheSpotLight").append(div);

    img.addEventListener("click", function(){
        FecthSpotLightProduct(index);
        
    });

})


// Haalth Articles
var HealthArticlesOBJ = [
    {
        img_url: "https://blog-images.pharmeasy.in/2021/03/25132209/shutterstock_1256347666-1.jpg?dim=1440x0",
        name: "Home Remedies For Nausea By Dr. Rajeev Singh",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2018/05/25135059/PE_Blog35.png?dim=1440x0",
        name: "Best Home Remedies For Hypertension By Dr. Rajeev Singh",
    },

    {
        img_url: "https://blog-images.pharmeasy.in/2022/08/02193521/Shutterstock-Images-07.jpg?dim=1440x0",

        name: "Red Chilli: Uses, Benefits, Side Effects By Dr. Smita Barode",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2022/09/02193717/Blog-Images-2-Sep.jpg?dim=1440x0",
        name: "Eating Healthy During The Festive Season",
    },
    {
        img_url: "https://blog-images.pharmeasy.in/2022/08/02191258/Shutterstock-Images-20.jpg?dim=1440x0",
        name: "Tomato Juice: Uses, Benefits, Side Effects By Dr. Smita Barode",
    },

]

HealthArticlesOBJ.map(function (ele) {
    var div = document.createElement("div");
    div.setAttribute("id", "HealthArticlesDiv");
    var img = document.createElement("img");
    img.setAttribute("src", ele.img_url);
    var p = document.createElement("p");
    p.innerText = ele.name;
    div.append(img, p);
    document.getElementById("HealthArticles").append(div);
})

//  Storing Product in Local Storage to append it in product page


function FetchDealOftheDay(i){
    event.preventDefault();
    var arr = DealsOftheDayOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        display();
    })
   
   window.location.href="Product.html"; 
}

function FecthSpotLightProduct(i){
    event.preventDefault();
    var arr = InTheSpotLightOBJ.filter(function(ele,index){
        if(index===i){
            localStorage.setItem("ProductImg",JSON.stringify(ele.img_url));
            localStorage.setItem("ProductName",JSON.stringify(ele.name));
            localStorage.setItem("ProductPrice",ele.price);
            localStorage.setItem("ProductMRP",ele.mrp);
            localStorage.setItem("ProductOff",JSON.stringify(ele.off));
        }
        display();
    })
   
   window.location.href="Product.html"; 
}
 

