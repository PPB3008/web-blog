
let photoInfo=[
  {"src":"../src/img/IMG_0582.JPG","title":"222","link":"../src/blog.html"},
  {"src":"../src/img/48039800_p0.png","title":"222","link":"../src/blog.html"},
  {"src":"../src/img/45754521.jpg","title":"222","link":"../src/blog.html"},
  {"src":"../src/img/48657428_p0.jpg","title":"222","link":"../src/blog.html"}
];

function clock2(time){
  this.time=time;
   let i=0;
  let photoMy=document.querySelector(".photo-my"); 
  let addQuery=()=>{
    
  }
   photoMy.innerHTML= `
   <a href="${photoInfo[i].link}" class="photo-roll"></a>`;
   document.querySelector(".photo-roll").setAttribute("style",`animation:animation1 ${this.time}s 1 0s;background-image:url(${photoInfo[i].src});`);
   i++;
    window.setInterval(()=>{
      photoMy.innerHTML= `
      <a href="${photoInfo[i].link}" class="photo-roll"></a>`;
      document.querySelector(".photo-roll").setAttribute("style",`animation:animation1 ${this.time}s 1 0s;background-image:url(${photoInfo[i].src});`);
      i++;
      if(i==photoInfo.length-1){
          i=0;
      }
    },this.time*1000);
}

/*
export function argument(time){
  this.time=time;
  clock2();
}*/