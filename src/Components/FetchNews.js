import React,{useState} from 'react'
import axios from 'axios'
function FetchNews() {
  const [news,setNews] = useState([]);
    const fetchNews = ()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=1b1e541a06074b7aa85af1a0d6508bc1").then(function(response){
        console.log(response);
        setNews(response.data.articles);
        console.log(setNews);
        })
    }

  return (
    <div>
        <div className='container my-3'>
            <div className='row'>
                <div className='col-4'>
                  <button className='btn btn-primary' onClick={fetchNews}>FetchApi</button>
                </div>
           </div>
           <div className='container'>
              <div className='row'>
                {
                  news.map((value)=>{
                    return (
                        <div className='col-4'>
                        <div className="card" style= {{width: "18rem"}}>
                            <img src={value.urlToImage} className="card-img-top" alt="..." />
                             <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                 <p className="card-text">{value.description}</p>
                                 <a href="#" className="btn btn-primary">Main</a>
                            </div>
                           </div>
                        </div>
                    );
                  })

                    
                }
              </div>
           </div>
        </div>
    </div>
  )
}

export default FetchNews