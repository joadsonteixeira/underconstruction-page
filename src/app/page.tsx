import TypingAnimation from "@/components/TypingAnimation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center lg:justify-between relative p-2 lg:p-24">
      <div className="z-20  w-full items-center justify-between font-mono text-sm lg:flex right-0">
        <p className="fixed left-0 top-0 flex w-full text-2xl justify-center from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:text-3xl lg:static lg:w-auto  lg:p-4 text-logo">
          &lt;/&gt; Joadson Teixeira
        </p>
        <div className="fixed hidden bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none text-white">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>
      </div>

      <div className="flex mb-64 justify-center h-full lg:justify-end">
        <div className="flex h-64 w-4/5 lg:h-96 lg:w-2/5">
          <div className="flex flex-col items-center z-10 w-full">
            <div className="console-container h-full w-full">
              <div className="console-top-bar justify-between relative p-1">
                <div className="flex justify-end">
                  <div className="console-top-btn ml-1"></div>
                  <div className="console-top-btn ml-1"></div>
                  <div className="console-top-btn ml-1"></div>
                </div>
              </div>
              <TypingAnimation
                textContent={
                  ">Este site está em desenvolvimento.\n>Novidades em breve :)\n>"
                }
              />
            </div>

            <div className="relative flex flex-row mt-3 items-center">
              <div className="social-container flex">
                <a
                  href="https://www.linkedin.com/in/joadsonteixeira/"
                  target="_blank"
                >
                  <div className="social-btn-icon w-8 h-auto shadow-md rounded shadow-neutral-900">
                    <img src="linkedin-logo.png" alt="Linkedin" />
                  </div>
                </a>
                <a href="https://instagram.com/joadsoncastro/" target="_blank">
                  <div className="social-btn-icon w-8 h-auto ml-3 shadow-md rounded-md shadow-neutral-900">
                    <img src="instagram-logo.png" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-image absolute lg:w-1/2 bottom-0 left-0 lg:pl-24">
        <img src="programmer.png" alt="" />
      </div>
    </main>
  );
}
