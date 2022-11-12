import {
    createSelector,
    createEntityAdapter,
} from '@reduxjs/toolkit'
import { apiSlice } from '../app/api/apiSlice'

const tasksAdapter = createEntityAdapter({})

const initialState = tasksAdapter.getInitialState()

export const tasksApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getTasks: builder.query({
            query: () => '/tasks',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedTasks = responseData.map(task => {
                    task.id = task._id
                    return task
                })
                return tasksAdapter.setAll(initialState, loadedTasks)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        { type: 'Tasks', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'User', id }))
                    ]
                } else return [{ type: 'User', id: 'LIST'}]
            }
        }),
    }),
})

export const {
    useGetTasksQuery, 
} =   tasksApiSlice

export const selectTasksResult = tasksApiSlice.endpoints.getTasks.select()

const selectTasksData = createSelector(
    selectTasksResult,
    tasksResult => tasksResult.data
)

export const {
    selectAll: selectAllTasks,
    selectById: selectUserById,
    selectIds: selectUserIds
} = tasksAdapter.getSelectors(state => selectTasksData(state) ??
initialState)