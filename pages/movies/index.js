import { getAllMovieIds, getMovieData } from '../../lib/movies';


//pass prop in pages
export default function MoviesIndexItem(){
    getMovieData()
  return(
      <>
          <div>
              moviesIndex
          </div>
      </>
  )
}

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }


