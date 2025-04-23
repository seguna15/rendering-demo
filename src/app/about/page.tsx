import { cookies } from "next/headers"

/** dynamic rendering at request time is triggered automatically by cookies, headers, after etc. npm run build */
export default async function AboutPage(){
    const cookieStore = await cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);

    console.log("About server component...")
    return <h1>About Page {new Date().toLocaleTimeString()}</h1>
}