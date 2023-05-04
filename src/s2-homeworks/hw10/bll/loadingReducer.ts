export type StateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false,
}

export const loadingReducer = (state:StateType = initState, action: LoadingActionType):StateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
           return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}


export const loadingAC = (isLoading: boolean): LoadingActionType => {
        return {
        type: 'CHANGE_LOADING',
            isLoading,
    } as const
};
