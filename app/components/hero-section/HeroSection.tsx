import Image from "next/image"

export default function HeroSection(){
    return(
        <div className="border-b ">
            <section className="container  mx-auto md:grid md:grid-cols-2 gap-4 md:justify-items-center my-22 flex flex-col items-center" >
                <div className="flex flex-col max-md:items-center min-md:gap-y-2 max-md:space-y-2">
                    <h1 className="md:text-7xl text-4xl font-bold from-neutral-900">
                        Software Engineer
                    </h1>
                    <span className="max-md:mx-2 max-md:text-center text-bg-primary-active md:text-2xl text-lg ">I build accessible, user-friendly web applications with modern technologies.</span>
                    <div className="space-x-2 max-md:flex max-md:flex-col max-md:space-y-2 ">
                        <button className="max-md:w-80 cursor-pointer w-fit rounded-lg font-medium bg-bg-primary text-white px-4 py-1.5 hover:bg-bg-primary-active active:bg-bg-primary-hover transition-colors"> View my work</button>
                        <button className="max-md:w-80 cursor-pointer border w-fit rounded-lg font-medium  text-black px-4 py-1.5 hover:bg-bg-secondary-hover transition-colors"> Contact me</button>
                    </div>
                        

                </div>
                <div className="hidden md:block">                    
                <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt=""
                    width={400}
                    height={400}
                    className="object-cover ring-1 rounded-full"
                    priority
                    />            
                </div>
            </section>

        </div>
    )
}