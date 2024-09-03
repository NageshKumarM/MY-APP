ANGULAR: Angualr is framework to build single page applicatoins.


        Framework: combination of languages and libraries

            html, css, js, ts, rxjs, zone.js


        SPA: Only one html page, 
             view will change based on the user activity


    SETUP:
    ------
    1) download install node js

        check: node -v
               npm -v

    2) install angular from npm

        npm install -g @angular/cli@15

        check:  ng version

    3) create new porject and open it in brower

        ng new my-app


    PERMISSIONS:
    ------------

        1. open powershell as administrator and run

            set-executionPolicy unrestricted

    
    Angular Project Heirarchy:
    -------------------------


    Angular Concepts:
    -----------------


    ROUTING: Helps us to navigate from one view to another view
    --------

    implementtaition:
    -----------------
        1) Configure rotues in app-routing.module.ts
        2) create router-outlet in app.component.html


    4 types of routes
    -----------------

    1) General route: 
    -----------------
        {path:'login', component:LoginComponent}

    2) Empty route:
    ----------------
         {path:'', component:LoginComponent}

    3) WildCard route / fallback route:
    -----------------------------------

         {path:'**', component:PageNotFoundComonent}


    4) Children route:
    ------------------

         {path:'dashboard', component:DashboardComponent, children:[
            {path:'home',component:HomeComponent},
            {path:'welcome', component:WelcomeComponent},
             
        ]},


        cofigure router-outlet in dashboard right section

    ==>"cntrl+c to end the session".


        DIRECTIVES: Useful to alter the DOM
        ==========
        1) Structural Directives: Alters DOM structure
        -------------------------
        * ngIf
        * ngFor

        2) Attribute Directives: Changes the attribute values dynamically
        -------------------------
        * ngClass
        * ngStyle
        * ngSwitch
        * ngSwitchCase
        * ngSwitchDefault
        * ngModel
        * ngModelGroup
        * ngModelOptions
        * ngModelChange
        
        3) Component Directives: add new elements to the DOM
        -------------------------
        * ngComponentOutlet
        * ngComponentOutletFromComponent
        all directives are components

        PIPES:
        =====
        

DATA FLOW:
==========

steps:
------
1) import httpclient module

2) inject httpclient service

3) get vehicles method

4) 


API Integration:
===============
1) import httpclient module
2) inject httpclient service
3) get vehicles method
4) subscribe to the observable
5) use the data in the component
6) use the data in the template


Al Possible API calls:
=====================

1) all          get         get(URL)

2) filtering    get         get(URL?filter=red)


3) sorting      get         get(URL?sortBy=color&order=asc/desc)

4) pagination   get         get(URL?limit=10&page=1)

5) specific     get         get(URL/'ID number')===view

6) create       post        post(URl, data)

7) update       put         put(URL/id, data)====edit

8) delete       delete      delete(URL/id)

Activated root service


GIT:
=====

  1)Connect Laptop <-> Website , using:-
   git config --global user.email “09vishaldeep@gmail.com”
   git config --global user.name “vishaldeep9”

Check:  git config --list
 ---------

2)Connect Project <-> Repository
  =======================

  git init
  git remote add origin repo_URL

Check: git remote -v
--------------

3)Code Sync Process 
=====================

git add .(means all folders selected) (changes -> staged changes)
git commit -m "commit-msg" (staged changes -> zero)
git push, git push --set-upstream origin master -f (100%, commit in GitHub)


Check the previous commit:  git log


REACTIVE FORMS:
==============

1) FormGroup
2) Nested FormGroup
3) Dynamic Forms
4) FormArray
5) FormValidations




