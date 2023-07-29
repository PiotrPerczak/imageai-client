import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link className="flex align-items items-center" to="/">
          <Icon className="w-28 h-12 object-contain" icon="tabler:photo-ai" />{" "}
          <h1 className="text-3xl max-[712px]:hidden font-bold">
            AImage Generator
          </h1>
        </Link>

        <Link to="/create-post" className="">
          <button
            type="button"
            className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
          >
            <Icon icon="ph:image-duotone" className="w-6 h-6 mr-1" />
            Add Image
          </button>
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
