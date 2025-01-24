export default async function MoviesDetail({ params } : { params: { id: string } }) {
    const { id } = await params;
    return <h1>Movie : {id}</h1>;
    }