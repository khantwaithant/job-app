import HomeCard from "./HomeCard"

const CardSection = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <HomeCard
              title="For Developers"
              description="Browser our React jobs and tart your career today."
              link="/jobs"
              btnName="Browse Jobs"
            />

            <HomeCard
              title="For Employers"
              description="List your job to find the perfect developer for the role."
              link="/add-job"
              btnName="Add Job"
              cardColor="bg-indigo-100"
              btnColor="bg-indigo-600"
              btnHoverColor="bg-indigo-500"
            />
          </div>
        </div>
      </section>
  )
}

export default CardSection