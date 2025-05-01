<?php
header("Content-Type:text/html;charset=utf-8");

// タイムゾーンの設定
date_default_timezone_set('Asia/Tokyo');

$site_top = "https://renatusbjj.com/";
$site_name = "Renatus BJJ";
$to = "info@renatusbjj.com";
$from = "info@renatusbjj.com";
$from_add = 1;
$BccMail = "riprig37@gmail.com";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // フォームから送信されたデータを取得
    $name = htmlspecialchars(trim($_POST['name']), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($_POST['email']), ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars(trim($_POST['phone']), ENT_QUOTES, 'UTF-8');
    $inquiry = htmlspecialchars(trim($_POST['inquiry']), ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars(trim($_POST['message']), ENT_QUOTES, 'UTF-8');

    // メール送信先
    $subject = "お問い合わせフォームからのメッセージ";

    // メール本文
    $body = "以下の内容でお問い合わせがありました。\n\n";
    $body .= "名前: $name\n";
    $body .= "メールアドレス: $email\n";
    $body .= "電話番号: $phone\n";
    $body .= "ご用件: $inquiry\n";
    $body .= "メッセージ:\n$message\n";

    // メールヘッダー
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Bcc: $BccMail\r\n";

    // メール送信処理
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // メールアドレスのバリデーション
        if (mail($to, $subject, $body, $headers)) {
            echo "お問い合わせ内容を送信しました。ありがとうございます。";
        } else {
            echo "送信中にエラーが発生しました。もう一度お試しください。";
        }
    } else {
        echo "無効なメールアドレスです。";
    }
} else {
    echo "不正なリクエストです。";
}
?>