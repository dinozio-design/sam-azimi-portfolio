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
                    <p>GitHub repo link</p>
                    <p>GitHub icon</p>
                    <p>deployed link</p>
                    <p>deploy icon</p>
                    <button>JavaScrip</button>
                    <button>Object Oriented Programming (OOP)</button>
                    <button>CSS</button>
                    <button>Media Query</button>
                    <button>Mobile First</button>
                    <button>Responsive Design</button>
                    <button>HTML</button>
                </Card>
            </div>
        </>
    );
};