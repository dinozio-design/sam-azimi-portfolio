import React from "react";
import Card from "../../layout/Card";

export default function Projects() {
    return (
        <>
            <div>
                <h2>
                    Projects
                </h2>
                <p>Below you can find a select list of the projects that I have created along with some details about them. All of these projects are open-source and if you follow the GitHub tab, you can find the repository that holds the source code for them. Some of these were class assignments and group projects, and some were just for fun.</p>
                <Card heading="Password Generator">
                    <p> This app is a great example of an Object Oriented JavaScript. Instead of using RegEx, I hardcoded every scenario (future refactoring is on the todo list to simplify the code with RegEx. It is in the que!). I used the window.prompt method to open the dialogue box and collect the userResponse for variety of options to generate a strong password. Nowadays every website or app has it's own requirements for a strong password that varries from lenght to Upper/Lowercase and alphanumeric or special characters. This app allows the user to chose any of the necessary requirements for a strong password. After the password is generated, the user then is able to copy the string and paste it to their own password keeper.</p>
                    <p>Image of the app goes here</p>
                    <p>GitHub repo link: https://github.com/dinozio-design/03-Password-Generator-JavaScript</p>
                    <p>GitHub icon</p>
                    <p>deployed link: https://dinozio-design.github.io/03-Password-Generator-JavaScript/</p>
                    <p>deploy icon</p>
                    <button>JavaScrip</button>
                    <button>Object Oriented Programming (OOP)</button>
                    <button>CSS</button>
                    <button>Media Query</button>
                    <button>Mobile First</button>
                    <button>Responsive Design</button>
                    <button>HTML</button>
                </Card>
                <Card heading = "Weather Dashboard">
                    <p>This app uses Server Side API ... write more description</p>
                    <p>Image of the app goes here</p>
                    <p>GitHub repo link: https://github.com/dinozio-design/06-Weather-Dashboard-Server-Side-APIs</p>
                    <p>GitHub icon</p>
                    <p>deployed link: https://dinozio-design.github.io/06-Weather-Dashboard-Server-Side-APIs/</p>
                    <p>deploy icon</p>
                    <button>JavaScrip</button>
                    <button>jQuery</button>
                    <button>Functional Programming</button>
                    <button>Local Storage</button>
                    <button>RESTFull</button>
                    <button>Third Party API</button>
                    <button>Server Side API</button>
                    <button>Bulma CSS</button>
                    <button>Mobile First</button>
                    <button>Responsive Design</button>
                    <button>HTML</button>
                </Card>
                <Card heading = "CRM Lite">
                    <p>This app is made for Lawn Maintenance Service business, and is meant to fascilitate scheduling for the business operator. It uses third party api to provide local weather forecast for the customer location, as well as Staturoty Holidays API for calendar booking.... add more description here</p>
                    <p>GitHub repo link: https://github.com/dinozio-design/CRM-lite</p>
                    <p>GitHub icon</p>
                    <p>deployed link: https://dinozio-design.github.io/CRM-lite/</p>
                    <p>deploy icon</p>
                    <button>JavaScript</button>
                    <button>jQuery</button>
                    <button>Functional Programming</button>
                    <button>Object Oriented Programming</button>
                    <button>JSON</button>
                    <button>Local Storage</button>
                    <button>RESTFull</button>
                    <button>Third Party API</button>
                    <button>Server Side API</button>
                    <button>CSS</button>
                    <button>Bulma CSS</button>
                    <button>Mobile First</button>
                    <button>Responsive Design</button>
                    <button>HTML</button>
                </Card>
                <Card heading = "Note Taker with Express.js">
                    <p> This app has a very simplified front end, however it showcases the strength of the backend server programing with Express.js. This app is deployed to Heroku. ... CRUD operation ...</p>
                    <p>GitHub repo link: https://github.com/dinozio-design/11-Note-Taker-ExpressJS</p>
                    <p>GitHub icon</p>
                    <p>deployed link on Heroku: https://serene-wave-69834-5e095d541a17.herokuapp.com/</p>
                    <p>deploy icon</p>
                    <button>JavaScrip</button>
                    <button>Express JS</button>
                    <button>JSON</button>
                    <button>CRUD</button>
                    <button>RESTFull</button>
                    <button>CSS</button>
                    <button>Bootstrap CSS</button>
                    <button>Mobile First</button>
                    <button>Responsive Design</button>
                    <button>HTML</button>
                </Card>
            </div>
        </>
    );
};