let photoInfo=[
    {"src":"../src/img/48657428_p0.jpg","title":"222"},
    {"src":"../src/img/48039800_p0.png","title":"222"},
    {"src":"../src/img/45754521.jpg","title":"222"},
    {"src":"../src/img/48039800_p0.png","title":"222"}
];





function clock(){
    let photoRoll=document.getElementsByClassName("photo-roll");
    let src;
    let title;
    for(let i in photoInfo){
        i=i++
        this.src=photoInfo[i].src;
        this.title=photoInfo[i].title;
        window.setTimeout(function(){
            photoRoll[0].style.backgroundImage=`url("${this.src}")`;
        },5000);
    }
}