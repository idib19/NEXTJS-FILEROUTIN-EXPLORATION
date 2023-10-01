interface OrderDetailsProps {
    params: { id: String }
}

export default function OrderDetailsPage({ params }: OrderDetailsProps) {
    return (
        <main>
            <h1> Order Details </h1>
            <p>
                This are the details for you order number:{params.id}
            </p>
        </main>
    );
}

"/search?q={searchQuery}"