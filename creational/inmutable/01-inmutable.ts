
import {COLORS} from "../../helpers";

export class CodeEditorState {
    readonly content: string;
    readonly cursorPosition: number;
    readonly unsavedChanges: boolean;

    constructor(content: string, cursorPosition: number, unsavedChanges: boolean) {
        this.content = content;
        this.cursorPosition = cursorPosition;
        this.unsavedChanges = unsavedChanges;
    }

    copyWith({
                 content,
                 cursorPosition,
                 unsavedChanges
             }: Partial<CodeEditorState>): CodeEditorState {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        )
    }

    displayState(): void {
        console.log('\n%cEstado del editor', COLORS.green);
        console.log(`
            Contenido: ${this.content}
            Cursor Pos: ${this.cursorPosition}
            Unsaved changes: ${this.unsavedChanges}
        `)
    }
}

export class CodeEditorHistory {
    private history: CodeEditorState [] = [];// Este estado si es muy pesado
    private currentIndex: number = -1; // 0,1,2,3,4,5,6, las copias seran muy pesadas

    save(state: CodeEditorState): void {
        if (this.currentIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.currentIndex + 1);
        }

        this.history.push(state);
        this.currentIndex++;
    }

    undo():CodeEditorState | null{
        if (this.currentIndex > 0) {
            this.currentIndex --;
            return this.history[this.currentIndex];
        }

        return null;
    }

    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }

        return null;// 0,1,2,3,4,5
    }
}