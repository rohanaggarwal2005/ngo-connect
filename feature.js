  let availableKeywords = [
      "<a href='./graphene.html'>GRAPHHENE FOUNDATION(NOIDA)</a>",
      "<a href='./ankindia.html'>ANK-INDIA(NOIDA)</a>",
      "<a href='./saksham.html'>SAKSHAM(NOIDA)</a>",
      "<a href='./goodworks.html'>GOODWORKS(NOIDA)</a>",
      "<a href='./sadrag.html'>SADRAG(NOIDA)</a>",
      "<a href='./chirag.html'>CHIRAG(BADARPUR)</a>",
      "<a href='./selfless.html'>SELFLESS-SERVICE SOCIETY(BADARPUR)</a>",
      "<a href='./helpinghands.html'>HELPING-HAND(BADARPUR)</a>",
      "<a href='./anon.html'>ANON-GLOBAL FOUNDATION(BADARPUR)</a>",
      "<a href='./longbreath.html'>LONG-BREATH FOUNDATION(BADARPUR)</a>",
      "<a href='./goonj.html'>GOONJ(GURUGRAM)</a>",
      "<a href='./nanhijaan.html'>NANHI-JAAN(NEW-DELHI)</a>",
      "<a href='./prabhat.html'>PRABHAT(NEW-DELHI)</a>",
      "<a href='./akshaya.html'>AKSHAYA-PATRA(NEW-DELHI)</a>",
      "<a href='./cry.html'>CRY(NEW-DELHI)</a>",
  ];

  const resultsBox = document.querySelector(".result-box");
  const inputBox = document.getElementById("input-box");

  inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result= availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
  }
  function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML="<ul" + content + "</ul>";
  }
  function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
  }
  

