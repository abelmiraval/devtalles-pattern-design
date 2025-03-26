import {COLORS} from "../../helpers";
import {CodeEditorHistory, CodeEditorState} from "./01-inmutable";


function main() {
    const history = new CodeEditorHistory();
    let editorState = new CodeEditorState("console.log('Hola Mundo');", 2, false);

    history.save(editorState);

    console.log("%cEstado inicial:", COLORS.blue);
    editorState.displayState();

    editorState = editorState.copyWith({
        content: "console.log('Hola Mundo'); \nconsole.log('Nueva línea');",
        cursorPosition: 3,
        unsavedChanges: true
    })
    history.save(editorState);

    console.log("\n%cDespués del primer cambio:", COLORS.blue);
    editorState.displayState();


    console.log("\n%cDespués de mover el cursor", COLORS.blue);
    editorState = editorState.copyWith({cursorPosition: 5})
    history.save(editorState);
    editorState.displayState();

    console.log('\n%cDespués del Undo', COLORS.blue);
    editorState = history.undo()!;
    editorState.displayState();

    console.log('\n%cDespués del Redo', COLORS.blue);
    editorState = history.redo()!;
    editorState.displayState();
    
}

main();