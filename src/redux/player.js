import { createSlice } from "@reduxjs/toolkit";

const initState = {
    players:[],
    position:0,
}

export const player = createSlice({
    name:'player',
    initialState: initState,
    reducers:{
        addPlayer:(state , action)=>{
            state.players.push(action.payload)
            return state;
        },
        delPlayer:(state, action)=>{
            const newPlayers = state.players.filter(item=>item.id != action.payload.id)

            const newState = {
                players : newPlayers,
                position : state.position
            }
            return newState ;
        },
        resetPlayer:(state , action)=>{ 
            return initState ;
        },
        nextPlayer:(state , action)=>{
            const newState = {...state , position: action.payload}
            return newState ;
        },
        /** updateTod: (state, action) => {
            state.players[state.position].tod.push(action.payload)
        }**/
    }
})

export const { addPlayer , delPlayer , resetPlayer , nextPlayer } = player.actions 
export default player.reducer