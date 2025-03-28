export default function AboutSection(){
    return(
        <div className="border-t bg-background-gray">
            <section className="container mx-auto space-y-4 py-20  flex flex-col justify-center items-center ">
                <h1 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">About me</h1>
                <div className="max-md:mx-4 text-justify mx-auto max-w-3xl space-y-6 ">
                    <p>
                        Hello! I'm Software Developer with hands-on experience in building applications. Through academic and personal projects, 
                        I have developed solid software development skills, focusing on full-stack development and back-end engineering.
                    </p>
                    <p>
                        I have practical experience working with Spring Framework, Java, Nest.js, TypeScript, MongoDB, PostgreSQL, React, and Git.
                        My expertise includes API development, system architecture, and back-end optimization. Currently, 
                        I’m deepening my knowledge in Algorithms and Data Structures to enhance problem-solving and code optimization skills.
                    </p>
                    <p>
                        I want to thrive in collaborative and challenging environments that foster continuous learning and professional growth. 
                        Passionate about building efficient and scalable systems, I aim to contribute to innovative projects that make a real impact.
                    </p>
                </div>
            </section>
        </div>
    )
}