import React, {createContext, useContext} from 'react'

const AlertContext = createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

export default function AlertContextComponent({ children }) {
    const [alert, setAlert] = React.useState(false)
    return (
        <AlertContext.Provider value={{
            show: alert,
            toggle: () => setAlert(prev => !prev)
        }}>
            { children }
        </AlertContext.Provider>
    )
}