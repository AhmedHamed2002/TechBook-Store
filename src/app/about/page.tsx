import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

const info = [
    {
        icon: <i className="fas fa-user-tie text-yellow-600"></i>,
        name: "Ahmed Hamed",
        role: "Front-End Developer",
        email: "ah1973826450@gmail.com",
        linkedin: "https://www.linkedin.com/in/ahmed-hamed-591446359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        portfolio: "https://ahmedhamed.surge.sh/",
        github: "https://github.com/AhmedHamed2002",
    },
];

export default  function AboutPage() {
    return (
        <main className="pt-12 transition-colors dark:bg-zinc-900 dark:text-white bg-[#fdfbf7] text-zinc-800 ">
            {/* INTRO SECTION */}
            <section className="container mx-auto px-4 text-center md:text-left">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="flex justify-center">
                        <Image
                            src="/assets/images/dark-image.png"
                            alt="Reading illustration dark"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-lg transition-transform hover:scale-105 hidden dark:block"
                        />
                        <Image
                            src="/assets/images/light-image.png"
                            alt="Reading illustration light"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-lg transition-transform hover:scale-105 dark:hidden"
                        />
                    </div>
                    <div>
                        <h3 className="text-4xl font-[Edu_AU_VIC_WA_NT_Guides] mb-14 dark:text-yellow-400 text-[#174d8b] font-medium" >
                            The Importance of Reading
                        </h3>
                        <p className="leading-relaxed mb-4 text-muted-foreground">
                            Reading is essential for personal and professional growth. It not only enhances your knowledge but also helps
                            you stay updated with the latest trends in programming and technology.
                        </p>
                        <p className="leading-relaxed text-muted-foreground">
                            Whether you are learning a new language or improving existing skills, our collection supports your journey
                            toward becoming a proficient developer.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex justify-center items-center mt-10">
                    <hr className="flex-grow border-1 dark:border-yellow-600 border-[#12437c]"/>
                    <i className="fas fa-book text-3xl text-[#123b69] dark:text-yellow-500"></i>
                    <hr className="flex-grow border-1 dark:border-yellow-600 border-[#12437c]"/>
                </div>
            </section>

            {/* CREATIVE INFO SECTION */}
            <section className="container mx-auto grid md:grid-cols-3 gap-8 mt-12 px-4 mb-20">
                {[
                    {
                        icon: <i className="fas fa-book-open text-yellow-600"></i>,
                        title: "Welcome",
                        desc: "Our goal is to provide a comprehensive library containing books on various programming languages for all levels.",
                    },
                    {
                        icon: <i className="fas fa-bullseye text-yellow-600"></i>,
                        title: "Our Goal",
                        desc: "We support developers by offering high-quality books covering both basics and advanced techniques.",
                    },
                    {
                        icon: <i className="fas fa-cogs text-yellow-600"></i>,
                        title: "Technology Used",
                        desc: "We use modern technologies to ensure the best possible user experience.",
                    },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="relative cursor-pointer group p-6 rounded-xl shadow-xl transition-all duration-500 hover:scale-110  bg-gradient-to-br  dark:from-zinc-800 dark:to-zinc-900 dark:border dark:border-yellow-500/30 from-zinc-100 to-zinc-200 border border-blue-700/30 overflow-hidden">
                        {/* Creative Book Spine Effect */}
                        <div className="absolute top-0 left-0 w-2 h-full dark:bg-yellow-600 bg-[#123b69] rounded-l-xl"></div>
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="mb-4 p-3 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm shadow-lg group-hover:shadow-gold/50 transition-shadow">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-Playfair mb-3 text-gold group-hover:text-yellow-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                                {item.desc}
                            </p>
                        </div>
                        {/* Subtle Animation Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    </div>
                ))}
            </section>

            {/* DEVELOPER INFO SECTION */}
            <section className="container mx-auto px-4 mt-12 mb-12">
                <h2 className="text-center text-3xl font-Playfair font-bold mb-8 dark:text-yellow-400 text-[#123b69]">
                    Meet the Developer
                </h2>
                {info.map((person, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer group p-8 rounded-xl shadow-xl transition-all duration-500 hover:scale-105 bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 dark:border dark:border-yellow-500/30 from-zinc-100 to-zinc-200 border border-blue-700/30 overflow-hidden mx-auto">
                        {/* Creative Book Spine Effect */}
                        <div className="absolute top-0 left-0 w-2 h-full dark:bg-yellow-600 bg-[#123b69] rounded-l-xl"></div>
                        <div className="absolute top-0 right-0 w-2 h-full dark:bg-yellow-600 bg-[#123b69] rounded-r-xl"></div>
                        <div className="flex flex-col items-center text-center relative z-10">
                            <div className="mb-6 p-4 rounded-full bg-white/80  dark:bg-white/10 backdrop-blur-sm shadow-lg group-hover:shadow-yellow-500/50 transition-shadow">
                                {person.icon}
                            </div>
                                <h3 className="text-2xl font-semibold mb-2 text-gold group-hover:text-yellow-600 transition-colors">
                                {person.name}
                            </h3>
                            <p className="text-lg text-muted-foreground mb-6 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
                                {person.role}
                            </p>
                            <div className="space-y-4 w-full">
                                <div className="flex items-center justify-center space-x-2">
                                    <i className="fas fa-envelope text-yellow-600 text-xl me-3"></i>
                                    <a href={`mailto:${person.email}`} className="hover:underline transition-colors dark:text-yellow-400 dark:hover:text-yellow-300 text-[#123b69] hover:text-blue-600">
                                        {person.email}
                                    </a>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <i className="fab fa-linkedin text-yellow-600 text-xl me-3"></i>
                                    <Link href={person.linkedin} target="_blank" className="hover:underline transition-colors dark:text-yellow-400 dark:hover:text-yellow-300 text-[#123b69] hover:text-blue-600">
                                        LinkedIn Profile
                                    </Link>
                                </div>
                                    <div className="flex items-center justify-center space-x-2">
                                    <i className="fas fa-folder-open text-yellow-600 text-xl  me-3 "></i>
                                    <Link href={person.portfolio} target="_blank" className="hover:underline transition-colors dark:text-yellow-400 dark:hover:text-yellow-300 text-[#123b69] hover:text-blue-600">
                                        Portfolio
                                    </Link>
                                </div>
                                <div className="flex items-center justify-center space-x-2">
                                    <i className="fab fa-github text-yellow-600 text-xl"></i>
                                    <Link href={person.github} target="_blank" className="hover:underline transition-colors dark:text-yellow-400 dark:hover:text-yellow-300 text-[#123b69] hover:text-blue-600">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* FOOTER */}
            <Footer />
        </main>
    );
}
