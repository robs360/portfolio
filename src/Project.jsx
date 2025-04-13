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
      .then(data => setInfo(data))
  }, [])

  console.log(info)

  return (
    <div className="mt-3 py-9 min-h-[100vh]">
      {
        info?.map(arr => {

          if (arr.id.toString() === projectId) {
            return (
              <div className="mt-4 text-white flex w-full md:w-[96%] mx-auto gap-6
                border-[3px] border-gray-400 p-4 rounded-md flex-col md:flex-row">
                <img src={arr.image} className="w-full h-[320px] md:w-[420px] md:h-[340px]" alt="" />
                <div>
                  <h1 className="text-2xl font-medium my-2">{arr.name}</h1>
                  <h1 className="text-[17px] font-sans"><span className="text-xl font-medium">Description: </span>{arr.description}</h1>
                  <div className="flex space-x-2 items-center mt-4">
                    <FaHandPointRight />
                    <a
                      className="font-medium text-[17px]"
                      href={arr.liveLink.startsWith('http') ? arr.liveLink : `https://${arr.liveLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Link
                    </a>
                  </div>
                  {arr?.repoLink && (
                    <div className="flex space-x-2 items-center mt-2">
                      <FaHandPointRight />
                      <a className="font-medium text-[17px]" href={`${arr.repoLink}`} target="_blank" rel="noopener noreferrer">Repository Link</a>
                    </div>
                  )}
                  {arr?.frontendrepo && (
                    <div className="flex space-x-2 items-center mt-2">
                      <FaHandPointRight />
                      <a className="font-medium text-[17px]" href={`${arr.frontendrepo}`} target="_blank" rel="noopener noreferrer">Front End Repository</a>
                    </div>
                  )}
                  {arr?.backendrepo && (
                    <div className="flex space-x-2 items-center mt-2">
                      <FaHandPointRight />
                      <a className="font-medium text-[17px]" href={`${arr.backendrepo}`} target="_blank" rel="noopener noreferrer">Back End Repository</a>
                    </div>
                  )}
                </div>
              </div>
            )
          }
          return null;
        })
      }
    </div>
  )
}

export default Project
