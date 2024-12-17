import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobDetailPage from "./Pages/JobDetailPage";
import jobLoader from "./shared/jobLoader";
import { Job } from "./shared/job.interface";
import JobFormPage from "./Pages/JobFormPage";

const App = () => {
  const addJob = async (newJob: Job) => {
    return await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  };

  const deleteJob = async (id: string) => {
    return await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
  };

  const updateJob = async (job: Job) => {
    return await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
  };

  const main = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobDetailPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<JobFormPage jobSubmit={addJob} />} />
        <Route
          path="/edit-job/:id"
          element={<JobFormPage jobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={main} />;
};

export default App;
