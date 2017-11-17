

  let blogObj=[
     {"ID":"31001","title":"firstinject","content":"1233","time":"2017-08-11 16:16"},
     {"ID":"31002","title":"firstinject","content":"1234","time":"2017-08-11 16:16"},
     {"ID":"31003","title":"firstinject","content":"1235","time":"2017-08-11 16:16"},
     {"ID":"31004","title":"firstinject","content":"1236","time":"2017-08-11 16:16"},
     {"ID":"31005","title":"firstinject","content":"1237","time":"2017-08-11 16:16"},
     {"ID":"31006","title":"firstinject","content":"1238","time":"2017-08-11 16:16"},
     {"ID":"31007","title":"firstinject","content":"1239","time":"2017-11-17 04:51"}
  ];




//alert(Date());

 let ArticleOP={
      content:[],
      addArticle:function (){
        let blogContent=document.getElementsByClassName('blog-content');
        for(i in this.content){
           blogContent[0].innerHTML+=this.content[i];
         }     
        },
      textClear:function (){
        for(let i in blogObj){
        this.content[i]=`
        <div class="blog-item"> 
        <div class="blog-item-content">
        
        <div class="control">
          <span>${blogObj[i].ID}</span>
          <input type="button">
         </div>
        
         <h2>${blogObj[i].title}</h2>
         <div>${blogObj[i].content}</div>
            
         <div class="item-light">
           <div class="item-user"></div>    //点赞用户
           <div>
               <span>Yes</span>
               <span>/</span>
               <span>No</span>
           </div>
        </div>
        
        </div>
        </div>
        `;     
   }
  }
}





window.onload=function(){
  ArticleOP.textClear();
  ArticleOP.addArticle();
}





   /*

 let jsonData=JSON.parse(blogObj);
         console.log(jsonData.content[1]);*/