import Image from "next/image";

export default function Footer() {
    return ( 
        <footer className="py-10 bg-[#123b69] dark:bg-[#111215]  text-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-10  text-center md:text-left">
            {/* --- Logo Section --- */}
            <div>
                <div className="w-20 h-20 mx-auto md:mx-0">
                <Image
                    src="/assets/images/ITbook.png"
                    alt="logo"
                    width={60}
                    height={60}
                    className="w-full h-full rounded-full object-cover"
                />
                </div>
                <h2 className="text-3xl mt-4 font-semibold text-yellow-400 font-serif">
                    ITbook Store
                </h2>
            </div>

            {/* --- Support Section --- */}
            <div>
                <h4 className="text-2xl text-yellow-400 mb-8 font-semibold font-serif">
                Support
                </h4>
                <a
                href="https://ahmedhamed2002.github.io/P18_AiChatBot/"
                target="_blank"
                className="inline-flex items-center gap-2 text-lg text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    <i className="fa-brands fa-rocketchat text-3xl text-yellow-500"></i>
                    <span>AI Chat Bot</span>
                </a>
            </div>
            </div>

            {/* --- Bottom Line --- */}
            <div className="mt-10 border-t border-gray-400 pt-6 text-center text-gray-200 text-sm">
            © {new Date().getFullYear()} ITbook Store. All rights reserved.
            </div>
        </div>
        </footer>
    );
}
