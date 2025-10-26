import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/ui/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

const categories = [
  { src: "/assets/images/Web.png", name: "Web Development", description: "Build modern websites and applications." },
  { src: "/assets/images/Ai.png", name: "Artificial Intelligence", description: "Explore AI and machine learning." },
  { src: "/assets/images/Cyber.png", name: "Cybersecurity", description: "Secure systems and data." },
  { src: "/assets/images/DataScience.png", name: "Data Science", description: "Analyze and interpret data." },
  { src: "/assets/images/Flutter.png", name: "Flutter", description: "Create cross-platform apps." },
  { src: "/assets/images/Machine.png", name: "Machine Learning", description: "Dive into predictive models." },
  { src: "/assets/images/Testing.png", name: "Software Testing", description: "Ensure quality and reliability." },
];

export default function HomePage() {
// console.log(typeof window === "undefined" ? "Server" : "Client");

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-500">
      {/* -------- Header -------- */}
      <header className="relative h-[90vh] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/header.jpg')" }}>

        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-50" />
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-pulse opacity-60" />
        </div>
        
        <div className="relative cursor-pointer z-10 text-center text-white transform transition-all duration-700 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-300/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          
          <h1 className="font-serif text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#123b69] via-blue-800 to-blue-500 bg-clip-text text-transparent dark:from-yellow-600 dark:via-yellow-400 dark:to-yellow-100 drop-shadow-2xl relative">
            New to <br /> Reading
            {/* Animated underline */}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-300 dark:from-yellow-600 dark:to-yellow-300 group-hover:w-full transition-all duration-500" />
          </h1>
          
          <p className="mt-4 text-lg md:text-xl font-light opacity-80 animate-fade-in-up delay-200">Discover the magic of stories</p>
          
          <Button 
            variant="outline"
            className="cursor-pointer mt-8 px-8 py-3 text-lg bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white dark:border-yellow-500 dark:text-yellow-500 dark:hover:from-yellow-500 dark:hover:to-orange-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-amber-400/50 rounded-lg hover:rounded-full group-hover:animate-bounce">
            <span className="flex items-center gap-2">
              Start
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </Button>
        </div>

      </header>

      {/* -------- About Section -------- */}
      <section className="py-20 bg-white dark:bg-neutral-800 transition-all">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="w-full md:w-1/2">
            <Image
              src="/assets/images/Laptop.jpg"
              alt="Laptop"
              width={600}
              height={400}
              className="rounded-lg shadow-lg border-4 border-[#123b69] dark:border-yellow-500"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-4xl font-semibold font-[Charm] text-[#123b69] dark:text-yellow-500 mb-6">
              The Importance of Reading
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 font-serif">
              Reading is essential for personal and professional growth. It enhances your knowledge and helps you stay updated with technology trends.
            </p>
            <p className="text-gray-700 dark:text-gray-300 font-serif">
              Whether you're learning a new programming language or sharpening your current skills, our collection supports your journey toward mastering programming.
            </p>
          </div>
        </div>
      </section>

      {/* -------- Categories -------- */}
      <section className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-all">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-5xl font-[Edu_AU_VIC_WA_NT_Guides] mb-16 bg-gradient-to-r from-[#123b69] to-[#204f85] dark:from-yellow-400 dark:to-yellow-200 bg-clip-text text-transparent">
            Categories
          </h2>

          <div className="w-full">
            <Carousel opts={{align: "start",loop: true,}} className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {categories.map((category, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <div className="border-l-8 border-[#123b69] dark:border-yellow-600 h-72 group relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 rounded-xl shadow-md transition-all duration-300 hover:shadow-blue-400/40 dark:hover:shadow-yellow-500/20 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-neutral-700/10 dark:hover:to-neutral-600/10 cursor-pointer">
                      <Image src={category.src} alt={category.name} width={150} height={150} className="rounded-full mb-4 object-cover transition-transform duration-300 group-hover:scale-95" />
                      <h4 className="text-xl font-semibold text-[#123b69] dark:text-yellow-400 mb-2 transition-colors duration-300 group-hover:text-blue-800 dark:group-hover:text-yellow-200">
                        {category.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {category.description}
                      </p>
                      <Link href={"/book"}>  
                        <Button variant="ghost" className="cursor-pointer mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#123b69] dark:text-yellow-400 hover:text-blue-800 dark:hover:text-yellow-200">
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Controls */}
              <CarouselPrevious className="cursor-pointer text-[#123b69] dark:text-yellow-400" />
              <CarouselNext className="cursor-pointer text-[#123b69] dark:text-yellow-400" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* --------- Footer ---------- */}
      <Footer></Footer>
    </main>
  );
}
