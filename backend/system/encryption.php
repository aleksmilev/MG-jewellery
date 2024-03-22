<?php

    function decrypt($encrypted_data) {
        try {
            $encrypted_data = base64_decode($encrypted_data);
            $encryptionKey = "2w7X9cR$#mP!zF5T@K&yH8eB";

            $result = '';

            for ($i = 0; $i < strlen($encrypted_data); $i++) {
                $charCode = ord($encrypted_data[$i]) ^ ord($encryptionKey[$i % strlen($encryptionKey)]);
                $result .= chr($charCode);
            }

            return json_decode($result, true);
        } catch (Exception $error) {
            return json_decode("{}", true);
        }
    }
?>