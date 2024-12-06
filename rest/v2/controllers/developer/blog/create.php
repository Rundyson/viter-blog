<?php
$conn = null;
$conn = checkDbConnection();
$blog = new Blog($conn);

if (array_key_exists("blogid", $_GET)) {
    checkEndpoint();
} 

checkPayload($data);

$blog->blog_title = checkIndex($data, "blog_title");
$blog->blog_category = checkIndex($data, "blog_category");
$blog->blog_reading_time = checkIndex($data, "blog_reading_time");
$blog->blog_image = checkIndex($data, "blog_image");
$blog->blog_author = checkIndex($data, "blog_author");
$blog->blog_description = checkIndex($data, "blog_description");
$blog->blog_excerpt = checkIndex($data, "blog_excerpt");
$blog->blog_date = checkIndex($data, "blog_date");

$blog->blog_is_active = 1;
$blog->blog_created = date("Y-m-d H:i:s");
$blog->blog_datetime = date("Y-m-d H:i:s");



// isNameExist($blog, $blog->blog_title);

$query = checkCreate($blog);
returnSuccess($blog, "blog", $query);