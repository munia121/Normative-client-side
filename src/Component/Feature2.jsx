import image from '../assets/imagw4.jpg'
const Feature2 = () => {
    return (
        <div className='mt-20'>
            <div className=" bg-fixed bg-no-repeat bg-cover text-white pt-10 my-20" style={{
                    backgroundImage: `url(${image})`,
                }}>
               <div>
                <div className="md:w-4/12 my-8 mx-auto text-center">
                    <p className="text-yellow-600 mb-2">--- some text here---</p>
                    <h2 className="text-3xl uppercase border-y-4 py-4">Together for a Better Tomorrow</h2>
                </div>
            </div>
                <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center px-32 pb-20 py-12">
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <div className="md:ml-10">
                        <p>Aug 20, 2029</p>
                        <p className="uppercase">Where can i get some?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus saepe placeat laudantium alias quidem, optio temporibus? Dolore, iure eveniet dolor explicabo officiis excepturi impedit delectus dolorum quod provident, rem accusamus veniam facere, alias molestias. Nulla molestiae delectus, dignissimos similique reiciendis, officia inventore rerum dolore unde illo rem, quas distinctio nisi.</p>
                        <button className="btn btn-outline border-0 border-b-4 font-bold">Show Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature2;