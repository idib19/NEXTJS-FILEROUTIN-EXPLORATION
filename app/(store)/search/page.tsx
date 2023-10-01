"use client"

import { useSearchParams } from "next/navigation";

export default function SearchPage() {

    const q = useSearchParams();

    return (
        <main>
            <div>
                {q ?
                    <>
                        <p>Voici le resultat pour:</p>
                        <h1>{q}</h1>
                    </>
                    :
                    <h1> Aucun resultat </h1>}
            </div>
        </main>
    );
}


