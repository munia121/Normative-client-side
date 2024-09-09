import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:5000/users')
            return res.data
        }
    })


    
    const handleMakeAdmin = (user) => {
        axios.patch(`http://localhost:5000/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    // Swal.fire({
                    //     position: "top-end",
                    //     icon: "success",
                    //     title: `${user.name} is an Admin now`,
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });
                }
            })
    }




    return (
        <div>
              <div>
            <div>
                <div className="flex justify-evenly">
                    <h2 className="text-3xl"> All Users</h2>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table w-full border mt-10">
                        {/* head */}
                        <thead className="text-lg">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Role</th>
                                <th>Change Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users?.map((user, idx) => <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className={`${user.role === 'admin' ? 'text-fuchsia-600 font-bold' : 'text-teal-400 font-bold'}`}>
                                        {
                                            user.role === 'admin' ? 'Admin' : "User"}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm  ">
                                            Click
                                        </button>
                                    </td>
                                    {/* <td>
                                        <button className={`${user.status === 'Active' ? 'text-green-500 font-bold' : 'text-red-600 font-bold'} btn`} onClick={() => handleStatus(user)} >
                                            {user.status}
                                        </button>
                                    </td> */}

                                    <td>
                                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                        {/* <button className="bg-sky-600 px-3 py-1 text-white rounded-md" onClick={() => handleShowModal(user)}>See Info</button>
                                        <dialog id="my_modal_3" className="modal">
                                            <div className="modal-box">
                                                <form method="dialog">
                                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                </form>
                                                {modalData && (

                                                    <div className="space-y-3 text-lg">
                                                        <div>
                                                            <h3 className="font-bold text-3g">Name: {modalData.name}</h3>
                                                            <p className=""><samp className="font-bold">Email:</samp> {modalData.email}</p>
                                                        </div>

                                                        <p><samp className="font-bold">District:</samp> {modalData.district}</p>
                                                        <p><samp className="font-bold">Upazila:</samp> {modalData.upazila}</p>


                                                        <p><samp className="font-bold">Blood Group:</samp> {modalData.bloodGroup}</p>
                                                        <p className=""><samp className="font-bold">Status:</samp> : <span className={`${modalData.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}> {modalData.status}</span></p>

                                                    </div>

                                                )}
                                            </div>
                                        </dialog> */}

                                    </td>
                                    {/* <td>
                                        <button onClick={() => handleDownload(user)}>
                                            <FiDownload className="text-xl ml-10" />
                                        </button>
                                    </td> */}
                                </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllUser;