import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RouteLayout from "./layouts/RouteLayout";
import RecipeList from "./pages/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import PostCreate from "./pages/PostCreate";
import PostEdit from "./pages/PostEdit";

import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<RecipeList />} />
      <Route path="recipes/sample" element={<RecipeDetails />} />
      <Route path="recipes/post-new" element={<PostCreate />} />
      <Route path="recipes/post-edit/sample" element={<PostEdit />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
