//data fetch api here with getSer

export async function getAllMovieIds() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    const res = await fetch('..');
    const posts = await res.json();
    return posts.map((post) => {
      return {
        params: {
          id: post.id,
        },
      };
    });
  }

  export async function getMovieData(){
    console.log("from movie data")
    console.log(process.env.REACT_APP_API_KEY)
    
  }