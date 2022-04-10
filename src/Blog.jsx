import React, {useState, useEffect} from 'react'
import Blogcard from './Blogcard';
function Blog() {
    const [mediumData, setMediumData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      fetch(
        `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@emilyhigginson`
      )
        .then(res => res.json())
        .then(response => {
          setMediumData(response.items);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);

    const finalData = mediumData.slice(0, 6);
console.log(finalData) 
   const posts =  finalData.map((post) => <Blogcard title ={post.title} image={post.thumbnail} description={post.description} link={post.link} />)

  return (
    <div id="blog">
       <div> Checkout my Blog where I write about beginner coding tutorials, my journey into the tech industry & health and wellness pieces. </div>
        {posts}
    </div>
  )
}

export default Blog