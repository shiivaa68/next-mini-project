

// Optional catch all routes

export default function Article({params}) {

  console.log(params)

  return (
    <div>
      Optional catch all routes =>  {params?.slug?.join(' / ')}
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