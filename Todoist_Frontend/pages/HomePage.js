import {Selector, t} from 'testcafe'

class HomePage{

    constructor(){
        this.addTask = Selector('button').withText('Add task');
        this.addTaskTitle = Selector('br');
        this.responseCard = Selector('span#simple_content');
        this.todayLabel = Selector('span').withText('Today');
        this.singleTaskLabel = Selector('div').withText('SQA single task');
        this.tenTaskLabel = Selector('div').withText('of 10');
    }

    async clickOnAddTask(){
        await t
        .click(this.addTask);
    }

    async setTaskTitle(taskTitle){
        await t
        .typeText(this.addTaskTitle, taskTitle)
    }
}

export default new HomePage();