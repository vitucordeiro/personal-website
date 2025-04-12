"use client"

import Link from "next/link";
import { Menu, X } from 'lucide-react'
import { useState } from "react";

const STYLE_EFFECTS_BUTTON = "font-bg-primary hover:text-bg-secondary-hover active:text-bg-primary-active transition-colors"

export default function NavigationSection(){
    const [isOpen, setIsOpen] = useState<boolean>(false);



    async function getResume() {
        try{
            return "opa"
        }
        catch(e){
            throw new Error("Error: /api/hello - " + e);
        }
    }


    return(
        <header className="sticky top-0 z-10 border-b-gray-500/15 border-b-2 bg-white/80 backdrop-blur-sm ">
            <div className="container mx-auto py-3 md:flex  md:flex-row max-2xl:px-2 max-w-7xl md:justify-between items-center ">
                <div className="relative max-md:flex max-md:flex-row items-center justify-center">
                    <Link href={"#"} className={`text-3xl font-bold ${STYLE_EFFECTS_BUTTON}`}>
                        <span className="">Victor Cordeiro</span>
                    </Link>

                    {/* Botão do menu (mobile) */}
                    <button
                        className="cursor-pointer absolute right-4 min-md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="w-8 h-5" />
                        ) : (
                            <Menu className="w-8 h-8" />
                        )}
                    </button>
                    { /* Menu (mobile) */}
                    {isOpen && (
                        <div className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-sm shadow-md z-20">
                            <ul className="flex flex-col items-center space-y-4 py-4">
                                <li>
                                    <Link href="#about" className="text-lg font-medium text-gray-700 hover:text-bg-secondary-hover">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#skills&technologies" className="text-lg font-medium text-gray-700 hover:text-bg-secondary-hover">
                                        Skills & Technologies
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#projects" className="text-lg font-medium text-gray-700 hover:text-bg-secondary-hover">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#resume" className="text-lg font-medium text-gray-700 hover:text-bg-secondary-hover">
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="text-lg font-medium text-gray-700 hover:text-bg-secondary-hover">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}



                </div>
                <div className="hidden md:flex font-medium flex-row space-x-5 text-sm">
                    <Link href={"#about"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>About</span>
                    </Link>
                    <Link href={"#skills&technologies"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Skills & Technologies</span>
                    </Link>
                    <Link href={"#projects"}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Projects</span>
                    </Link>
                    <Link href={"#resume"} onClick={()=>{getResume()}}>
                        <span className={`${STYLE_EFFECTS_BUTTON}`}>Resume</span>
                    </Link>
                </div>
                <div>
                    <Link
                        href={"#contact"}
                        className={`max-md:hidden font-semibold px-18 border-1 rounded-md border-bg-primary  active:border-bg-primary-active md:px-4 py-1 ${STYLE_EFFECTS_BUTTON}`}
                        >Get in touch
                    </Link>

                </div>
            </div>
        </header>
    )
}
