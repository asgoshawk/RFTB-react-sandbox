import useFetch from "../hooks/useFetch"

const CustomHookExample1 = () => {

    const { data, isLoading, error } = useFetch('https://jsonplaceholder.typicode.com/posts', {})

    if (isLoading) {
        return <h3>Loading...</h3>
    }

    if (error != null) {
        return (<>
            <h1>Oops! Something wrong...</h1>
            <h3>{error}</h3>
        </>)
    } else {
        return (<>
            {data.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h5>{post.userId}</h5>
                    <p>{post.body}</p>
                </div>
            ))}
        </>)
    }
}

export default CustomHookExample1