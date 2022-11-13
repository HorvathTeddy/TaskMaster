import React, { createContext, useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState(null)

    const login = () => {
        setIsLoading(true)
        setUserToken('asdfghjk')
        AsyncStorage.setItem('userToken', 'asdfghjk')
        setIsLoading(false)
    }

    const logout = () => {
        setIsLoading(true)
        AsyncStorage.removeItem('userToken')
        setUserToken(null)
        setIsLoading(false)
    }

    const isLoggedIn = async () => {
    try {
        setIsLoading(true)
        let userToken = await AsyncStorage.getItem('userToken')
        setUserToken(userToken)
        setIsLoading(false)
    } catch {
        console.log(`Error $(e)`)
    }
    } 

    useEffect(() => {
        isLoggedIn()
    }, [])

    return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
            { children }
        </AuthContext.Provider>
    )
}