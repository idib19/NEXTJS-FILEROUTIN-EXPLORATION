import Link from "next/link"

export default function ProductsPage() {
    return (
        <main>
            <h1> Here is the list of our products</h1>
            <ul>
            <Link href="/products/product1">
                    <li>
                        Product 1
                    </li>
                </Link>

                <Link href="/products/product2">
                    <li>
                        Product 2
                    </li>
                </Link>
                <Link href="/products/product3">
                    <li>
                        Product 3
                    </li>
                </Link>
            </ul>
        </main>
    )
}

