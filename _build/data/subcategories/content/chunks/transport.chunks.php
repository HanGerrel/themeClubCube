<?php

$chunks = array();

$tmp = array(
    /*
     * Content
     */
    '404Content' => array(
        'file' => 'content/404Content',
        'description' => '',
    ),
    'indexContent' => array(
        'file' => 'content/indexContent',
        'description' => '',
    ),
    'galleryListContent' => array(
        'file' => 'content/galleryListContent',
        'description' => '',
    ),
    'galleryItemContent' => array(
        'file' => 'content/galleryItemContent',
        'description' => '',
    ),
    'blogItemContent' => array(
        'file' => 'content/blogItemContent',
        'description' => '',
    ),
    'blogListContent' => array(
        'file' => 'content/blogListContent',
        'description' => '',
    ),
    'blogListTileContent' => array(
        'file' => 'content/blogListTileContent',
        'description' => '',
    ),
    'eventsListContent' => array(
        'file' => 'content/eventsListContent',
        'description' => '',
    ),
    'eventsListTicketsContent' => array(
        'file' => 'content/eventsListTicketsContent',
        'description' => '',
    ),
    'eventsItemContent' => array(
        'file' => 'content/eventsItemContent',
        'description' => '',
    ),
);

// Save chunks for setup options
$BUILD_CHUNKS = array();

$chunkCategoryNameOld = '';
$i = 0;
foreach ($tmp as $k => $v) {

	/* @avr modChunk $chunk */
	$chunk = $modx->newObject('modChunk');
	$chunk->fromArray(array(
		'id' => 0,
		'name' => $k,
		'description' => @$v['description'],
		'snippet' => file_get_contents($sources['elements_core'].'/chunks/'.$v['file'].'.tpl'),
		'static' => BUILD_CHUNK_STATIC,
		'source' => 1,
		'static_file' => 'assets/'.PKG_NAME_LOWER.'-elements/chunks/'.$v['file'].'.tpl',
	),'',true,true);

//    $partsName = explode('/', $v['file']);
//    $chunkCategoryName = $partsName[0];
//
//    if($chunkCategoryName != $chunkCategoryNameOld) {
//        $chunkCategoryNameOld = $chunkCategoryName;
//        /* create category */
//        /* @var modCategory $category */
//        $chunkCategory[$i] = $modx->newObject('modCategory');
//        $chunkCategory[$i]->set('category',$chunkCategoryName);
//        echo $chunkCategoryName . '<br>';
//
//        $i++;
//    }

	$chunks[] = $chunk;

	$BUILD_CHUNKS[$k] = file_get_contents($sources['elements_core'].'/chunks/'.$v['file'].'.tpl');
}

//$attr[xPDOTransport::RELATED_OBJECT_ATTRIBUTES]['Children'] = array (
//    xPDOTransport::UNIQUE_KEY => 'category',
//    xPDOTransport::PRESERVE_KEYS => false,
//    xPDOTransport::UPDATE_OBJECT => true,
//    xPDOTransport::RELATED_OBJECTS => true,
//);
//$modx->log(xPDO::LOG_LEVEL_INFO,'Created sub category for chunks.');
//$category->addMany($chunkCategory);

unset($tmp);
return $chunks;