

  let blogObj=[
     {"ID":"31001","title":"firstinject","content":"1233","time":"2017-08-11 "},
     {"ID":"31002","title":"firstinject","content":"1234","time":"2017-08-11 "},
     {"ID":"31003","title":"firstinject","content":"1235","time":"2017-08-11 "},
     {"ID":"31004","title":"firstinject","content":"1236","time":"2017-08-11 "},
     {"ID":"31005","title":"firstinject","content":"1237","time":"2017-08-09 "},
     {"ID":"31006","title":"firstinject","content":"1238","time":"2017-08-12 "},
     {"ID":"31007","title":"firstinject","content":"1235","time":"2017-11-17 "}
  ];

function myaddEvent(element,event,listener){
   element["on"+event]=listener;
}


//alert(Date());

 let ArticleOP={
      content:[],
      addArticle:function (){
        let blogContent=document.getElementsByClassName('blog-content');
        for(i in this.content){
           blogContent[0].innerHTML+=this.content[i];
         }     
         this.addClick();
        },
      addClick:function(){
        let blogItem=document.getElementsByClassName("blog-item");
        for(i in blogItem){
          myaddEvent(blogItem[i],"click",function(){
            window.open("../src/blog.html",true)
          });
        }
      },
      textClear:function (){
        for(let i in blogObj){
        this.content[i]=`
        <div class="blog-item" > 
        <div class="blog-item-content">
        
         <h2>${blogObj[i].title}</h2>
         
         <article class="article-content">
         ${blogObj[i].content}
         </article>
             
         <div class="control">
          <span>${blogObj[i].time}</span>
          <input class="c-buttn blog-buttn" type="button">
         </div>
         
         <div class="item-light">
               <span>Yes</span>
               <span>/</span>
               <span>No</span>
          </div>

        </div>
        </div>
        `;     
   }
   this.addArticle();
  }
}

function scrollTop(){
    let upButton=document.getElementsByClassName("up-button");
    myaddEvent(upButton[0],"click",function(){
        window.scrollTo(0,0);
    });   
}


window.onload=function(){
  ArticleOP.textClear();
  scrollTop();
  clock();
}





   /*

 let jsonData=JSON.parse(blogObj);
         console.log(jsonData.content[1]);*/