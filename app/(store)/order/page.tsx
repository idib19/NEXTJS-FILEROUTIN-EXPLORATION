import Link from "next/link";

export default function OrderPage() {
    return (
        <main>
            <h1>
                TRACK YOUR ORDERS
                <ul>
                    <Link href="/order/1">
                        <li>
                            Order 1
                        </li>
                    </Link>

                    <Link href="/order/2">
                        <li>
                            Order 2
                        </li>
                    </Link>
                
                </ul>
            </h1>
        </main>
    );
}