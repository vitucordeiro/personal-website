"use client"

import Link from "next/link";

const STYLE_EFFECTS_BUTTON = "font-bg-primary hover:text-bg-secondary-hover active:text-bg-primary-active transition-colors"
export default function NavigationSection(){
    
    return(
        <header className="sticky top-0 z-10 border-b  backdrop-blur-md">
            <div className="container mx-auto py-5 flex flex-col gap-y-4 md:flex-row justify-between items-center ">
                <div className="flex flex-col items-center">
                    <img className="min-md:hidden size-48 rounded-full ring-1 ring-bg-primary-active " src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <Link href={"#"} className={`text-4xl font-bold ${STYLE_EFFECTS_BUTTON}`}>
                        <span >Victor Cordeiro</span>
                    </Link>
                </div>
                <div className="hidden md:flex font-semibold  flex-row space-x-5 text-lg">
                    <Link href={"#about"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>About</span>  
                    </Link>
                    <Link href={"#projects"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Projects</span>
                    </Link>
                    <Link href={"#resume"} onClick={()=>{console.log("resume clicke")}}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Resume</span>
                    </Link>
                </div>
                <div>
                    <button className={`font-semibold px-22 border-2 border-bg-primary hover:border-bg-secondary-hover active:border-bg-primary-active md:px-4 py-1 ${STYLE_EFFECTS_BUTTON}`}>Let's talk!</button>
                </div>
            </div>
        </header>
    )
}