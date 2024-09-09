import { useEffect, useState } from "react";
import useAuth from "../../../Component/Hooks/useAuth";


const MyProfile = () => {
    const [userData, setUserData] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data)
            })
    }, [user?.email])
    console.log(userData)

    return (
        <div className="md:w-[1000px]  mx-auto border-[#d25470] border rounded-lg md:mt-28 md:h-[600px] flex justify-center items-center bg-[linear-gradient(180deg,_rgba(255,0,0,0.1)_0%,_rgba(255,0,0,0)_100%)]">
            <div className="text-center">
                <h2 className="text-4xl font-bold">Welcome Your Profile</h2>
                <div className="pt-5">
                    <p><span className="text-[#d25470] font-bold">Your Name: </span>{userData.name}</p>
                    <p><span className="text-[#d25470] font-bold">Your Email: </span>{userData.email}</p>
                    <p><span className="text-[#d25470] font-bold">Your Phone: </span>{userData.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfile; 