const { Page } = require('./_page')

class HomePage extends Page {
    constructor(page) {
        super(page)
   
        this.react = this.locator('a[class="applist-item"][href="examples/react/dist/"]')
        this.pageTitle = this.locator('section h1')
        this.inputToDo = this.locator('#todo-input')
        this.taskAdd = this.locator('label[data-testid="todo-item-label"]')
        this.checkbox = this.locator('input[data-testid="todo-item-toggle"]')
        this.btnActive = this.locator('#active')
        this.btnAll = this.locator('a.selected')
        this.btnCompleted = this.locator('a[href="#/completed"]')
        this.btnClearCompleted = this.locator('button[class="clear-completed"]')
    }

    async validateTitle(title){
        await this.pageTitle.waitFor({ state: 'visible' })
        await expect(this.pageTitle).toHaveText(title)
    }

    async insertTask(task) {
        await this.inputToDo.fill(task)
        await sleep(1)
        await this.inputToDo.press('Enter')
        await this.taskAdd.waitFor({ state: 'visible' })

    }

    async validateInsertTask(task) {
        await this.btnAll.click()
        await this.taskAdd.waitFor({ state: 'visible' })
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