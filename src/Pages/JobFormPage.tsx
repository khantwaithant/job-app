import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Job, JobSubmitHandler } from "../shared/job.interface";
import { nanoid } from "nanoid";

const JobFormPage = ({ jobSubmit }: { jobSubmit: JobSubmitHandler }) => {
  const navigate = useNavigate();
  const [formTitle, setFormTitle] = useState("Add Job");
  const [id, setId] = useState('');
  const job: Job = useLoaderData();

  const [formState, setFormState] = useState({
    title: "",
    type: "Full-Time",
    location: "",
    description: "",
    salary: "Under $50K",
    companyName: "",
    companyDescription: "",
    contactEmail: "",
    contactPhone: "",
  });

  useEffect(() => {
    if (job) {
      setFormTitle("Update Job");
      setId(job.id);
      setFormState({
        title: job.title,
        type: job.type,
        location: job.location,
        description: job.description,
        salary: job.salary,
        companyName: job.company.name,
        companyDescription: job.company.description,
        contactEmail: job.company.contactEmail,
        contactPhone: job.company.contactPhone,
      });
    } else {
      setId(nanoid());
    }
  }, [job]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior

    // Construct the new job object
    const job: Job = {
      id: id,
      title: formState.title,
      type: formState.type,
      location: formState.location,
      description: formState.description,
      salary: formState.salary,
      company: {
        name: formState.companyName,
        description: formState.companyDescription,
        contactEmail: formState.contactEmail,
        contactPhone: formState.contactPhone,
      },
    };

    // Basic validation
    if (
      !job.type ||
      !job.title ||
      !job.salary ||
      !job.location ||
      !job.company.name ||
      !job.company.contactPhone ||
      !job.company.contactEmail
    ) {
      toast.warning("Please fill all the required data.");
      return;
    }

    jobSubmit(job);

    // Optionally clear the form
    setFormState({
      title: "",
      type: "Full-Time",
      location: "",
      description: "",
      salary: "Under $50K",
      companyName: "",
      companyDescription: "",
      contactEmail: "",
      contactPhone: "",
    });

    toast.success(id ? "Job Updated Successfully" : "Job Added Successfully");
    return id ? navigate(`/jobs/${id}`) : navigate("/jobs");
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              {formTitle}
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={formState.type}
                onChange={handleChange}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value={formState.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"
                value={formState.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={formState.salary}
                onChange={handleChange}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                value={formState.location}
                onChange={handleChange}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="companyName"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={formState.companyName}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="companyDescription"
                className="border rounded w-full py-2 px-3"
                placeholder="What does your company do?"
                value={formState.companyDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={formState.contactEmail}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={formState.contactPhone}
                onChange={handleChange}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobFormPage;
