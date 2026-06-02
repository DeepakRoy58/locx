const express = require("express")
const crypto = require("crypto")

const app = express() ;

app.use(express.json()) ;

const otpStore = { } ;


// otp generator

function generateOTP(email)
{
	const otp  = crypto.randomInt(100000 , 1000000 ).toString() ;
	
	otpStore[email] = {
		otp ,
		expiresAt  : Date.now()  + 5 *60*1000 ,
	}

	return otp ;

} 


//SEND OTP route


app.post("/send-otp"  , (req , res)=> {

	const {email} = req.body ;

	const otp  = generateOTP(email) ;

	console.log("The Generated OTP is : " , otp ) ;

	res.json({
		success : true ,
		message : "OTP GENERATED"
		
	}) ;

})


//verify the otp 

app.post("/verify-otp", (req, res) => {

    const { email, otp } = req.body;
    const record = otpStore[email];

    if (!record) {
        return res.status(400).json({
            message: "OTP NOT FOUND",
        });
    }

    if (Date.now() > record.expiresAt) {
        delete otpStore[email];

        return res.status(403).json({
            message: "OTP EXPIRED :(",
        });
    }

    if (record.otp !== otp) {
        return res.status(403).json({
            message: "THE PROVIDED OTP WAS NOT FOUND / MAYBE WRONG PLEASE CHECK IT",
        });
    }

    delete otpStore[email];

    res.json({
        success: true,
        message: "OTP VERIFIED SUCCESSFULLY",
    });

});


app.listen(3000 , (req , res) => 
{
	console.log("server ran successfully:)") ;
} ) ;
