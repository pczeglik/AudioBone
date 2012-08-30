<?php
header('Content-Type: text/plain');
$url = $_GET['url'];
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);