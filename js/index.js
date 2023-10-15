const loadAllCatagory = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    console.log(data.data.slice(0,3));
    const sliceData = data.data.slice(0,3).forEach((category) => {
        const tabContainer = document.getElementById('tab-container')
        const div = document.createElement('div')
        div.innerHTML = `
        <a class="tab">${category.category}</a> 

        `
        tabContainer.appendChild(div);
    })
}


loadAllCatagory();