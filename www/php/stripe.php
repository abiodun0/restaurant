<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
require 'vendor/autoload.php';
\Stripe\Stripe::setApiKey("sk_test_51uftimvTLw53nTgWlI44byq");
if ($_SERVER['REQUEST_METHOD'] == 'POST' && empty($_POST)){
    $_POST = json_decode(file_get_contents('php://input'), true);
// Get the credit card details submitted by the form
$token = $_POST['token'];
$cost = $_POST['total_cost'];

// Create the charge on Stripe's servers - this will charge the user's card
try {
$charge = \Stripe\Charge::create(array(
  "amount" => $cost * 100, // amount in cents, again
  "currency" => "ngn",
  "source" => $token,
  "description" => "Charges from sales")
);
echo "transaction successfull";
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}
}
?>