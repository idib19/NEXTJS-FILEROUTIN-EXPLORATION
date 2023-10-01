import Link from "next/link"

export default function Projectlist(){
    return(
        <main>
            <ul>
                
                <Link href="/projects/projet1">
                    <li>
                        PROJET 1
                    </li>
                </Link>

                <Link href="/projects/projet2">
                    <li>
                        PROJET 2
                    </li>
                </Link>
                <Link href="/projects/projet3">
                    <li>
                        PROJET 3
                    </li>
                </Link>
                
            </ul>
        </main>
    )
}