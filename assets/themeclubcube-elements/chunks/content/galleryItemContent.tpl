<section class="gallery-tiles" id="galleryContainer">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="gallery-h1">[[*pagetitle]]</h1>
			</div>
		</div>
		<div class="row">
			[[getImageList?
				&tpl=`galleryImageItemGallery`
				&tvname=`gallery`
				&docid=`[[*id]]`
				&outputSeparator=``
			]]
		</div>
	</div>
</section>
<div class="border-gall" id="borderGallery">
	<div class="container">
		<div class="row">
			<div class="gall-count pull-left" id="galleryCount">
				<div class="item-img">
					<div class="photo-c"></div>
					<div class="">[[+total]]</div>
				</div>
			</div>
			<div class="all-btn pull-left" id="allImagesBlock">
				<div class="all-icon"></div>
				<div class="all-icon-text">All</div>
			</div>
			<div class="img-counter" id="imagesCounter">

			</div>
			<div class="socials pull-right">
				<div class="share">[[%lf_share]]</div>
                <div class="fb-soc ver1" data-url="[[~[[*id]]? &scheme=`full`]]" data-text="[[*longtitle:default=`[[*pagetitle:htmlent]]`]]"></div>
                <div class="tw-soc ver1" data-url="[[~[[*id]]? &scheme=`full`]]" data-text="[[*longtitle:default=`[[*pagetitle:htmlent]]`]]"></div>
			</div>
		</div>
	</div>
</div>
<div class="scroll-down white" id="scrollButton">
	<div class="l-s-arr"></div>
	<div class="scroll-down-inner">[[%lf_gallery_item_about]]</div>
	<div class="r-s-arr"></div>
</div>
<div class="gall-close" id="galleryText">
	<section class="content-header white-no-img">
		<div class="container z-top">
			<div class="row">
				<div class="col-md-8 col-sm-8">
					<h1 class="content-h1 text-left">[[*pagetitle]]</h1>
				</div>
			</div>
		</div>
	</section>
	<div class="main-content gallery-text">
		<div class="container text-contain">
			<div class="row">
				<main class="col-lg-8 col-md-12 col-sm-12 content-main">
					<div class="content-page">
						<div class="page-text">
							[[*content]]
						</div>
					</div>
				</main>
				<aside class="col-lg-4 col-md-12 col-sm-12 items-aside">
					[[$eventsListAsideCommon]]
				</aside>
			</div>
		</div>
	</div>