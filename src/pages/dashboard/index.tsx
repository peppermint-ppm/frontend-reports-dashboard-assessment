import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashboardView = () => {

    const router= useRouter();
    useEffect(()=>{
      router.push("/dashboard/reports")
    },[])
    
    return ( <div className="">
        
    </div> );
}
 
export default DashboardView;