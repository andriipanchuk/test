#!/usr/bin/php -q
<?php ?><?php // Copyright (c) 2008-2021 Nagios Enterprises, LLC.  All rights reserved. ?><?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
