(function(global, $) {
    const Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }
    
    Greetr.prototype = {
        fullName: function () {
           return `${this.firstName} ${this.lastName}`
        },
        validate: function() {
            if (this.supportedLanguages.indexOf(this.language) === -1) {
                throw new Error('Unsopperted language');
            }
        },
        greeting: function () { return `${this.greetings[this.language]} ${this.firstName}`},
        formalGreeting: function () {return `${this.formalGreetings[this.language]} ${this.fullName()}`},
        greet: function (formal) {
            let msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            if (console) {
                console.log(msg)
            }

            return this;
        },
        htmlGreeting: function(selector, formal){
            let msg;
            if(!$) {
                throw new Error('jQuery not loaded');
            }
            if(!selector) {
                throw new Error('selector not provided');
            }
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }
            
            $(selector).html(msg);

            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        },
        addLanguage: function (lang) {
            this.supportedLanguages.push(lang);
            console.log(this.supportedLanguages);
            return this;
        },
        addGreeting: function(lang, msg, isFormal) {
            if (!lang) {
              throw new Error('You should provide greeting');
            }
            if (!msg) {
              throw new Error('You should provide greeting');
            }
            this.addLanguage(lang);
            if (isFormal) {
               this.formalGreetings[lang] = msg; 
            } else {
               this.greetings[lang] = msg;
            }
            return this;
        },
        printGreetings: function (isFormal = false, parent = null) {
            const ul = document.createElement('ul');
            if(!$) {
                throw new Error('jQuery not loaded');
            }
            if (isFormal) {
               for(const el in this.formalGreetings) {
                   let li = document.createElement('li');
                   li.innerHTML = this.formalGreetings[el];
                   ul.append(li);
               } 
            } else {
                for(const el in this.greetings) {
                    let li = document.createElement('li');
                    li.innerHTML = this.greetings[el];
                    ul.append(li);
                } 
            }
            if (parent) {
                parent.append(ul);
            } else {
                $('body').append(ul);
            }
            return this;
        }
    };

    Greetr.init = function (firstName = '', lastName = '', language = 'en') {
        const self = this;
        self.firstName = firstName;
        self.lastName = lastName;
        self.language = language;
        self.supportedLanguages = ['en', 'es'],
        self.greetings = {
            en: 'Hello',
            es: 'Hola'
        };
        self.formalGreetings = {
            en: 'Greetings',
            es: 'Saludos'
        };
        self.logMessages = {
            en: 'Logged in',
            es: 'Inicio session'
        };
    }

    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));