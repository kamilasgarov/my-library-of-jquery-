class $ {
    constructor(selector) {

        if (typeof (selector) === "string") {
            this.element = document.querySelectorAll(selector)

        }
        else {
            console.log(typeof(selector));
            
            this.element = []
            console.log(this.element);

            this.element.push(selector)
            console.log(this.element);
        }

    }
    append(html) {
        // console.log("lad;s");
        // console.log(this.element);

        for (let index = 0; index < this.element.length; index++) {
            // console.log(this.element[index]);
            this.element[index].innerHTML += html
            // console.log(this.element[index]);
            console.log(this.element[index]);




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