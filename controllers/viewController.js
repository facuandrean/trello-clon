const getViewMyBoards = (req, res) => {
    res.render("my-boards", { title: "Mi Organizador", titleView: "¡Organiza tus tareas!", descriptionView: "Crea los tableros que necesites para poder organizar, categorizar y lograr realizar todas tus tareas." })
};

export default {
    getViewMyBoards
}