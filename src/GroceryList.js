import { Component } from "react";
import check from './reddish.jpg';

export class GroceryList extends Component {
    constructor() {
    super();

        this.state = {
            userInput: "", // #3  input - это то, что вводит пользователь и что буджет потом меняться. Изначально ставим пустым.
                        // мы также должны не только следить за тем, что меняется в тексте, но также и что добавляется юзером в какой-то список
            GroceryList: []    // #4  наш список будет добавляться через массив (один из методов массива), где идут перечни элементов. Это один спрошной массив (array)
        }
    }

onChangeEvent(event) {                  // #2  применяем this.setState чтобы отразить изменение состояния
    this.setState({userInput: event})   // мы хотим отразить то, что ввел юзер (userInput) и делаем это через event, основу которого мы заложили в стрелочной функции в п. #1
}

addItem(input) {                 // input - назвать можно как угодно
    if (input === '') {
        alert ("Please enter an item name")
    } else {                          
    let listArray = this.state.GroceryList;   // #8 создаем функцию метод addItem и далее указываем переменную, КУДА каждый новый элемент будет помещаться - this.state.GroceryList
    listArray.push(input)               // #9  прописываем как мы добавляем элементы в список listArray - через метод джаваскрипт - .push() - он ставит каждый 
                                        // новый элемент, добавленный пользователем, в конец списка
    this.setState({GroceryList: listArray, userInput: ''}) // #10 приравниваем список продуктов (массив) GroceryList к тому, что вводит пользователь listArray, 
                                                            // а также то поле ввода юзером userInput к пустоте через пустые кавычки ‘’ - после нажатия на кнопку поле ввода  очистится.
    console.log(listArray)
    }
}


crossedWord(event) {
    const li = event.target;                 // #13 - мы добавили event, так как добавили подслушку на элемент списка (задав const и li) и следим за ним (target). 
                                            // const li может иметь любое имя (const apple, for example) - не будет играть роли, так как onClick (#11) стоит на элементе <li></li>
    li.classList.toggle('crossed');         // #14 - как только пользователь нажмет на элемент списка (li), создастся класс и с элементом произойдут изменения, указанные в CSS.
}

deleteItem() {
    let listArray = this.state.GroceryList;     // получаем доступ снова к списку продуктов
    listArray = [];                            // это один из способов JS очистить массив: []; еще можно приравнять length к нулю: listArray.length = 0
    this.setState({GroceryList: listArray})
}

onFormSubmit(e) {
     e.preventDefault()         // е - нажатие на Enter; e.preventDefault() - предотвратить перезагрузку страницы каждый раз, когда нажимаем на кнопку Enter.
}

    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>         
                <div className="container">             
                <input type="text" 
                placeholder="What do you want to buy?"
                onChange={(event) => {this.onChangeEvent(event.target.value)}}     // #1    стрелочная function with .onChangeEvent() где мы прописываем, что мы
                                                            // хотим реагировать на изменения (продвинутый способ написания - запомнить) и что #6 мы получаем доступ к тому, что пишет пользователь
                value={this.state.userInput}                    // #5     value={} - это то, чему равно то, что пишет пользователь на данный момент (то есть значение)
                />     
                </div>

                <div className="container">
                    <button onClick={() => this.addItem(this.state.userInput)} className="add">Add</button>     
                </div>     

                <div>
                    <ul>
                        {this.state.GroceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}>
                        <img src={check} width="30px" alt="checkmark"/>    
                        {item}
                        </li>    // #11 - item - мы говорим, что мы хотим получить доступ (показать) каждый элемент, так как мы поставили map() на весь список -> 
                                    // показываем каждый элемент списка. <li></li> в стрелочной функции - мы говорим системе о месте, ГДЕ мы хотим все введеное отразить.
                        ))} 
                    </ul>
                <div className="container">
                    <button onClick={() => this.deleteItem(this.state.userInput)} className="delete">Clear</button>   
                </div>    
                </div>   
                </form>                                 
            </div>
        )
    }
}


// onChangeEvent - это наша функция, которую мы затем прописываем выше
// onChangeEvent(event) {} - где event - это мы хотим следить за событием.  Иногда можнл увидеть просто (е).
// #7 - кнопка ADD: добавденные предметы берутся из того, что внес юзер - через this.state.userInput и потом мы прописываем новосозданный элемент (метод) addItem как функцию (п. 8)
// #12   - <li onClick={this.crossedWord} key={index}>{item}</li>  - работаем с перечеркиванием слова, когда юземнанего нажимает - через onClick={this.crossedWord}, где crossedWord - это функция, название которой мы придумали и пропишем ее НАД render (введем класс). onClick - мы говорим системе, что функция должна срабатывать ПРИНАЖАТИИ ПОЛЬЗОВАТЕЛЕМ НА СЛОВО.

// #15 <input> заворачиваем в <form></form>, чтобы иметь возможность добавлять элементы в список продуктов нажатием кнопки Enter: используется атрибут onSubmit, в котором прописывается необходимая команда и далее - метод. 
// То есть, чтобы кнопка Энтер срабатывала при добавлении элемента в список продуктов, нужно все, что мы напечатали ранее просто обернуть в тег <form></form> и в нем прописать атрибут onSubmit, в котором дальше указать, что системе нужно сделать (через this.имяМетода/функции). Далее уже прописываем детали: 