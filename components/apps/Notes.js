// Imports
import { useDispatch, useSelector} from "react-redux";
import {noteActions} from "@store/apps/NoteStore";
import React, { useState } from 'react';
// CSS Styles
import CSS from './Notes.module.scss';
import SmallWindow from "components/ui/SmallWindow";
import Button from "components/windowsUI/Button";
import Textbox from "components/ui/Textbox";

//Single Note Component
function Note(props){
    const [noteOpen, setNoteOpen] = useState(false);
    let noteCSS =  noteOpen ? `${CSS.note} ${CSS.noteOpen}`: `${CSS.note}`;

    function openNote(){
        setNoteOpen(prevState => !prevState);
    }
    function editNote(){
        props.editNote(props.id);
    }
    function deleteNote(){
        props.deleteNote(props.id);
    }

    return(
    <div className={noteCSS}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className={CSS.editButtons}>
            {noteOpen && <button onClick={editNote}>edit</button>}
            <button onClick={openNote}>{noteOpen ? "close" : "open"}</button>
            <button onClick={deleteNote}>delete</button>
        </div>
    </div>
    );
}

function Notes(){
    const dispatch = useDispatch();
    const fullNotes = useSelector(state => state.notes.notes);
    // const bDebuggingMode = useSelector(state => state.debug.bDebuggingMode);

    const [addNote, setAddNote] = useState(false);
    const [titleInput, setTitleInput ] = useState("");
    const [textInput, setTextInput ] = useState("");
    const [titleValid, setTitleValid ] = useState(false);
    const [textValid, setTextValid ] = useState(false);
    const [editMode, setEditMode ] = useState(false);
    const [editID, setEditID ] = useState();

    const placeholderTitle = "Title";
    const placeholderText = "Write your note here";

    function titleInputChanged(event){
        setTitleInput(event.target.value);
        if(event.target.value.trim() !== "")
        {
            setTitleValid(true);
        }
        else
        {
            setTitleValid(false);
        }
    }
    function textInputChanged(event){
        setTextInput(event.target.value);
        if(event.target.value.trim() !== "")
        {
            setTextValid(true);
        }
        else
        {
            setTextValid(false);
        }
    }
    function resetInputs(){
        setTextInput("");
        setTitleInput("");
        setTextValid(false);
        setTitleValid(false);
    }

    //Opens a form to add a new note
    function showAddNote(event){
        if(editMode)
        {
            saveNote(event);
            setAddNote(false);
            setEditMode(false);
        }
        else
        {
            setAddNote(prevState => !prevState);
        }
    }

    function saveNote(event){
        event.preventDefault();
        if(textValid && titleValid)
        {
            let id = 1;
            if(editMode)
            {
                id = editID;
                console.log(editID)
            }
            if(fullNotes === null)
            {
                id = 1;
            }
            else
            {
                let arrayOfIDs = [];
                for(let i = 0; i < fullNotes.length; i++)
                {
                    arrayOfIDs.push(fullNotes[i].id);
                    console.log(fullNotes[i].id);
                }
                console.log(arrayOfIDs)
                while(arrayOfIDs.includes(id))
                {
                    id++;
                }
            }
            dispatch(noteActions.addNote({id: id, text: textInput, title: titleInput, }));
            setEditMode(false);
            setAddNote(prevState => !prevState);
            resetInputs();
        }
    }

    function editNote(id){
        setEditID(id);
        setEditMode(true);
        setAddNote(true);
        setTitleValid(true);
        setTextValid(true);
        let noteToEdit = fullNotes.filter(item => item.id === id);
        setTitleInput(noteToEdit[0].title);
        setTextInput(noteToEdit[0].text);
        deleteNote(id);
    }

    function deleteNote(id){
        dispatch(noteActions.deleteNote({id: id}));
    }

    let NotesList = <h3 className={CSS.noNotes}>No Notes Found</h3>;
    // if((fullNotes !== null && fullNotes.length > 0) || editMode) 
    // {
    //     NotesList = (
    //         fullNotes.map((item) => 
    //     <Note title={item.title} text={item.text} key={item.id} id={item.id} deleteNote={deleteNote} editNote={editNote} />)
    //     )
    // }
    let todo;
    // if(bDebuggingMode)
    // {
    //     todo = (
    //     <ul className="devInfo">
    //         <li>Validation for adding note</li>
    //         <li>Add in Search bar</li>
    //         <li>Clean up NotesStorage</li>
    //         <li>array of id check</li>
    //         <li>fix up save notes</li>
    //         <li>Bug: opening 2nd Note while editing will delete note</li>
    //         <li>Bug: closing edit menu after Editing will delete note</li>
    //     </ul>);
    // }

   return(
<SmallWindow title="Notes" className={CSS.notesApp}>
    <h1>Notes App V1</h1>
    <Button size="small" className={CSS.addNote} onClick={showAddNote}>{addNote ? "Cancel" : "Add Note"}</Button>
    {/* <button className={CSS.addNote}>Search:</button>
    <input /> */}
    {addNote && 
       <form className={CSS.form} onSubmit={saveNote}>
            <Textbox id="title" title="Title" type="text" placeholder={placeholderTitle} maxLength="14" value={titleInput} onChange={titleInputChanged}/>
            <Textbox textArea title="Note" className={CSS.textarea} rows="10" cols="46" placeholder={placeholderText} maxLength="2000" value={textInput} onChange={textInputChanged}/>
            <Button size="small" type="submit">Save Note</Button>
       </form>
    }
    {NotesList}
    {todo}
</SmallWindow>

);}

export default Notes;