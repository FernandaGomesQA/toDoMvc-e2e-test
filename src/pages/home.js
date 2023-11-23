const { Page } = require('./_page')

class HomePage extends Page {
    constructor(page) {
        super(page)
   
        this.pageTitle = this.locator('section h1')
        this.inputToDo = this.locator('input[class="new-todo"]')
        this.taskAdd = this.locator('[class="view"]')
        this.checkbox = this.locator('input[class="toggle"]')
        this.btnActive = this.locator('#active')
        this.btnAll = this.locator('a.selected')
        this.btnCompleted = this.locator('a[href="#/completed"]')
        this.btnClearCompleted = this.locator('button[class="clear-completed"]')
    }

    //validar o titulo da pagina
    async validateTitle(title){
        await expect(this.pageTitle).toHaveText(title)
    }

    //inserir uma tarefa
    async insertTask(task) {
        await this.inputToDo.fill(task)
        await sleep(3)
        await this.inputToDo.press('Enter')
    }

    //validar a tarefa inserida
    async validateInsertTask(task) {
        await this.btnAll.click()
        await sleep(5)
        await expect(this.taskAdd).toHaveText(task)
    }

    //clicar em completar a tarefa
    async taskCompleted(){
        await this.btnAll.click()
        await this.checkbox.click()
    }

    //validar a tarefa na aba completed
    async validateTaskCompleted(task){
        await this.btnCompleted.click()
        await sleep(2)
        await expect(this.taskAdd).toHaveText(task)
    }
    
    //limpar a lista
    async clearTaskList() {
        await this.btnClearCompleted.click()
        await sleep(2)
        await expect(this.taskAdd).toBeHidden()
    }

    
}

module.exports = {HomePage}