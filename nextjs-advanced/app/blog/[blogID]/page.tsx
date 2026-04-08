import axios from "axios";

export default async function BlogPage ({params}:any) {
    try{
    const postID = (await params).blogID;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
    const data = response.data;
    
    return (
        <div>
            <h1>Blog Post</h1>
            <p>A.{data.title}</p>
            <p>B.{data.body}</p>
        </div>
    );
}catch(err){
    console.log(`Error fetching blog post: ${err}`);
    return <h1> Enter Blog Post b/w 1-100 </h1>
}
} 