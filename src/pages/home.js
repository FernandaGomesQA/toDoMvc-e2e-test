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

    async validateTitle(title){
        await expect(this.pageTitle).toHaveText(title)
    }

    async insertTask(task) {
        await this.inputToDo.fill(task)
        await sleep(3)
        await this.inputToDo.press('Enter')
    }

    async validateInsertTask(task) {
        await this.btnAll.click()
        await sleep(5)
        await expect(this.taskAdd).toHaveText(task)
    }

    async taskCompleted(){
        await this.btnAll.click()
        await this.checkbox.click()
    }

    async validateTaskCompleted(task){
        await this.btnCompleted.click()
        await sleep(2)
        await expect(this.taskAdd).toHaveText(task)
    }
    
    async clearTaskList() {
        await this.btnClearCompleted.click()
        await sleep(2)
        await expect(this.taskAdd).toBeHidden()
    }
}

module.exports = {HomePage}