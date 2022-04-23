import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import Sidebar from "../../partials/Sidebar";
import { setUser } from "../../slices/auth/auth";


const Dashboard = () => {
    const { user } = useAppSelector((state) => state.auth);
    const [currentUser, setCurrentUser] = useState('');

    return(
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;