<h1 align="center"> Liberty Crm</h1></br>

</br>
</br>

# Requirements

1. Node version 12 or higher
2. Install either yarn or npm
3. Install your favourite Code Editor. We recommend vscode for better code highlighting.
4. Install the docker & docker-compos on the host machine - Optional

</br></br>

# Setup & Run Project

1. Clone the code from this repository and navigate into the folder

```bash
cd Crm_frontend
```

2. Install npm packages

```bash
npm install or yarn install
```

3. Run the project by using below command;-

```bash
npm start or yarn start
```

5. Runs the app in development mode.<br>
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser

</br></br>

# Project structure

-   <b>App</b> - Entry level of the project with the Routes
-   <b>assets</b> - Project images, logos etc to be used by the project
-   <b>contexts</b> - A React component that subscribes to context changes that can be accessed from any page in the project
-   <b>helpers</b> - The project common configs to be used by the entire project
-   <b>hooks</b> - Make use of the contexts to allow the components accesable all over the project
-   <b>layout</b> - it contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.
-   <b>pages</b> - The files in the pages folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its subfolder. Each page has its state and is usually used to call an async operation. It usually consists of various components grouped.
-   <b>components</b> - Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project. Each component should consist of a test file to do a unit test as it will be widely used in the project.
-   <b>Routes</b> - This folder consists of all routes of the application. It consists of private, protected, and all types of routes. Here we can even call our sub-route.
-   <b>services</b> - This folder will be added if we use redux in your project. Inside it, there are 3 folders named actions, reducers, and constant subfolders to manage states.
