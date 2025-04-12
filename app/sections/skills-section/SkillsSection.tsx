export default function SKillsSection(){
    return(
        <div id="skills&technologies" className="border-t-gray-500/15 border-t-1 bg-background-primary">

            <section className="container  max-w-4xl mx-auto py-20 ">
                <h2 className="font-bold text-2xl md:text-3xl text-center tracking-tight"> Skills & Technologies</h2>
                {/* structure cards */}
                <div className=" max-sm:px-5 max-lg:px-2 grid sm:grid-cols-2 gap-8 mt-10 ">

                    <div className="border border-background-gray p-6 rounded-md shadow-md hover:shadow-none transition-all">
                        <h3 className="mb-4 text-xl gap-2 font-semibold">Frontend</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Javascript
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                TypeScript
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                React
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Next.js
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Vue.js
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Tailwind CSS
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                HTML 5
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                CSS3
                            </li>
                        </ul>
                    </div>

                    <div className="border border-background-gray p-6 rounded-md shadow-md hover:shadow-none transition-all">
                        <h3 className="mb-4 text-xl gap-2 font-semibold">Backend</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Node.js
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Spring Framework
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Express.js
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Fastify
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Nest.js
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                MongoDB
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                PostgreSQL
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                REST APIs
                            </li>
                        </ul>
                    </div>

                    <div className="border border-background-gray p-6 rounded-md shadow-md hover:shadow-none transition-all">
                        <h3 className="mb-4 text-xl gap-2 font-semibold">Tools & Practices </h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Git/Github
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Docker
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Responsive Design
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                AWS
                            </li>
                        </ul>
                    </div>

                    <div className="border border-background-gray p-6 rounded-md shadow-md hover:shadow-none transition-all">
                        <h3 className="mb-4 text-xl gap-2 font-semibold">Soft Skills </h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Problem Solving
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Team Collaboration
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Good Communication
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="rounded-full h-1 w-1 bg-bg-primary"/>
                                Adaptability
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
