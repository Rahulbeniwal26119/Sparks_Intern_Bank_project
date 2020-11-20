<?php
# require 'index.html';
require_once './html/navbar.html';
include 'index.html';
require_once  './php/user.php';
echo <<<_END
<script type="text/javascript" src="./js/show_user.js">
</script>
_END;
?>
