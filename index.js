let express = require('express');
let app = express();

// Your Express application logic goes here
app.get('/addTwoNumbers', (req, res) => {
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        res.send('Invalid input. Please provide numbers for both num1 and num2');
        return;
    }
    let sum = num1 + num2;
    // res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    res.status(200).send({data: sum, message: "success", status: 200});
    
});


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



