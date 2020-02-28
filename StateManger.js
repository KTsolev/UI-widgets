(function(global, $) {
    const GreetrState = function() {
        return new GreetrState.init();
    }
    
    GreetrState.init = function () {
        const self = this;
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
    
    GreetrState.init.prototype = GreetrState.prototype;
    
    global.GreetrState = global.G$ = GreetrState;
}(window, jQuery));