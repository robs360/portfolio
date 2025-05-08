import { useEffect, useState } from "react"
import { FaHandPointRight } from "react-icons/fa"
import { useParams } from "react-router-dom"

const Project = () => {
  const [info, setInfo] = useState([])
  const { id: projectId } = useParams()
  console.log(projectId)

  useEffect(() => {
    fetch('/Blog.json')
      .then(res => res.json())
      .then(data => {
        const foundItem = data.find((item) => item.id === projectId);
        console.log(foundItem)
        if (foundItem) {
          setInfo(foundItem);
        }
      });
  }, [projectId]);

  console.log(info, typeof (info))

  return (
    <div className="mt-10 p-8 md:p-10 w-[96%] md:w-[90%] mx-auto rounded-3xl
     bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-gray-800 shadow-[0_8px_30px_rgb(0,0,0,0.5)] 
    flex flex-col justify-center items-center lg:justify-start lg:flex-row lg:items-start gap-8 transition-all duration-500">
      <img
        src={info.image}
        alt="Project Preview"
        className="w-full md:w-[400px] rounded-2xl h-[240px] shadow-xl hover:scale-105 transition-transform duration-300"
      />

      <div className="flex-1 flex flex-col text-gray-300">
        <h1 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
          {info.name}
        </h1>

        <p className="text-gray-400 mb-6 leading-relaxed text-[16px]">
          {info.description}
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          {info.liveLink && (
            <a
              href={info.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 flex justify-center w-full lg:w-auto hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              <span>🌐 Live Preview</span>
            </a>
          )}

          {info.frontendrepo && (
            <a
              href={info.frontendrepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 flex justify-center w-full lg:w-auto hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
             <span>💻 Front-End Code</span>
            </a>
          )}

          {info.backendrepo && (
            <a
              href={info.backendrepo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-600 flex justify-center w-full lg:w-auto hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
            >
              <span>🛠️ Back-End Code</span>
            </a>
          )}

          {info.repoLink && (
            <a
              href={info.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 flex justify-center hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 w-fit"
            >
              <span>📦 Full Repository</span>
            </a>
          )}
        </div>

      </div>
    </div>


  )
}

export default Project
