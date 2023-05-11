//data fetch api here with getSer




  export default async function handler(req, res){
    const baseUrl = process.env.REACT_APP_API_BASE
    const title = JSON.parse(req.body).title
    const query = `?s=${title.toLowerCase().split(" ").join("%20")}&r=json`
    const url = `${baseUrl}${query}`
    console.log(url)
    const options = {
      method: "GET",
      headers: {
        "content-type": 'application/octet-stream',
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST
      }
    }

    const reqData = await fetch(url, options) //initial fetch to get IMDB ids for possible results

    if(reqData.status == 200){
              const data = await reqData.json()
              return requestIMDB(res, data)
      }else{
        return res.status(200).json([])
      }

  }

  async function requestIMDB(responseObject, moviesJSONData){
    const baseUrl = process.env.REACT_APP_API_BASE
    const movieURLs = moviesJSONData.Search.map(movie => `${baseUrl}?r=json&i=${movie.imdbID}`)
    const options = {
      method: "GET",
      headers: {
        "content-type": 'application/octet-stream',
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST
      }
    }
    
    const movieDetails = await Promise.all(await movieURLs.map(async url => {
      const req = await fetch(url, options)
      const data = await req.json()

      return data
    }));


    return responseObject.status(200).json(movieDetails)
  }
  