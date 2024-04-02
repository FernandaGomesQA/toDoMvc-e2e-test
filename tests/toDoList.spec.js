const {test} = require ('../src/config/test')

const { HomePage } = require('../src/pages/home')

test.describe('Fluxo do toDoList', () =>{
    test('Deve conseguir inserir uma tarefa e validar a tarefa inserida', async({ page, data}) =>{
        const homePage = new HomePage(page)
        const toDoMvc = data.home.toDoMvc

        await homePage.goto()

        await homePage.validateTitle(toDoMvc.pageTitle)

        await homePage.insertTask(toDoMvc.task)

        await homePage.validateInsertTask(toDoMvc.task)

    }) 

    test('Deve conseguir completar uma tarefa e validar a tarefa completa', async({ page, data}) =>{
        const homePage = new HomePage(page)
        const toDoMvc = data.home.toDoMvc

        await homePage.goto()
        await homePage.validateTitle(toDoMvc.pageTitle)

        await homePage.insertTask(toDoMvc.task)

        await homePage.taskCompleted()

        await homePage.validateTaskCompleted(toDoMvc.task)

    })

    test('Deve conseguir limpar a lista de tarefas', async({ page, data}) =>{
        const homePage = new HomePage(page)
        const toDoMvc = data.home.toDoMvc

        await homePage.goto()
        await homePage.validateTitle(toDoMvc.pageTitle)

        await homePage.insertTask(toDoMvc.task)

        await homePage.taskCompleted()

        await homePage.clearTaskList()

    })
})