import React, {createContext, useContext, useReducer} from 'react'

const AlertContext = createContext()
export const useAlert = () => {
    return useContext(AlertContext)
}

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch(action.type) {
        case SHOW_ALERT:
            return {
                ...state,
                visible: true,
                text: action.text
            }
        case HIDE_ALERT:
            return {
                ...state,
                visible: false
            }
        default: return state
    }
}

export default function AlertContextComponent({ children }) {

    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    return (
        <AlertContext.Provider value={{
            show: state.visible,
            text: state.text,
            showAlert: text => dispatch({ type: SHOW_ALERT, text}),
            hideAlert: () => dispatch({ type: HIDE_ALERT })
        }}>
            { children }
        </AlertContext.Provider>
    )
}