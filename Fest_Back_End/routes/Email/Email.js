var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport ({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'wdc.pg2022@gmail.com',
        pass: 'ochhjyjlfkmhzvhn'
    }
});


// // need a activate like notification
// router.post('/sendEmail', function(req, res, next) {
//     if (!'user' in req.session) {
//         res.sendStatus(403);
//         return;
//     }
// }

var mailOptions = {
    // sender address (who sends), do not need modified
    from: '"WDC PG Group" <wdc.pg2022@gmail.com>',

    // SELECT email FROM user (or friend?)
    to: 'chenghui_liu@hotmail.com, nguyerya@gmail.com, fulei01@hotmail.com,  santiagoreyes.training@gmail.com', // list of receivers (who receives)

    // Subject line
    subject: 'FEST APP 🥳 - You have a new event invitation!!!',

    text: 'The best platform for all events', // plaintext body
    // SELECT * FROM EVENT by event_id?
    html: `<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;1,100;1,200;1,300;1,900&display=swap" rel="stylesheet"> 
            <style> body {  font-family: 'NotoColorEmojiLimited', -apple-system, BlinkMacSystemFont} h1 {color: #101D42;} </style> 
            <div style="height: 45px; justify-content: left;">
                <svg width="100%" height="100%" viewBox="0 0 2445 2417" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                    <rect id="FestLogo" x="0" y="0" width="2444.23" height="2416.17" style="fill:none;"/>
                        <clipPath id="_clip1">
                            <rect x="0" y="0" width="2444.23" height="2416.17"/>
                        </clipPath>
                        <g clip-path="url(#_clip1)">
                            <g>
                            <path d="M2414.64,1229.86c0,-654.743 -531.568,-1186.31 -1186.31,-1186.31c-654.742,-0 -1186.31,531.567 -1186.31,1186.31c0,654.742 531.568,1186.31 1186.31,1186.31c654.742,-0 1186.31,-531.568 1186.31,-1186.31Z" style="fill:#ff8c42;"/><path d="M1205.72,954.061c-0,-0 78.656,-78.145 106.747,-156.801c28.091,-78.655 9.194,-192.553 9.194,-192.553" style="fill:none;stroke:#fff;stroke-width:79.74px;"/>
                            <path d="M1866.87,1146.33c0,-0 -109.867,-14.918 -189.39,10.615c-79.523,25.533 -158.447,109.799 -158.447,109.799" style="fill:none;stroke:#fff;stroke-width:79.74px;"/><circle cx="1121.92" cy="755.723" r="42.169" style="fill:#fff;"/><circle cx="1519.04" cy="699.139" r="42.169" style="fill:#fff;"/><circle cx="1803.03" cy="986.679" r="42.169" style="fill:#fff;"/><circle cx="1745.98" cy="1378.67" r="42.169" style="fill:#fff;"/>
                            <path d="M1817.86,573.795c-2.795,7.201 -12.768,34.359 -12.521,54.116c0.136,10.815 1.835,24.036 3.87,36.165l-31.024,-1.303c-17.326,-0.701 -33.575,0.276 -46.186,3.777c-15.495,4.302 -27.262,12.28 -35.28,22.722c-8.059,10.495 -12.239,23.34 -12.725,37.242c-0.528,15.106 5.059,32.249 6.186,39.833c0.918,6.175 2.079,12.482 2.525,18.729l-8.909,-2.609c-35.748,-10.202 -73.52,-7.502 -102.988,20.444c-19.928,18.898 -20.264,44.126 -19.71,69.057c0.265,11.953 2.815,28.216 3.373,43.971c0.05,1.425 0.01,3.112 -0.081,4.845c-7.233,-0.444 -16.195,-1.062 -23.108,-1.757c-19.373,-1.946 -39.389,-2.922 -55.944,-0.002c-17.931,3.163 -32.831,10.597 -43.795,22.011c-17.975,18.716 -22.308,47.719 -16.687,79.969c1.678,9.632 4.042,19.625 5.772,29.209l-4.121,-1.297c-12.033,-3.903 -24.014,-6.372 -34.971,-6.036c-21.853,0.67 -43.452,6.117 -62.84,16.31c-19.477,10.241 -26.976,34.367 -16.736,53.844c10.241,19.477 34.367,26.976 53.844,16.735c8.684,-4.565 18.388,-6.886 28.176,-7.186c4.338,-0.133 8.88,2.474 13.659,4.113c8.142,2.791 16.301,5.463 24.031,6.976c24.985,4.89 47.065,0.083 64.584,-20.823c15.383,-18.357 18.454,-47.005 12.522,-78.546c-1.947,-10.348 -4.575,-21.121 -6.058,-31.291c-0.229,-1.576 -0.381,-3.59 -0.466,-5.503c3.361,-0.363 7.541,-0.711 10.634,-0.63c17.532,0.46 36.579,3.58 51.996,4.332c29.897,1.459 51.681,-8.266 62.165,-21.594c10.936,-13.904 16.588,-33.233 17.18,-54.75c0.521,-18.894 -3.082,-39.966 -3.409,-54.671c-0.075,-3.358 -0.308,-8.657 -0.493,-12.491c6.608,-2.829 14.407,-0.61 21.588,1.439c12.786,3.649 28.37,9.113 42.264,9.186c18.777,0.099 35.975,-6.161 49.717,-23.163c21.799,-26.97 19.788,-59.401 15.16,-90.543c-0.317,-2.127 -1.38,-7.226 -2.487,-12.292c1.079,-0.042 2.12,-0.056 3.075,-0.041c11.728,0.191 24.477,1.42 36.413,2.242c19.64,1.353 37.69,1.158 50.089,-1.978c12.183,-3.081 21.45,-8.741 28.11,-15.559c4.919,-5.036 11.681,-14.113 11.794,-29.454c0.063,-8.536 -10.608,-41.353 -10.975,-70.632c-0.149,-11.893 6.734,-22.822 8.718,-28.46c3.905,-11.094 3.476,-19.813 2.6,-24.745c-3.852,-21.665 -24.568,-36.127 -46.233,-32.276c-16.942,3.012 -29.479,16.336 -32.298,32.365Z" style="fill:#fff;"/>
                            <path d="M660.011,1595.19c0,-0 12.767,30.252 31.598,65.498c12.67,23.714 28.384,48.818 43.154,67.798c28.494,36.615 89.817,103.882 89.817,103.882l-210.472,79.654c-15.022,5.499 -31.871,1.754 -43.15,-9.59c-11.278,-11.344 -14.925,-28.214 -9.339,-43.204l98.392,-264.038Zm172.673,-463.29c0,0 -6.899,165.034 19.249,252.924c18.152,61.011 60.202,169.749 107.695,233.198c52.403,70.007 110.095,123.938 110.095,123.938l-160.571,57.627c0,0 -62.484,-45.321 -129.399,-151.244c-49.367,-78.147 -74.297,-174.872 -74.297,-174.872l127.228,-341.571Zm287.093,-45.265c0,0 -20.713,126.403 26.241,270.318c63.27,193.921 174.017,293.656 174.017,293.656l-159.444,56.052c-0,0 -167.926,-116.142 -220.051,-322.123c-68.465,-270.556 30.174,-447.832 30.699,-447.304l148.538,149.401Zm75.436,75.997l346.165,348.052c9.849,9.906 13.974,24.148 10.943,37.785c-3.031,13.637 -12.8,24.79 -25.918,29.592l-115.688,40.67c0,-0 -25.419,-20.281 -55.665,-55.244c-35.885,-41.48 -79.293,-103.221 -105.392,-170.559c-62.78,-161.982 -54.445,-230.296 -54.445,-230.296Z" style="fill:#fff;"/>
                            </g>
                        </g>
                </svg>
            </div>
            <h1> Fest App </h1>
            <br> 
            <p> From the WDC Post-graduate group we welcome you to 'Fest.com - Find your next party'. </p>
            <h3> Our Approach </h3>
            <p> With the aim on developing a web application that is potentially commercially viable, our group has created 
                the Fest App which integrates real-world practices and technologies including state management, 
                client-side rendering, dynamic routing and third-party authentication. </p>
            <p> Likewise, with an emphasys on delivering a good user experience, Fest provides a light and dark mode 
                as well as an effortless and welcoming experience to all users.</p>
            <h3> Technologies Benefits </h3>
            <ul>
                <li>
                    Front-end & State Management - Vue: <br>
                    The front-end architecture includes the use of Vue3 and Vuex for state management. This architecture provides 
                    the capabilities to produce dynamic web pages such as user details prefilling and event list rendering while
                    also enhancing service performance and scalability by implementing a state which stores on the client specific
                    information such as user basic details, events to be displayed on the dashboard and in general any object, array or
                    boolean value needed within the app.
                    Hence, state management allows the app to reduce the amount of back-end calls that request the same data and allows
                    any component of the app to access a global data structure. 
                </li>
                <li>
                    Back-End - Express JS: <br>
                    Express JS was implemented with custom routes that query data from or to a MySQL database. We implemented
                    middleware to block certain routes if the user is not logged in, thereby setting up sessions and cookies upon
                    page opens. 
                    We integrated a customed-made loggin service as well as a third-party login with Google. Likewise, we used
                    NodeMailer to send emails to our future app users and admins. 
                </li>
                <li>
                    Data Base - MySQL: <br>
                    The app implements MySQL for data storage. We developed an in-depth data schema which reflects the needs
                    of the app scalability.
                </li>
            </ul>
            <h3> Challenges </h3>
            Overall, our major challenge was delivering up to our high expectations of building a commercially viable project
             which led to time constraints and significant learning curves implementing such technologies. 
             Upon reflecting on our performance, to meet our high expectations as mentioned on milestone 1 we realise that achieving
             such quality would require us more time, hence, we acknowledge an overestimation of the amount of work that could
             be accomplished on such a tight amount of time. 
            <br>
            <h3> Check Our App Repository </h3>
            <a href="https://github.com/WDCpg/WDC-"> Fest App Git Repository </a> - <strong> Check MILESTONE2 BRANCK </strong> </p>
            <br>
            <p> Thank you for your consideration, kind regards </p>
            <p> WDC Post-Graduate Group </p>
            
            ` // html body
};

// send mail with defined transport object

router.post('/sendEmail', function(req, res, next) {
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
    
        console.log('Message sent: ' + info.response);
    });
    res.status(200).send('Email sent');
})


module.exports = router;