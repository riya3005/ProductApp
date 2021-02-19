const initialstate = {
    list: [],
    searchValue: "",
    currentPage: 1,
}


const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'UPDATE_LIST':
            {
                const newList = action.listVal
                return {
                    ...state,
                    list: newList
                }
            }
        case 'UPDATE_CURRENT_PAGE':
            {
                return {
                    ...state,
                    currentPage: action.pageNumber
                }
            }

        case 'UPDATE_SEARCH_VALUE':
            {
                const updatedSearchValue = action.searchVal.length ? action.searchVal : ""
                return {
                    ...state,
                    searchValue: updatedSearchValue,
                    currentPage: 1
                }
            }


        default: return state;
    }


};

export default reducer;