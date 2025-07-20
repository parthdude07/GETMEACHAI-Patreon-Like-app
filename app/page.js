

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Buy Me a Chai
      </h1>
   
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        A crowdfunding platfrom for Creators. Get funded by your fans and followers.start Now!
      </p>
    </div>
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
     
      
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Start Here
      </button>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Read More
      </button>
    </div>
  </div>
</section>
   
  );
}
