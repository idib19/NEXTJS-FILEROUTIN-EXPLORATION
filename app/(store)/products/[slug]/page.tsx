interface ProductDetailsProp {
    params: { slug: String }
}

export default function ProductDetails({ params }: ProductDetailsProp) {
    return (
        <main>
            <h1> {params.slug} </h1>
        </main>
    )
}

