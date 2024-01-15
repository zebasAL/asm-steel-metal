import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useDebounce } from "~/hooks/useDebounce"
import { apiRoutes } from "~/utils/api"

export default function Files() {

  return (
    <section>

      <UploadFile />

      <SearchField />

    </section>
  )
}


const SearchField = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const value = useDebounce(inputValue, 500)

  useEffect(() => {
    apiRoutes.files.getAll()
      .then((res) => {
        console.log("res", res.data)
      })
      .catch((err) => {
        console.log("err", err)
      })
  }, [value])

  return (
    <div>
      <label htmlFor="search-file" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="search-file"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </div>
  )
}


// --------------------------------------------------------------------------------------------

const UploadFile = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files && fileInput.files[0];

    if (file) {
      setSelectedFile(
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (selectedFile instanceof Blob) {
      const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
          const arrayBuffer = fileReader.result as ArrayBuffer;
          const nodeBuffer = Buffer.from(arrayBuffer);
          resolve(nodeBuffer);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
        fileReader.readAsArrayBuffer(selectedFile);
      })
      apiRoutes.files.create(Buffer.from(buffer))
        .then((res) => {
          console.log("res", res.data)
        })
        .catch((err) => {
          console.log("err", err)
        })
    }
  }

  return (
    <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="new-file">
        Upload file
      </label>
      <input
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help"
        id="new-file"
        type="file"
      />
      <div className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>

      <button
        type="submit"
        className="text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Subir
      </button>
    </form>
  )
}