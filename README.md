## V3.0.0

###Scripts de *npm run* en package.json

~~~
{
    "scripts" : {
        "jade" : "jade --watch --pretty lib/*.jade --out .",
        "stylus" : "stylus --use nib --compress --watch lib/app.styl --out public/css",
        "server" : "http-server ."
    }
}
~~~

### Estructura componente 
Tenemos dos carpetas **lib** y **public**, la cual se usará **stylus y jade** para compilar el html y el css.
    
* [x] Header
    * logo
    * nav
* Aside 
    * link idioma
* Container **(angularJS)**
* [x] Footer
    * Links de interes
    * Sociales      

### Usamos Browserify y Gulp

### Site  en Ingles y Español