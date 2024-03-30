const getViewMyBoards = (req, res) => {
    res.render("my-boards", { title: "Mi Organizador", titleView: "¡Organiza tus tareas!", descriptionView: "Crea los tableros que necesites para poder organizar, categorizar y lograr realizar todas tus tareas." })
};

const getViewBoardsAutomatics = (req, res) => {
    res.render("boards-automatic", { title: "Mi Organizador", titleView: "¡Organiza tus tareas!", descriptionView: "Mantén organizadas tus tareas de manera temporal para que tengas en claro tus objetivos a cumplir." })
};

const getViewCalendar = (req, res) => {
    res.render("calendar", { title: "Mi Organizador", titleView: "¡Guarda tus eventos!", descriptionView: "Anota tus próximos eventos para no olvidartelos." })
};

export default {
    getViewMyBoards,
    getViewBoardsAutomatics,
    getViewCalendar
}