const handleCatagory = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    // console.log(data.data.slice(0,3));
    const sliceData = data.data.slice(0,3).forEach((category) => {
        const tabContainer = document.getElementById('tab-container')
        const div = document.createElement('div')
        div.innerHTML = `
        <a onclick="loadCategory('${category.category_id}')" class="tab">${category.category}</a> 

        `
        tabContainer.appendChild(div);
    })
}


const loadCategory = async(categoryId) => {
   
   const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
   const data = await res.json();
  //  console.log(data.data);
   const cardContainer = document.getElementById("card-container");
  // separate the contents
   cardContainer.innerHTML = "";
   data.data?.forEach((news) => {
    console.log(news);
    const div = document.createElement("div");
    div.innerHTML= `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src=${news?.thumbnail}
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
      ${news?.title}
      </h2>
      <div class="card-footer flex justify-between mt-8">
        <div class="flex">
          <div>
            <div class="avatar online">
              <div class="w-14 rounded-full">
                <img
                src=${news?.authors[0].profile_picture}
                />
              </div>
            </div>
          </div>
          <div>
            <div class="flex gap-6" ><h6>${news.authors[0].profile_name}</h6>
            <div class="badge badge-secondary p-3">${news.authors[0].verified ? news.authors[0].verified : "not verified" }</div></div>
            <small>2022-08-24 17:27:34</small>
            <h3> total views: ${
              news.others.views ? news.others.views : "no views"
            }
         </h3>
          </div>
        </div>
        
      </div>
    </div>
    `
    cardContainer.appendChild(div); 
   })
   
    
}

handleCatagory();

