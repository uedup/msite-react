const initState = 0;
export default function countReducer(preStore=initState,action){
    const {type,date} = action;
    switch(type){
        case 'increment':
            return preStore+date;
        case 'decrement':
            return preStore-date
        default :
            return preStore
    }
}