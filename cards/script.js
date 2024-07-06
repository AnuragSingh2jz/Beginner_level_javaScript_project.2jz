/*code for how much views the video get let say
 the backend is providing the views in numeric form and you have to show in 
 the for of 10k  3M etc */
let views = 234546;
let value = (val) => {
    if (val <= 1000 && val <= 1000000) return `${parseInt(val)} views`
    else if (val >= 1000 && val <= 1000000) return `${parseInt(val / 1000)}k views`
    else if (val >= 1000 && val >= 1000000) return `${parseInt(val / 1000000)}M views`
}
// console.log(value(views))

let time = (d) => {
    if (d >= 7 && d <= 30 && d < 365) return `${parseInt(d / 7)} weeks ago`;
    else if (d >= 7 && d >= 30 && d <= 365) return `${parseInt(d / 30)} months ago`;
    else if (d >= 7 && d >= 30 && d >= 365) return `${parseInt(d / 365)} year ago`;
    else return `${d} days ago`
}
let createCard = (jasonstring) => {

    let {title, name, views, days, duration, img}=JSON.parse(jasonstring); //data is again converted into a object
    let x=document.createElement('div')
    x.classList.add('card');
    x.innerHTML=`<div class="container c1">
    <div class="img">
      <img
        class="i"
        src=${img}
        alt="img"
      />
      <div class="duration">${duration}</div>
    </div>
      <div class="information">
        <div class="title">${title}</div>
        <div class="info">
            <div class="name">${name}</div>
        <div class="views">${value(views)}</div>
        <div class="time">${time(days)}</div>
        </div>

      </div>
  </div>`
  document.body.appendChild(x);

}



let obj1={
    title:"The ULTIMATE VIPER Guide for VALORANT 2023!",
    name:"Rem",
    views: 1234450,
    days:125,
    duration:"3:24",
    img:'https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_103,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/red-bull-campus-clutch-new-zealand'
}
let obj2={
    title:"One of the best nothing phone is out near your nearest nothing store",
    name:"nothing",
    views: 100000000,
    days:245,
    duration:"11:24",
    img:'https://in.nothing.tech/cdn/shop/files/Phone-2-PDP-Header-Desktop.jpg?v=1688994743'
}
let obj3={
    title:"apple iphone 13 pro vs 13 pro max",
    name:"Apple",
    views: 12000,
    days:12,
    duration:"32:24",
    img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-model-unselect-gallery-1-202209_FMT_WHH?wid=640&hei=246&fmt=jpeg&qlt=95&.v=1660745142376'
}

createCard(JSON.stringify(obj1));//object is converted in string 
createCard(JSON.stringify(obj2));
createCard(JSON.stringify(obj1));
createCard(JSON.stringify(obj3));
createCard(JSON.stringify(obj2));
createCard(JSON.stringify(obj3));



