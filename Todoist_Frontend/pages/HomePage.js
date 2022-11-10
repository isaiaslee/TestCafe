import {Selector, t} from 'testcafe'

class HomePage{

    constructor(){
        this.addTask = Selector('button').withText('Add task');
        this.addTaskBtn = Selector('button').child('span').withExactText('Add task');
        this.addTaskTitle = Selector('div').withAttribute('data-editor').child('div').child('span');
        this.responseCard = Selector('span#simple_content');
        this.todayLabel = Selector('span').withText('Today');
        this.singleTaskLabel = Selector('div').withText('SQA');
        this.tenTaskLabel = Selector('div');
    }

    async clickOnAddTask(){
        await t
        .click(this.addTask);
    }

    async clickOnAddTaskBtn(){
        await t
        .click(this.addTaskBtn);
    }

    async setTaskTitle(taskTitle){
        await t
        .typeText(this.addTaskTitle, taskTitle)
    }

}

export default new HomePage();