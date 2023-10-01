
interface ProjectPageProps {
    params: {
        name: String
    }
}

export default function Projectpage({ params } : ProjectPageProps) {
    return (
        <main>
            <h1> Projet : {params.name} </h1>
        </main>
    )
}