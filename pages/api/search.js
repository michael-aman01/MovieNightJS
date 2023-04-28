//data fetch api here with getSer




  export default async function handler(req, res){
    const baseUrl = process.env.REACT_APP_API_BASE
    const title = JSON.parse(req.body).title
    const query = `s=${title.toLowerCase().split(" ").join("%20")}&r=json`
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

    const reqData = await fetch(url, options)
    if(reqData.status == 200){
      try{
        const data = await reqData.json()
        console.log(data)
        return res.status(200).json({test: "food"})
      }catch(error){
        console.log(error.response)
      }

    }
    
  }