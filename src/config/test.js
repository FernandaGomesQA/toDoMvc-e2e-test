const base = require ('@playwright/test')

exports.test = base.test.extend({
    data: async ({page}, use) => {
        const data = require('./data')
        await use(data)
    }
})