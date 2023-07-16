/**
 * Turismo
 * Eventos
 * - Visualização - CRUD
 * Noticias
 * Quiz
 * Login
 * Registre-se
 *  - Perfil usuario ou divulgador
 */

const view = require("../view/mainMenuView");
const tourismController = require("./tourismController");
const eventsController = require("./eventsController");
const newsController = require("./newsController");
const quizController = require("./quizController");
const loginController = require("./loginController");
const signUpController = require("./signUpController");

let activeUser = null;

function init() {
    let ans = 0;

    while (ans != 7) {
        view.showMenu();
        ans = +view.ask();

        switch (ans) {
            case 1: {
                tourismController.init();
            } break;
            case 2: {
                eventsController.init(activeUser);
            } break;
            case 3: {
                newsController.init();
            } break;
            case 4: {
                quizController.init(activeUser);
            } break;
            case 5: {
                if (activeUser != null) {
                    activeUser = loginController.changeAccount();
                } else {
                    activeUser = loginController.init();
                }
            } break;
            case 6: {
                signUpController.init();
                activeUser = loginController.newUserLogin();
            } break;
            case 7: {
                let name = activeUser == null ? `Visitante` : activeUser.name;
                view.showExitMessage(name);
            } break;
            default: {
                view.notifyError("Opção Inválida!");
                break;
            }
        }
    }

}

module.exports = {
    init
}