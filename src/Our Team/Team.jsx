
const Team = () => {
    return (
        <div>
            <section className="py-6 ">
                <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                    <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our <span className="text-[#0057d9]">Team</span></h1>
                    <p className="max-w-2xl text-center dark:text-gray-600">Our dedicated team creates unforgettable travel <br />experiences tailored just for you.</p>
                    <hr className="border w-full"/>
                    <div className="flex flex-row flex-wrap-reverse justify-center">
                        
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                            <p className="text-xl font-semibold leading-tight">Gomez Selina</p>
                            <p className="dark:text-gray-600">Chief product Officer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                            <p className="text-xl font-semibold leading-tight">Jenkins Fendish</p>
                            <p className="dark:text-gray-600">Head Of Marketing</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                            <p className="text-xl font-semibold leading-tight">Roronoa Zoro</p>
                            <p className="dark:text-gray-600">Visual Designer</p>
                        </div>
                        <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                            <p className="dark:text-gray-600">Web Developer</p>
                        </div>
                     <div className="flex flex-col justify-center m-8 text-center">
                            <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                            <p className="text-xl font-semibold leading-tight">Kageyoshi</p>
                            <p className="dark:text-gray-600">Customer Care</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;