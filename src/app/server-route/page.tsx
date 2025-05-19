import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";
//import { clientSideFunction } from "@/utils/client-utils";

export default function ServerRoutePage(){
    const result = serverSideFunction();
   /*  return  */
     //const clientResult = clientSideFunction();
    return (
      <>
        <h1>Server Route {result}</h1>
        {/* <p>Server Route {clientResult}</p> */}
        <ImageSlider />
      </>
    );
}