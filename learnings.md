## Backend
- we created professional api with try and catch error and status code 404 500 200
- created GET, PUT, POST, DELETE req for the data 
- tested api with postman 
- created api and backend in a systematic way
- router in express for clean code

## frontend
- how to intregate with api 
- practical usage of useform 
- usage of routers, routes and route in react for single page app
- use of toastify - library for success msg
- ebelick for cool backgrounds

## mongo db
- learnt about mongo atlas and more on mongo db

## to production 
- In express 
```
const __dirname = path.resolve()
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}
```

- install cross env beacuse we are in fucking windows
```
npm install cross-env --save-dev
``` 

- In pakage json
```"build": "npm install && npm install --prefix frontend && npm run build --prefix frontend",
"start": "cross-env NODE_ENV=production node backend/server"```
