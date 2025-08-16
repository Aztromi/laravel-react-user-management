import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { UserFormContextType } from "../interfaces/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { User } from "../interfaces/User";

// Create the context
const UserFormContext = createContext<UserFormContextType | undefined>(undefined);

export function UserFormProvider({ children }: { children: ReactNode }) {
    const [value, setValue] = useState({
        full_name: "",
        email: "",
        roles: [] as string[],
    });
    const [tableData, setTableData] = useState<User[]>([]);
    const [selectedRole, setSelectedRole] = useState("All");
    useEffect(() => {
        // Immediately fetch once
        handleFetchUsers(selectedRole);
        const interval = setInterval(() => {
            handleFetchUsers(selectedRole);
        }, 2000);
        return () => clearInterval(interval);
    }, [selectedRole]);
    const navigate = useNavigate();
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/insertUser",
                {
                    full_name: value.full_name,
                    email: value.email,
                    roles: value.roles,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            alert("User Saved Successfully");
            navigate("/users");

        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data;
                console.error("Error response:", errorMessage);
                alert(`${errorMessage.message}: ${errorMessage.errors.email}` || "Something went wrong!");
            } else {
                console.error("Error:", error.message);
                alert("Failed to connect to server.");
            }
        }
    }

    async function handleFetchUsers(role: string) {
        try {
            const response = await axios.get(`http://localhost:8000/api/fetchUsers${role === "All" ? "" : "/" + role}`);
            setTableData(response.data);
        } catch (error: any) {
            if (error.response) {
                const errorMessage = error.response.data;
                console.error("Error response:", errorMessage);
                alert(`${errorMessage.message}: ${errorMessage.errors.email}` || "Something went wrong!");
            } else {
                console.error("Error:", error.message);
                alert("Failed to connect to server.");
            }
        }
    }
    return (
        <UserFormContext.Provider value={{ value, setValue, handleSubmit, tableData, selectedRole, setSelectedRole }}>
            {children}
        </UserFormContext.Provider>
    );
}

export function useUserForm() {
    const context = useContext(UserFormContext);
    if (!context) {
        throw new Error("useUserForm must be used within a UserFormProvider");
    }
    return context;
}