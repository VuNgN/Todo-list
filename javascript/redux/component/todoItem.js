import html from "../core.js";
import { connect } from "../store.js";

function todoItem({ todo, index, editIndex }) {
    return html`
        <li class="${todo.completed && "completed"} ${index === editIndex && "editing"}">
            <div class="view">
                <input 
                    class="toggle" 
                    type="checkbox" 
                    ${todo.completed && "checked"}
                    onchange='dispatch("toggle", ${index})'
                >
                <label ondblclick="dispatch('startEdit', ${index})">${todo.title}</label>
                <button 
                    class="destroy"
                    onclick="dispatch('destroy', ${index})"
                ></button>
            </div>
            <input 
                class="edit" 
                value="${todo.title}"
                onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value) || event.keyCode === 27 && dispatch('cancelEdit')"
                onblur="dispatch('endEdit', this.value)"
            >
        </li>

    `
}

export default connect()(todoItem)