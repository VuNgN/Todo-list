import html from "../core.js";
import { connect } from "../store.js"
import header from "../component/Header.js";
import todoList from "../component/todoList.js";
import Footer from "../component/Footer.js";

function app({ todos }) {
    return html`
        <section class="todoapp">
            ${header()}
            ${todos.length > 0 && todoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connect()(app)