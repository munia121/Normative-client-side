import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAdmin = () => {

    const { user, loading } = useAuth()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            if (!user?.email) {
                return Promise.resolve(false)
            }
            const res = await axios.get(`http://localhost:5000/admin/${user?.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin, isAdminLoading]

};

export default useAdmin;