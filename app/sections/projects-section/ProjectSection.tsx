
import Image from "next/image";
import Link from "next/link";
import {  ExternalLink, Code } from 'lucide-react'

export default function ProjectSection(){
    return(
        <div id="projects" className="bg-background-secondary border-t-gray-500/15 border-t-1">
            <section className="container max-w-7xl mx-auto py-20">
                <h2 className="text-4xl font-bold text-center"> Projects </h2>

                <div className="transition-all duration-500 ease-in-out flex flex-col gap-8 items-center justify-center lg:grid lg:grid-cols-3 mt-10 pl-4 pr-4 ">


                    <div className="group border border-gray-500/15 shadow-md hover:shadow-sm transition-shadow rounded-lg">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg opacity-85 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/"
                                    alt=""
                                    width={450}
                                    height={450}
                                    className="object-cover "
                                    priority
                                    quality={100}
                                />
                            </div>
                            <div className="flex flex-col p-4  rounded-b-lg">
                                <h3 className="font-bold text-2xl">Project name</h3>
                                <span className="font-thin text-sm text-gray-700">Description about project</span>
                            </div>
                            <div className="flex pl-4 pb-4 gap-2 items-center justify-start text-sm font-light ">
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">React</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">NestJs</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">API OpenAI</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">Tailwind</span>
                                </Link>
                            </div>

                            <div className="flex pl-4 pb-4 gap-2">
                                <Link href={'#'} className="border border-gray-500/15 rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-200/50 transition-colors">
                                    <Code className="h-4 w-4"/>
                                    <span className="text-xs font-light">
                                        Code
                                    </span>
                                </Link>

                                <Link href={'#'} className="bg-black text-white rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-800 transition-colors">
                                    <ExternalLink className="h-3 w-3"/>
                                    <span className="text-xs font-light">
                                        Demo
                                    </span>
                                </Link>
                            </div>
                    </div>
                    <div className="group border border-gray-500/15 shadow-md hover:shadow-sm transition-shadow rounded-lg">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg opacity-85 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/"
                                    alt=""
                                    width={450}
                                    height={450}
                                    className="object-cover "
                                    priority
                                    quality={100}
                                />
                            </div>
                            <div className="flex flex-col p-4  rounded-b-lg">
                                <h3 className="font-bold text-2xl">Project name</h3>
                                <span className="font-thin text-sm text-gray-700">Description about project</span>
                            </div>
                            <div className="flex pl-4 pb-4 gap-2 items-center justify-start text-sm font-light ">
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">React</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">NestJs</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">API OpenAI</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">Tailwind</span>
                                </Link>
                            </div>

                            <div className="flex pl-4 pb-4 gap-2">
                                <Link href={'#'} className="border border-gray-500/15 rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-200/50 transition-colors">
                                    <Code className="h-4 w-4"/>
                                    <span className="text-xs font-light">
                                        Code
                                    </span>
                                </Link>

                                <Link href={'#'} className="bg-black text-white rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-800 transition-colors">
                                    <ExternalLink className="h-3 w-3"/>
                                    <span className="text-xs font-light">
                                        Demo
                                    </span>
                                </Link>
                            </div>
                    </div>
                    <div className="group border border-gray-500/15 shadow-md hover:shadow-sm transition-shadow rounded-lg">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg opacity-85 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/"
                                    alt=""
                                    width={450}
                                    height={450}
                                    className="object-cover "
                                    priority
                                    quality={100}
                                />
                            </div>
                            <div className="flex flex-col p-4  rounded-b-lg">
                                <h3 className="font-bold text-2xl">Project name</h3>
                                <span className="font-thin text-sm text-gray-700">Description about project</span>
                            </div>
                            <div className="flex pl-4 pb-4 gap-2 items-center justify-start text-sm font-light ">
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">React</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">NestJs</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">API OpenAI</span>
                                </Link>
                                <Link href={"https://react.dev/"}>
                                    <span className="rounded-xl bg-gray-200 text-black p-1 pl-2 pr-2 cursor-pointer text-xs">Tailwind</span>
                                </Link>
                            </div>

                            <div className="flex pl-4 pb-4 gap-2">
                                <Link href={'#'} className="border border-gray-500/15 rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-200/50 transition-colors">
                                    <Code className="h-4 w-4"/>
                                    <span className="text-xs font-light">
                                        Code
                                    </span>
                                </Link>

                                <Link href={'#'} className="bg-black text-white rounded-sm pl-3 pr-3 p-1 flex items-center gap-1  hover:bg-gray-800 transition-colors">
                                    <ExternalLink className="h-3 w-3"/>
                                    <span className="text-xs font-light">
                                        Demo
                                    </span>
                                </Link>
                            </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
