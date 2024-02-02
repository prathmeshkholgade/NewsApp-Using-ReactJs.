let API_KEY = import.meta.env.VITE_API_KEY;

async function getData() {
  let apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apikey=${API_KEY}&pageSize=21`;
  let res = await fetch(apiUrl);
  let data = await res.json();
  let articles = data.articles;
 let result= articles.map((data) => {
   let result = {
      imgUrlNews: data.url,
      title: data.title,
      description:data.description,
      urlToImage:data.urlToImage

    };
  // console.log(result)
    return result
  });
  
  return result
}


  async function getSearchData(search){
    try{
      let url =`https://newsapi.org/v2/everything?q=${search}&apikey=${API_KEY}&pageSize=21`;
      let res = await fetch(url);
      let data =await res.json();
    
      let articles = data.articles;
      let result= articles.map((data) => {
        let result = {
           imgUrlNews: data.url,
           title: data.title,
           description:data.description,
           urlToImage:data.urlToImage
         };
         return result
       });
       return result
    }catch(err){
      console.log("no such data found")
    }
   

    }



export { getData,getSearchData };
