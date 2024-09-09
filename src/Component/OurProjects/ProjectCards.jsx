import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'


const ProjectCards = () => {
    return (
        <div className="mt-20 ">
            <div>
                <div className="md:w-4/12 my-8 mx-auto text-center">
                    <p className="text-yellow-600 mb-2">--- some text here---</p>
                    <h2 className="text-3xl uppercase border-y-4 py-4">Your Projects</h2>
                </div>
            </div>
            <div className=' mx-auto'>
                <div className='grid gap-y-10 lg:grid-cols-3 gap-10 grid-cols-1 mt-28 md:w-[1200px]  mx-auto'>
                    <div className=' rounded-lg shadow-2xl border p-5'>
                        <img className='rounded-lg h-[400px] w-[600px] ' src={photo2} alt="" />
                        <div className='space-y-4 mt-3'>
                            <h3 className='text-2xl'>Mindful Futures</h3>
                            <p>Promote mental health awareness among youth and provide tools for managing stress and anxiety. Workshops, seminars, online resources, and peer support groups.</p>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-2xl  border p-5'>
                        <img className='rounded-lg h-[400px] w-[600px] ' src={photo3} alt="" />
                        <h3 className='text-2xl'>Spiritual Pathways</h3>
                        <p>Foster spiritual development and a deeper understanding of Islamic teachings. Study circles, Quranic classes, and mentorship programs with religious scholars.</p>
                    </div>
                    <div className=' rounded-lg shadow-2xl border p-5'>
                        <img className='rounded-lg h-[400px] w-[600px] ' src={photo1} alt="" />
                        <h3 className='text-2xl'>Healthy Mind, Healthy Lives</h3>
                        <p>Provide support and resources to tackle common youth issues such as gaming addiction, substance abuse, and relationship difficulties.</p>
                    </div>
                    <div className='rounded-lg shadow-2xl  border p-5'>
                        <img className='rounded-lg h-[400px] w-[600px] ' src={photo1} alt="" />
                        <h3 className='text-2xl'>Mindful Futures</h3>
                        <p>Promote mental health awareness among youth and provide tools for managing stress and anxiety. Workshops, seminars, online resources, and peer support groups.</p>
                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;