<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Registration Notification</title>
    <style>
       body {
			font-family: Arial, sans-serif;
			margin: 0px;
			padding: 0px;
		}
 
		.container {
			max-width: 600px;
			margin: 0 auto;
			padding: 20px;
			background-color: #fff;
			border-radius: 8px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
 
		.header {
			background-color: #4CAF50;
			color: #fff;
			padding: 10px 20px;
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
		}
 
		h2 {
			color: #333;
			margin-bottom: 10px;
		}
 
		p {
			color: #666;
			margin-bottom: 10px;
		}
		
		.footer {
			margin-top: 20px;
			border-top: 1px solid #ddd;
			padding-top: 10px;
			font-size: 14px;
			color: #666;
			
		}
		.table-content{
			text-align: left;
			background-color: white;
		}
		
		.bordered-table {
            border-collapse: collapse;
            width: 50%;
        }

        .bordered-table td {
            border: 1px solid black;
            padding: 2px;
        }

        .bordered-table th {
            border: 1px solid black;
            padding: 2px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; display:inline-block">BookMySeat</h1>
        </div>
        <div class="table-content">
            <h2>New User Registration Notification</h2>
            <p>Hello Admin,</p>
            <p>A new user has registered with the following details:</p>
    		<table class="bordered-table">
    		<tbody>
    			<tr>
            		<td><strong>Name:</strong></td>
		            <td>${user.firstName} ${user.lastName}</td>
		        </tr>
		        <tr>
		            <td><strong>Email:</strong></td>
		            <td>${user.email}</td>
		         </tr>
		         <tr>
		            <td><strong>Phone Number:</strong></td>
		            <td>${user.phoneNumber?c}</td>
		         </tr>
    		<tbody>
		    </table>
            <p>Please review and take appropriate action.</p>
            <p>Please <a href="http://localhost:3000/login">click here</a> to login to your account</p>
        </div>
        <div class="footer">
            <p>Best regards,<br/>The BookMySeat Admin Team</p>
        </div>
    </div>
</body>
</html>