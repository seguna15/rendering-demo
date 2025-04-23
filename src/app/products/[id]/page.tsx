export const dynamicParams = false;
/**generateStatic params runs at build time and its useful for features products, popular blog posts etc */
export async function generateStaticParams(){
    return [
        {id: '1'},
        {id: '2'},
        {id: '3'},
    ]
}


export default async function ProductPage({params}: {params: Promise<{id: string}>}){
    const {id} = await params;

    return (
        <h1>Product {id} details rendered at {new Date().toString()}</h1>
    )
}