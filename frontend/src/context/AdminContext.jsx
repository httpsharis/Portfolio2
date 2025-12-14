import React, { createContext, useState } from "react";

export const AdminContext = createContext()

export const AdminProvider = ({ children }) => {
    // Initialize simply to false. 
    // This ensures that on every page refresh (which re-initializes this component),
    // the user defaults to logged out.
    const [isAdmin, setIsAdmin] = useState(false);

    const login = (token) => {
        // No localStorage.setItem here.
        // Persistence is intentionally removed so refresh = logout.
        setIsAdmin(true)
    }

    const logout = () => {
        setIsAdmin(false);
    }

    return (
        <AdminContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AdminContext.Provider>
    )
}