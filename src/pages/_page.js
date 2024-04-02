class Page {
    constructor(page , baseUrl = CONFIG_ENV.baseUrl) {
        this.page = page
        this.baseUrl = baseUrl

        this.url = `${this.baseUrl}`
    }

    async goto() {
        await this.page.goto(this.url)
    }

    async load() {
        const currentUrl = this.page.url().split('?')[0]

        if(currentUrl !== this.url)
            await this.page.waitForNavigation({
                url: new RegExp(`${this.url}.*`)
            })
    }

    verifyPage() {
        return this.page.url().split('?')[0] === this.url
    }

    locator(locator) {
        return this.page.locator(locator)
    }

    frameLocator(locator) {
        return this.page.framLocator(locator)
    }
}

module.exports = { Page }