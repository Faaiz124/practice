
const options = {
    method: 'GET',
    headers: {
        'X-Api-Key': '+1o6H/ZiwA36q+7AZgAWIA==nmrPbZaOrorusuCT'
    }
};

const model = 'camry'; // Replace with the desired model

const apiUrl = 'https://api.api-ninjas.com/v1/cars?model=' + model;

fetch(apiUrl, options)
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            
        //   console.log(data[i])
          var dataI=data[i];
       
          const setData = document.getElementById("main");
          setData.innerHTML += `
              <div class="card set">
                  <h5 class="card-header">model : ${data[i].model}</h5>
                  <div class="card-body">
                      <h5 class="card-title">Company : ${data[i].make}</h5>
                      <h5 class="card-title">Id : ${i + 1}</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-primary" onclick="myFunction('${[i]}','${data[i].model}','${data[i].make}')">Go somewhere</a>
                  </div>
              </div>
          `;        
        }
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    });

    const Cart = document.getElementById("AddTocart");
    const ids = [];

    function myFunction(id,model,name) {
        if (!ids.includes(id)){

            ids.push(id);
            
        console.log(ids)
        Cart.innerHTML += `
        <div class="card set">
            <h5 class="card-header">model : ${model}</h5>
            <div class="card-body">
            <h5 class="card-title">Company : ${name}</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
        `;   
        console.log(id);
        console.log(model);
        console.log(name);
    }
    }
