class $ {
    constructor(selector) {
        if (selector.typeof === "string") {
            this.element = document.querySelectorAll(selector)
        }
        else {
            this.element = []
            console.log(this.element);
            
            this.element.push(selector)
           
        }

    }
    append(html) {
        for (let index = 0; index < this.element.length; index++) {
            this.element[index].innerHTML += html

        }

    }

    value(val) {
        if (typeof val == 'string') {
            return this.element.value = val
        }
        else {
            return this.element.value
        }
    }
    on(oclick, myfunc) {
        return this.element.addEventListener(oclick, myfunc)
    }
    scrollTop(n) {
        return this.element.scrollTop = n
    }
    //cssi fornan islet slidere tetbiq et   
    css(myStyle) {

        for (const key in myStyle) {
            let value = myStyle[key];
            this.elmenet.style[key] = value;
        }
    }
    empty() {
        this.element.innerHTML = ""
    }
    remove() {
        return this.element.parentNode.removeChild(this.element)
    }

}