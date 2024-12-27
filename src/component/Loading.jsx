import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"


function SkeletonCard(){
return(
            <div>

            <Skeleton className="w-full h-64  rounded-full" />
            {/* <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div> */}
            </div>

)
}
function Loading() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 mt-5 ">
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
            <SkeletonCard/>
        </div>
    )
}

export default Loading