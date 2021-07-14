import React, {createContext, useContext} from 'react'

const AlertContext = createContext()
export const useAlert = () => {
    return useContext(AlertContext)
}

const AlertContextFunc = createContext()
export const useAlertFunc = () => {
    return useContext(AlertContextFunc)
}

export default function AlertContextComponent({ children }) {
    const [alert, setAlert] = React.useState(false)
    return (
        <AlertContext.Provider value={alert}>
            <AlertContextFunc.Provider value={setAlert}>
                { children }
            </AlertContextFunc.Provider>
        </AlertContext.Provider>
    )
}