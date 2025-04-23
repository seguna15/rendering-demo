import Link from "next/link";

/** generate static params */
export default function ProductsPage (){
    return(
        <>
            <h1>Featured Products</h1>
            <Link href="/products/1">Product 1</Link>
            <Link href="/products/2">Product 2</Link>
            <Link href="/products/3">Product 3</Link>
            <Link href="/products/4">Product 4</Link>
        </>
    )
}