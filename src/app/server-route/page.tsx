import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";

export default function ServerRoutePage(){
    const result = serverSideFunction();
   /*  return  */
     
    return (
      <>
        <h1>Server Route {result}</h1>
        <ImageSlider />
      </>
    );
}