

// Catch all routes

export default function Article({params}) {

    console.log(params)
  
    return (
      <div>
        Catch all routes =>  {params.slug.join(' / ')}
      </div>
    )
  
  }
  
  export async function getServerSideProps({params}) {
  
    console.log(params)
  
    return {
      props: {
        params
      }
    }
  }