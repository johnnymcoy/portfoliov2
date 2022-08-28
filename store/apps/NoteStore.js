import { createSlice } from "@reduxjs/toolkit"


let localNotes;
let initialNotes;
if (typeof window !== 'undefined') {
    // Perform localStorage action
    localNotes = JSON.parse(localStorage.getItem('notes'));
}
  

if(localNotes === null)
{
    initialNotes =  
        [
            {
            id: 1,
            title: "note 1",
            text: "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blah"
            },
            {
                id: 2,
                title: "note 2",
                text: "Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blah"
            },
        ]
}
else
{
    initialNotes = localNotes;
}

const initialNotesState = {
    notes: initialNotes, 
}

const notesSlice = createSlice({
    name: "notes",
    initialState: initialNotesState,
    reducers: {
        deleteNote(state, action){
            const id = action.payload.id;
            state.notes = state.notes.filter(item => item.id !== id);
            localStorage.setItem("notes", JSON.stringify(state.notes));
        },
        addNote(state,action){
            const item = action.payload;
            state.notes.push({
                id: item.id,
                title: item.title,
                text: item.text,
            });
            localStorage.setItem("notes", JSON.stringify(state.notes));
        }
    }
});

export const noteActions = notesSlice.actions;
export default notesSlice.reducer;