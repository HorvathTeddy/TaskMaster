import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGetUsersQuery } from './usersApiSlice'
import User from './User'

const UsersList = () => {
    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUsersQuery()

    let content

    if (isLoading) content = <Text>Loading...</Text>

    if (isError) {
        content = <Text className="errmsg">{error?.data?.message}</Text>
    }

    if (isSuccess) {

        const { ids } = users

        const tableContent = ids?.length
            ? ids.map(userId => <User key={userId} userId={userId} />)
            : null

        content = (
            <table className="table table--users">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th user__username">Username</th>
                        <th scope="col" className="table__th user__roles">Roles</th>
                        <th scope="col" className="table__th user__edit">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent}
                </tbody>
            </table>
        )
    }

    return content
}

export default UsersList

const styles = StyleSheet.create({})