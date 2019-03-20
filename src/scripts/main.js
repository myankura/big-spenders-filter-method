// Use the filter method to get all the big spenders in the main array into a new one.


//target output element
const outEl = document.querySelector("#output")
outEl.innerHTML = "<h1>Spent over 9000</h1>"


// console.log(businesses)
// Array to contain all the big spenders
// Filter through the order key of each business and return only order(s) over 9000
const bigSpenders = businesses.filter(business => {
    return business.orders.find(order => order > 9000)
})
console.log(bigSpenders)

//for each order found over 9000, append the company name and full address.
bigSpenders.forEach(business => {
    outEl.innerHTML += `
     <h2>${business.companyName}</h2>
     <section>
       ${business.addressFullStreet}
     </section>
   `
   //Create a horizontal line after each result
    outEl.innerHTML += "<hr/>"
});