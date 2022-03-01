<?php header('Content-type: text/html;charset=utf-8');?>
<!DOCTYPE html>
<html class="no-js" lang="zh">
<head>
<meta charset="utf-8">
<meta http-equiv="x-ua-compatible" content="ie=edge">
<title>华夏文库</title>
<meta name="description" content="华夏中心-华夏文库-基于h5ai开发">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="<?= $public_href; ?>images/favicon/favicon-16-32.ico">
<link rel="apple-touch-icon-precomposed" type="image/png" href="<?= $public_href; ?>images/favicon/favicon-152.png">
<link rel="stylesheet" href="<?= $public_href; ?>css/styles.css" title="light">
<link rel="stylesheet" href="<?= $public_href; ?>css/dark.css" title="dark" disabled>
<script>
    function theme_switch() {
        let theme = document.getElementsByTagName('link')
        theme[3].disabled =! theme[3].disabled
    }
</script>
<script type="text/javascript" src="<?= $public_href; ?>ext/md_nav.js"></script>
<?php if (!$fallback_mode) {
	?><script src="<?= $public_href; ?>js/scripts.js" data-module="index"></script><?php
}
?>
<?= $x_head_tags;?>
</head>
<body class="index" id="root"><div id="fallback-hints">
<?php if (!$fallback_mode) {
	?><span class="noJsMsg">JS不可用</span><span class="noBrowserMsg">浏览器版本过低</span><?php
}
?><span class="backlink"><a href="https://larsjung.de/h5ai/" title="h5ai">powered by h5ai</a></span></div><div id="fallback"><?= $fallback_html;
?></div>
</body>
</html><!-- h5ai v0.30.0 - https://larsjung.de/h5ai/ -->